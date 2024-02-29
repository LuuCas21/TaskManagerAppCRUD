const Tasks = ({ id, name, deleteTaskHandler, openHandler, onGetIdEdit }) => {
    const editHandler = (e) => {
        openHandler();
        onGetIdEdit(e.target.getAttribute('id'));

        //console.log(e.target.getAttribute('id'));
    };

    return (
        <div className='task'>
            <p className='taskName'>{name}</p>
            <div>
            <button id={id} onClick={(e) => deleteTaskHandler(e.target.getAttribute('id'))} className='delete_btn'>delete</button>
            <button id={id} onClick={(e) => editHandler(e)} className='update_btn'>update</button>
            </div>
        </div>
    )
};

export default Tasks;