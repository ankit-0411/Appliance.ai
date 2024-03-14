import React from "react";
import "./App.css";
import Editor from "./Editor";
import CounterComponent from "./CounterComponent";
import UserDataForm from "./UserDataForm";

function App() {
  return (
    <>
      <div className="main_container">
        <CounterComponent />
        <Editor />
      </div>
      <div>
        <UserDataForm />
      </div>
    </>
  );
}

export default App;
