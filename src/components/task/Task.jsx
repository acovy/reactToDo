    import { useState } from "react";
    import "./Task.scss";
    import { AiOutlineDelete, AiOutlineEdit, AiOutlineLike } from "react-icons/ai";

    const Task = ({ element, setTasks }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [inputEdit, setInputEdit] = useState(element.name);
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setTasks((prevState) =>
        prevState.map((item) => {
            if (item.id === element.id) {
            return { ...item, name: inputEdit };
            }
            return item;
            })
        );
        setIsEdit(!isEdit);
    };

    return (
        <div className="task">
        {isEdit ? (
            <div className="tasktrue">
                <input placeholder="Write changed text" className="tasktrue__editing-task" inputEdit={inputEdit} onChange={(event) => setInputEdit(event.target.value)}/>
                <button className="tasktrue__btn-add" onClick={handleClick}><AiOutlineLike/></button>
            </div>
        ) : (
            <div className="taskfalse">
            <label className="taskfalse__label">
                <input className="taskfalse__checkbox" type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
                <div className="custom-checkbox"></div>
                <p type="text" className={checked ? "active" : "passive"}>
                    {element.name}
                </p>
            </label>
                <div className="button-group"> 
                    <button className="taskfalse__btn-edit"onClick={() => setIsEdit(!isEdit)}><AiOutlineEdit/></button>
                    <button className="taskfalse__btn-del" onClick={() => setTasks((prevState) => prevState.filter((delElem) => delElem.id !== element.id))}><AiOutlineDelete/></button>
                </div>
            </div>
        )}
        </div>
        );
    };

    export default Task;
