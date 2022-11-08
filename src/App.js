import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoinput from "./Component/Todoinput";
import Todolist from "./Component/Todolist";
// import Todoitem from "./Component/Todoitem";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = (e) => {
   e.preventDefault();
   const newItem ={
    id:this.state.id,
    title:this.state.item
   }
   const updatedItem =[ ...this.state.items,newItem]

   this.setState({
    items:updatedItem,
    item:'',
    id:uuid(),
    editItem:false
   })
  };
  clearList = () => {
   this.setState({
    items:[]
   });
  };
  handleDelete = (id) => {
   const filtereditems =this.state.items.filter(item => item.id !==id);
   this.setState({
    items:filtereditems
   });
  };
  handleEdit = (id) => {
    const filtereditems = this.state.items.filter(item =>item.id !== id);

    const selecteditem = this.state.items.find(item => item.id === id);
    this.setState({
      items:filtereditems,
      item:selecteditem.title,
      id: id,
      editItem: true
    })
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center"> Todo Input</h3>
            <Todoinput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <Todolist
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
