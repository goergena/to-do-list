import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        onRequestClose={props.handleClearSelectedTask}
        contentLabel='Selected Task'>
        <h3>Selected Task</h3>
        {props.selectedTask && <p>{props.selectedTask}</p>}
        <button onClick={props.handleClearSelectedTask}>Okay</button>
    </Modal>
)



export default TaskModal;
