import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// test change

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#6700EB",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
