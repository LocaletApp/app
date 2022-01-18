import { createTheme } from "@mui/material/styles"

// test change

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5684FB",
    },
    secondary: {
      main: "#99B5FC",
    },
    error: {
      main: "#f57171",
    },
    warning: {
      main: "#f9c77d",
    },
    info: {
      main: "#71bef5",
    },
    success: {
      main: "#7bf186",
    },
  },
})

export default theme
