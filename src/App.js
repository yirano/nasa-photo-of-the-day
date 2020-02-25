import React, { useState, useEffect } from "react";
import axios from 'axios';
import PageTitle from './Components/PageTitle/PageTitle';
import ImageContainer from './Components/ImageContainer/ImageContainer';
import "./App.css";

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WysXP93cjIhjta8of3yl1NSC8hX3rUD3qaQMMadd`)
      .then(result => console.log(result))
  }, []);
  return (
    <div className="App">
      <PageTitle />
      <ImageContainer />
    </div>
  );
}

export default App;
