import { Flex, Text, Image, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Actions from "../components/actions";


const Column = ({ column, tasks }) => {

  return (
    <Flex w="310px" minH="420px" transition="1s" transitionDuration="1s" flexDir="column">
      <Flex align="center" justifyContent="space-between" rounded="3px 3px 0 0">
        <Text fontSize="17px" fontWeight={600} color="#585858">
          {column.title}
        </Text>
        <Actions />
      </Flex>

      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <Flex userSelect="none" rounded="8px" bg="column-bg" my="17px" p="1.5rem" flex={1} flexDir="column" ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <Flex
                    mb="1rem"
                    draggable={false}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <Image src={task.content} alt="" borderRadius="0.375rem" outline="1px solid" transition="0.1s"
                    transform={ draggableSnapshot.isDragging ? "rotate(2deg)" : "none"}                     
                    outlineColor={ draggableSnapshot.isDragging ? "card-border" : "transparent"}
                    boxShadow={ draggableSnapshot.isDragging ? "0 5px 10px rgba(0, 0, 0, 0.6)" : "unset"
                    }/>
                  </Flex>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default Column;
