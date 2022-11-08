import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./Component/Todoinput";
import Todolist from "./Component/Todolist";
import Todoitem from "./Component/Todoitem";

class App extends Component {
  render() {
    return <div>
      <div className="container">
        <div className="row">
          <Todoinput/>
          <Todolist />
        </div>
      </div>
    </div>;
  }
}

export default App;
