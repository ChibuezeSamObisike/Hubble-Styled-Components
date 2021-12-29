import React from "react";
import { ThemeProvider } from "styled-components";
import Container from "./Components/styles/Container.styled";
import Header from "./Components/Header.jsx";
import GlobalStyle from "./Components/styles/Global";
import content from "./content.js";
import Card from "./Components/Card.jsx";
import Footer from "./Components/Footer";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },

    mobile: "768px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card {...item} />
          ))}
        </Container>{" "}
        <Footer />
      </>{" "}
    </ThemeProvider>
  );
}

export default App;
