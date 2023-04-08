import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";

import Completed from "./Components/Completed";
import InProgress from "./Components/InProgress";
import Open from "./Components/Open";

function App(props) {
  const { todos } = useSelector((store) => store.Card_Slice);
  return (
    <div className={"container"}>
      <div className="row">
        <div className="col-md mt-5 border border-1">
          <h1>Amount of Tasks: {todos.length} </h1>
        </div>
      </div>
      <div className="row mt-3 p-3 justify-content-between">
        <div className="col-md-3 bg-light">
          <Open />
        </div>
        <div className="col-md-3 bg-light">
          <InProgress />
        </div>
        <div className="col-md-3 bg-light">
          <Completed />
        </div>
      </div>
    </div>
  );
}

export default App;
