import React from 'react';
import Task from '../task/Task';

const TasksList = ({ tasks, setTasks }) => {
    return (
        <div className='tasks__list'>
            <h2 className='tasks__subtitle'>Plans:</h2>
            {tasks.map((element) => (
                <Task 
                    setTasks={setTasks} 
                    element={element} 
                />
            ))}
        </div>
    );
};

export default TasksList;
