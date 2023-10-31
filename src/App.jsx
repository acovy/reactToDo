import {useState} from 'react';
import './App.scss';
import Task from './components/task/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault(); // для нажатия на кнопку add страница не обновлялась
    setTasks((prevState) => [
      ...prevState, 
      {
        name: value,
        id: new Date().getTime(),
      }
    ])
  }

  return (
  <div>
    <div>
        <form onSubmit={handleOnSubmit}>
          <h1>To-do List</h1>
          <input type="text" value={value} onChange={event => setValue(event.target.value)} /> 
          <button type="submit">add</button>
        </form>
        {tasks.map((element) => (
          <Task 
            setTasks={setTasks} 
            element={element} 
            style={{
              display: "flex",
          }}/>
        ))}
    </div>
  </div>
  )
}

// добавить пункт чекед на элемент в таск и стилизовать
// добавить scss (saas)
// стилизовать посмотрев варианты стилизации в интернетах 

export default App;
