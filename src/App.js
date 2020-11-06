import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import styled from "styled-components";
import StepsRecorderPage from "./pages/StepsRecorderPage";

const Container = styled.div`
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <StepsRecorderPage />
    </Container>
  );
};

export default App;
