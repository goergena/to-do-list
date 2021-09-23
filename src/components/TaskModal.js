import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        contentLabel='Selected Task'>
        <h3>Selected Task</h3>
        {props.selectedTask && <p>{props.selectedTask}</p>}
    </Modal>
)



export default TaskModal;
