import React, { useState } from 'react';

const Task = (props) => {
    const [strike, updateStrike] = useState(false)
    
    return (
      <li onClick={()=>{updateStrike(!strike)}} className={strike ? "strike task" : "task"}>
        {props.taskName}
      </li>
    )
  }
  
  export default Task;