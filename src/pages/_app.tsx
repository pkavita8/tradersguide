import "../assets/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1945FE" },
    secondary: { main: "#bee9e8" },
    background: {
      default: "black",
      paper: "black",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
