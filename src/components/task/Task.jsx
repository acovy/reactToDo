import { useState } from "react";

const Task = ({element, setTasks}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [inputEdit, setInputEdit] = useState(element.name);
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
            <div>
                {isEdit ? (
                <div>
                    <input inputEdit={inputEdit} onChange={(event) => setInputEdit(event.target.value)}/>
                    <button onClick={handleClick}>Добавить</button>
                </div>
                ) : (
                <div>
                    <label className='add__checkrule'>
                        <input type='checkbox' onChange={(event) => event.currentTarget.checked}/>
                        <p>{element.name}</p>
                    </label>
                    <button onClick={() => setTasks((prevState) => prevState.filter(delElem => delElem.id !== element.id))}>del</button>
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