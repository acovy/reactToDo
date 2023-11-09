import {useState} from 'react';
import './TasksPage.scss';
import {Link} from 'react-router-dom';
import TasksForm from "../tasksForm/TasksForm";
import TasksList from '../tasksList/TasksList';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [value, setValue] = useState('');

    const handleOnSubmit = (event) => {
        setTasks((prevState) => [
            ...prevState,
            {
                name: value,
                id: new Date().getTime(),
            }
            ]);
            setValue('');
        };
    
    return (
    <div className='tasks'>
        <header>
            <Link to="/">❮❮ Homepage</Link>
        </header>
        <TasksForm handleSubmit={handleOnSubmit} value={value} setValue={setValue} />
        <TasksList tasks={tasks} setTasks={setTasks} />
    </div>
    )
}

export default TasksPage;
