import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <header>
          <h1>To Do List</h1>
        </header>
        <button>Give me something to do</button>
        <ol>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ol>
        <form>
          <input type='text'/>
          <button>Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default App;
