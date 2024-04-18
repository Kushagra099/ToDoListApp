import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = (props) => (
  <tr className="d-flex">
    <td className="col-10">{props.todo}</td>
    <td className="col-2" style={{ textAlign: 'right' }}>
      <button>delete</button>
    </td>
  </tr>
);

export default function SimpleTodosList() {
  const [todos, setTodoList] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/activity/')
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Logged Todos</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return <Todo todo={todo.activity} key={todo._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
