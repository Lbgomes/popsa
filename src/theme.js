import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  "main-bg": "#fff",
  "white-text": "#E8E8EA",
  "subtle-text": "#9B9B9B",

  "column-bg": "#2778a5",
  "column-header-bg": "#1A1D23",

  "card-bg": "#242731",
  "card-border": "#2D313E"
};



export default extendTheme({
  ...theme,
  colors,
});
