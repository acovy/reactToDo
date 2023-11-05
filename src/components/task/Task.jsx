import { useState } from "react";
import "./Task.scss";

const Task = ({element, setTasks}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [inputEdit, setInputEdit] = useState(element.name);
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setTasks((prevState) => 
            prevState.map((item) => {
                if (item.id === element.id) {
                    return {...item, name: inputEdit};
                }
                return item;
            })
        )
        setIsEdit(!isEdit)
        
    }
    
        return (
            <div className="task">
                {isEdit ? (
                <div className="tasktrue">
                    <input className="tasktrue__editing-task" inputEdit={inputEdit} onChange={(event) => setInputEdit(event.target.value)}/>
                    <button className="tasktrue__btn-add" onClick={handleClick}>Добавить</button>
                </div>
                ) : (
                <div className="taskfalse">
                    <label className='taskfalse__radio'>
                    <input className="taskfalse__checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                        <p className={checked ? "taskfalse__checkbox_passive" : "taskfalse__checkbox_active"}>{element.name}</p>
                    </label>
                    <button className="taskfalse__btn-del" onClick={() => setTasks((prevState) => prevState.filter(delElem => delElem.id !== element.id))}>del</button>
                    <button className="taskfalse__btn-edit" onClick={() => setIsEdit(!isEdit)}>edit</button>
                </div>
                )
                }
            </div>
        )
}

export default Task;