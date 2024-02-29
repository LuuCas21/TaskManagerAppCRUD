import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import TaskInpuDiv from './components/Task_Input';
import Tasks from './components/tasks';
import UpdateTask from './components/UpdateTask';

function App() {
  const [getTask, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [idEdit, setIdEdit] = useState('');
  const [newEditTask, setNewEditTask] = useState('');

  const getAllTask = async () => {
    try {
      const { data } = await axios.get('/api/v1/tasks');
      setTask(data.task);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const createNewTask = async (newValue) => {
    try {
        await axios.post('/api/v1/tasks', newValue);
        getAllTask();
    } catch(err) {
      console.log(err);
    }
  };

  const updateTask = async (task) => {
    try {
      await axios.patch(`/api/v1/tasks/${idEdit}`, task);
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      getAllTask();
    } catch (err) {
      console.log(err);
    }
  };

  const openEdit = () => {
    setOpen(true);
  };

  console.log(idEdit);

  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <div className="App">
      {open && <UpdateTask openHandler={setOpen} updateTaskHandler={updateTask} id={idEdit}/>}
      {/* <div className='task_wrapper'> */}
        <TaskInpuDiv createNewTaskHandler={createNewTask}/>
        <div className='task_gallery'>
        {getTask.map(data => <Tasks key={data._id} id={data._id} name={data.name} deleteTaskHandler={deleteTask} openHandler={openEdit} onGetIdEdit={setIdEdit}/>)}
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
