import React from "react"
import './App.css';
import Header from "./components/Header";
import KeyVisual from "./components/KeyVisual";
import Objective from "./components/Objective";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Header />
      <KeyVisual />
      <Objective />
      <Message />
    </div>
  );
}

export default App;
