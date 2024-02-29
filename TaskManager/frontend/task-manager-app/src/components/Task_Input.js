import { useState, useRef, useEffect } from 'react';

const TaskInpuDiv = ({ createNewTaskHandler }) => {
    const [newValue, setNewValue] = useState({});
    const inputEl = useRef(null);

    const getInputValue = (e) => {
        e.preventDefault();
        createNewTaskHandler(newValue);
    };

    useEffect(() => {
        inputEl.current.focus();
    }, []);

    return (
        <form onSubmit={(e) => getInputValue(e)} className='form_task'>
            <input ref={inputEl} onChange={(e) => setNewValue({ name: e.target.value })} className='input_task' type='text' name='name' placeholder='ex: walk the dog'/>
            <button className='submit_task_btn' type='submit'>create</button>
        </form>
    );
};

export default TaskInpuDiv;