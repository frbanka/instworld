import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "none",
            color: "white",
            height: "40px",
            textDecoration: "none",
            textDecorationStyle: "none",
            fontFamily: "NotoSans",
            fontSize: "20px",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "transparent",
            color: "green",
          },
        },
      },
    },
  },
});
