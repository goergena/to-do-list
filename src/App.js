import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewTask = this.addNewTask.bind(this)
    this.state = {
      tasks: ['add', 'commit', 'push']
    }
  }
  addNewTask(userText) {
    this.setState((prevState)=> ({
      tasks: prevState.tasks.concat([userText])
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <header>
            <h1>To Do List</h1>
          </header>
          <button>Give me something to do</button>

          <TaskList tasks={this.state.tasks}/>
          <AddTaskForm addNewTask={this.addNewTask}/>

        </div>
      </div>
    );
  }
}

const TaskList = (props) => {
    return (
      <ol>
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
      <input type='submit' value='Submit'/>
    </form>
    )
  }
}





export default App;
