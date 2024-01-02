import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: "none",
            color: "white",
            height: "50px",
            textDecoration: "none",
            textDecorationStyle: "none",
            fontFamily: "LilitaOne",
            fontSize: "18px",
            
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
