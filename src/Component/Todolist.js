import React, { Component } from 'react';
import Todoitem from './Todoitem';


export default class Todolist extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>

        {items.map((item) => {
          return (
            <Todoitem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          Clear list{" "}
        </button>
      </ul>
    );
  }
}
