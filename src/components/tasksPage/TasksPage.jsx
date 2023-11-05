import {useState} from 'react';
import {Link} from 'react-router-dom';
import './TasksPage.scss';
import Task from '../task/Task';

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
    }

    return (
    <div className='tasks'>
        <header>
            <Link to="/">Back to Homepage</Link>
        </header>
        <div className='tasks__form'>
        <form onSubmit={handleOnSubmit}>
            <h1 className='tasks__title'>To-do List</h1>
            <input className='tasks__enter-task' type="text" value={value} onChange={event => setValue(event.target.value)} /> 
            <button className="tasks__btn-add" type="submit">add</button>
        </form>
        </div>
        <div className='tasks__list'>
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
