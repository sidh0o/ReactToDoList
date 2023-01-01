
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const [name, setName] = useState("");
  const [todolist, setTodolist] = useState([]);
  
  return (
    <div className="App">
    <Header></Header>
    <Form name={name} setName={setName} todolist={todolist} setTodolist={setTodolist}></Form>
    <Todo todolist={todolist} setTodolist={setTodolist}></Todo>
    </div>
  );
}

export default App;
