import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "blue",
            color: "white",
          },
        },
      },
    },
  },
});
