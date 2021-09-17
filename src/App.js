import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this)
    this.handlePick = this.handlePick.bind(this);
    this.removeAllTasks = this.removeAllTasks.bind(this);
    this.state = {
      tasks: ['add', 'commit', 'push']
    }
  }
  addNewTask(userText) {
    this.setState((prevState)=> ({
      tasks: prevState.tasks.concat([userText])
    }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.tasks.length); 
    const option = this.state.tasks[randomNum]
    alert(option)
  }

  removeAllTasks() {
    this.setState(()=> ({tasks: []}))
  }


  render() {
    return (
      <div className="App">
        <div className="App-body">
          <header>
            <h1>To Do List</h1>
          </header>
          <button onClick={this.handlePick}>Give me something to do</button>

          <button onClick={this.removeAllTasks}>Clear task list</button>

          <TaskList tasks={this.state.tasks}/>
          <AddTaskForm addNewTask={this.addNewTask}/>

        </div>
      </div>
    );
  }
}

const TaskList = (props) => {
    return (
      <ol className='list-body'>
      {
        props.tasks.map((task, i) => <Task key={i} taskName={task}/>)
      }
    </ol>
    )
}

const Task = (props) => {
  
  return (
    <li>
      {props.taskName}
    </li>
  )
}


class AddTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.addNewTask = this.addNewTask.bind(this)
  }
  addNewTask(e) {
    e.preventDefault();
    let newTask = e.target.elements.newtask.value.trim();
    this.props.addNewTask(newTask)
  }
  render() {
    return (
      <form onSubmit={this.addNewTask}>
      <input type='text' name='newtask'/>
      <input type='submit' value='Submit' className='submit-btn'/>
    </form>
    )
  }
}





export default App;
