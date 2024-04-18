const Todo = (props) => (
  <tr className="d-flex">
    <td className="col-10">{props.todo}</td>
    <td className="col-2" style={{ textAlign: 'right' }}>
      <button>delete</button>
    </td>
  </tr>
);

export default function SimpleTodosList() {
  const todos = [
    { activity: 'a', _id: '1' },
    { activity: 'b', _id: '2' },
    { activity: 'c', _id: '3' },
    { activity: 'd', _id: '4' },
    { activity: 'e', _id: '5' },
  ];

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