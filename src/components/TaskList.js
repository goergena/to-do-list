import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return (
      <div>
        {props.tasks.length ===0 &&
        <p className='widget__message'>
          Add a task to get started
          </p>}
        <ol >
        {
          props.tasks.map((task, i) => (
          <Task 
            key={i} 
            taskName={task}
            count={i+1}
          />))
        }
        </ol>
      </div>

    )
}

export default TaskList;