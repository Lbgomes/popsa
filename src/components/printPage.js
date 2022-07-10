import { Flex, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const Column = dynamic(() => import("./Column"), { ssr: false });

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

export default function Home() {
  const [state, setState] = useState(initialData);
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different positoin
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex flexDir="column" bg="main-bg" minH="100vh" w="full" color="white-text" pb="2rem"
      >

        <Flex flexDir={isLargerThan1000 ? "row" : "column"} alignSelf="center" gap="1rem">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </Flex>
    </DragDropContext>
  );
}

const initialData = {
  tasks: {
    1: { id: 1, content: "https://videodelivery.net/775b1b7196b2c126b8dc343416211fdb/thumbnails/thumbnail.jpg?height=1080" },
    2: { id: 2, content: "https://videodelivery.net/9ad2bb839e4e3cc1074e5d73b0a0379b/thumbnails/thumbnail.jpg?height=1080" },
    3: { id: 3, content: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/large" },
    4: { id: 4, content: "https://videodelivery.net/91097538e177847ebeb934a492e146e9/thumbnails/thumbnail.jpg?height=1080" },
    5: { id: 5, content: "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/b73c2865-7a02-408b-654d-89ce2512ae00/large" },

  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Page 1",
      taskIds: [1],
    },
    "column-2": {
      id: "column-2",
      title: "Page 2",
      taskIds: [2, 3],
    },
    "column-3": {
      id: "column-3",
      title: "Page 3",
      taskIds: [4, 5],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};
