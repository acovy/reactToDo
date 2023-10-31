import {useState} from 'react';
import './App.css';
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
          <input type="text" value={value} onChange={event => setValue(event.target.value)} /> 
          <button type="submit">add</button>
        </form>
        {tasks.map((element) => (
          <Task setTasks={setTasks} element={element}/>
        ))}
    </div>
  </div>
  )
}

// добавить пункт чекед на элемент в таск и стилизовать
// добавить scss (saas)
// стилизовать посмотрев варианты стилизации в интернетах 

export default App;
