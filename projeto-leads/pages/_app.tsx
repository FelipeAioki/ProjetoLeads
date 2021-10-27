import React from "react";
import App from "next/app";
import Head from "next/head";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --azul: #04264A;
    --verde: #2ECC71;
    --branco: #F2F2F2;
    --cinza: #CED4DA;
    --preto: #161616;
    --cinza-texto: #5D5C5E;
    --vermelho: #F03A3C;
    --light-background: linear-gradient(---azul, rgba(4,44,87, 0.9));
    --dark-background: --branco;
  }
`;

export const myTheme: DefaultTheme = {
  input_boder: "1px solid rgba(206, 212, 218, 1)",
  border_radius: "5px",
  themes: {
    dark_background: "linear-gradient(rgba(4,38,74, 1), rgba(4,44,87, 0.9))",
    light_background: "branco",
  },
  colors: {
    azul: "#04264A",
    verde: "#2ECC71",
    branco: "#F2F2F2",
    cinza: "#CED4DA",
    preto: "#161616",
    cinza_texto: "#5D5C5E",
    vermelho: "#F03A3C",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <ThemeProvider theme={myTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
