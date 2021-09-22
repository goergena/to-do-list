import React from 'react';
// import './App.css';
import Header from './components/Header'
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

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
        <Header subtitle={'Find what to do next!'}/>
        <div className="container">
          <button 
            className="big-button" 
            onClick={this.handlePick}>
              Give me something to do</button>
          <button onClick={this.removeAllTasks}>Clear task list</button>
          <TaskList tasks={this.state.tasks}/>
          <AddTaskForm addNewTask={this.addNewTask}/>
        </div>
      </div>
    );
  }
}

export default App;
