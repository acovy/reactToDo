import { AiOutlineSend } from "react-icons/ai";

const TasksForm = ({ handleSubmit, value, setValue }) => {
const handleOnSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
};

return (
        <div className='tasks__form'>
            <form onSubmit={handleOnSubmit}>
                <h1 className='tasks__title'>Todo</h1>
                <input
                className='tasks__enter-task'
                required
                minLength="1"
                maxLength="300"
                placeholder="Enter your todo"
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                />
                <button className="tasks__btn-add" type="submit">
                    <AiOutlineSend/>
                </button>
            </form>
        </div>
    );
};

    export default TasksForm;
