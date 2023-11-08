import {useState} from 'react';
import './TasksPage.scss';
import Task from '../task/Task';
import {Link} from 'react-router-dom';
import Header from '../header/header';

const TasksPage = () => {
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
    setValue('');
    }
    
    return (
    <div className='tasks'>
        <header>
            <Link to="/">❮❮ Homepage</Link>
        </header>
        <div className='tasks__form'>
        <form onSubmit={handleOnSubmit}>
            <h1 className='tasks__title'>✘TuoDuoList ❯❯</h1>
            <h2 className='tasks__subtitle'>-this world is yours-</h2>
            <input className='tasks__enter-task' required minlength="1" maxlength="300"placeholder="Enter your todo" type="text" value={value} onChange={event => setValue(event.target.value)} /> 
            <button className="tasks__btn-add" type="submit">ADD</button>
        </form>
        </div>
        <div className='tasks__list'>
        <h2 className='tasks__subtitle'>Plans:</h2>
            {tasks.map((element) => (
                <Task 
                setTasks={setTasks} 
                element={element} 
                />
            ))}
        </div>
    </div>
    )
}

export default TasksPage;
