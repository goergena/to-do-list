import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ['add', 'commit', 'push']
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <header>
            <h1>To Do List</h1>
          </header>
          <button>Give me something to do</button>
          {/* <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ol> */}
          <TaskList tasks={this.state.tasks}/>
          <form>
            <input type='text'/>
            <button>Add Task</button>
          </form>
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





export default App;
