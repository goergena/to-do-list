import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return (
      <ol className='list-body'>
      {
        props.tasks.map((task, i) => <Task key={i} taskName={task}/>)
      }
    </ol>
    )
}

export default TaskList;