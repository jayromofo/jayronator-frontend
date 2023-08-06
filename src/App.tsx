import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface DoSomething {

}

interface TodoProperties {
  id: string;
  item: string;
  completed: boolean;
}

interface UserProperties {
  id: number;
  name: string;
  email: string;
}

const App = () => {


  const [users, setUsers] = useState<UserProperties[]>([]);
  const [error, setError] = useState([]);
  const [todos, setTodos] = useState<TodoProperties[]>([]);

  const getAllUsers = async () => {
    const response = await axios.get<UserProperties>("https://jsonplaceholder.typicode.com/users")
  };

  const fetchTodoData = () => {
    fetch(":3001/api/todos")
      .then(res => { return res.json() })
      .then(data => { return setUsers(data) });
  }





  useEffect(() => {
    axios
      .get<UserProperties[]>("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message));
  }, []);

  useEffect(() => {
    axios
      .get<TodoProperties[]>("http://localhost:3001/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => setError(err.message));
  }, []);



  return (
    <div className="App">
      <div className="users-container">
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} : {user.email}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="todos-container">
        {todos.length > 0 && (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.item} : {todo.completed}</li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}


export default App;
