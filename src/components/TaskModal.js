import React from 'react';
import ReactModal from 'react-modal';

const TaskModal = (props) => (
    <ReactModal
        isOpen={!!props.selectedTask}
        onRequestClose={props.handleClearSelectedTask}
        contentLabel='Selected Task'
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Task</h3>
        {props.selectedTask && <p className='modal__body'>{props.selectedTask}</p>}
        <button
        className='button'
         onClick={props.handleClearSelectedTask}>Okay</button>
    </ReactModal>
)



export default TaskModal;
