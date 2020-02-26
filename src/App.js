import React from "react";
import styled from 'styled-components';
import PageTitle from './Components/PageTitle/PageTitle';
import MediaContainer from './Components/MediaContainer/MediaContainer';
import "./App.css";

const WrapperDiv = styled.div`
  margin: 20px 170px;
  padding: 40px;
  text-align: center;
  background-color: #fbfbfb;
`;

function App() {
  return (
    <WrapperDiv>
      <PageTitle />
      <MediaContainer />
    </WrapperDiv>
  );
}

export default App;
