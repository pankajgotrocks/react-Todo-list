import React, { Component } from 'react';
import Todoitem from './Todoitem';


export default class Todolist extends Component {
  render() {
    return (
      <section>
        <h2> Todolist</h2>
        <Todoitem />
      </section>
    )
  }
}
