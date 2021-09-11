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
  addNewTask() {
    alert('add new task')
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
          <AddTaskForm/>

        </div>
      </div>
    );
  }
}

class TaskList extends React.Component {
  render() {
    return (
      <ol>
      {
          this.props.tasks.map((task, i) => <Task key={i} taskName={task}/>)
        }
    </ol>
    )
  }
}

class Task extends React.Component {
  render() {
    return (
      <li>
        {this.props.taskName}
      </li>
    )
  }
}

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.addNewTask = this.addNewTask.bind(this)
  }
  addNewTask(e) {
    e.preventDefault();
    let newTask = e.target.elements.newtask.value
    console.log(newTask)
    alert('add new task')
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
