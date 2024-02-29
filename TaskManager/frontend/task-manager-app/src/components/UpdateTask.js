import { useState } from "react";

const UpdateTask = ({ id, updateTaskHandler, openHandler }) => {
    const [task, setTask] = useState({});

    const editTaskHandler = (e) => {
        e.preventDefault();
        updateTaskHandler(task);
        console.log(task);
        openHandler(false);
    };

    return (
        <div className='update_task_div'>
            <form onSubmit={(e) => editTaskHandler(e)} className='update_input_form'>
                <input type='text' name='id' defaultValue={id}/>
                <input onChange={(e) => setTask({ name: e.target.value })} type='text' name='name' placeholder='new edit'/>
                <button type='submit'>edit</button>
            </form>
        </div>
    )
};

export default UpdateTask;