import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

const Theme: DefaultTheme = {
  linearGradient: "linear-gradient(120deg,#e75590,#00c2cb)",
  white: "#fff",
  black: "#303030",
  gray: "#929292",
  lightGray: "#cfcfcf",
  borderHeight: "1px",
  inputError: "red",
  buttonLinear: "linear-gradient(120deg, #e75590, #00c2cb, #e75590)",
  buttonDisabled: "#acacac",
  buttonSucess: "rgb(18,151,107)",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(120deg,#e75590,#00c2cb);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
