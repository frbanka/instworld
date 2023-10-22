import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "none",
            color: "black",
            height: "40px",
            textDecoration: "none",
            textDecorationStyle: "none",
            fontFamily: "Supernatural",
            fontSize: "22px",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: "red",
          },
        },
      },
    },
  },
});
