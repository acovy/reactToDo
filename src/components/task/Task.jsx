import { useState } from "react";

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
    function chengeCheckbox() {
        setChecked(!checked);
    }

    let message;
    if(checked){
        message = <span>Выполнено</span>;
    }else{
        message = <span>Не выполнено</span>;
    }
    
        return (
            <div className="body">
                {isEdit ? (
                <div className="div__true">
                    <input inputEdit={inputEdit} onChange={(event) => setInputEdit(event.target.value)}/>
                    <button onClick={handleClick}>Добавить</button>
                </div>
                ) : (
                <div className="div__false">
                    <label className='add__checkrule'>
                    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                        <span>{message}</span>
                        <p>{element.name}</p>
                    </label>
                    <button style={{ marginTop: "5px", marginBottom: "5px" }} onClick={() => setTasks((prevState) => prevState.filter(delElem => delElem.id !== element.id))}>del</button>
                    <button onClick={() => setIsEdit(!isEdit)}>edit</button>
                </div>
                )
                }
            </div>
        )
// - чтобы оаботал условный рендеринг
// - вытащить значенте из инпута и поменять значение element 
// смысл пэтпроекта самостоятельно искать решение . пэтпроект - максимальное приближение к комерческой разработке . 
}

export default Task;