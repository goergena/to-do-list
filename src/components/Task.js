import React, { useState } from 'react';

const Task = (props) => {
    const [strike, updateStrike] = useState(false)
    
    return (
      <div
        onClick={()=>{updateStrike(!strike)}} className={strike ? "strike task" : "task"}>
        <p className="task__text">
          {props.count}. {props.taskName}
        </p>
      </div>
    )
  }
  
  export default Task;