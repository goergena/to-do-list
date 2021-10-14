import React from 'react';

class AddTaskForm extends React.Component {
    constructor(props) {
      super(props)
      this.addNewTask = this.addNewTask.bind(this)
      this.state = {
        error: undefined
      }
    }

    addNewTask(e) {
      e.preventDefault();
      let newTask = e.target.elements.newtask.value.trim();
      const error = this.props.addNewTask(newTask)
      this.setState(()=> ({ error }))
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p className="add-task-error">{this.state.error}</p>}
          <form className="add-task" onSubmit={this.addNewTask}>
            <input className="add-task__input" type='text' name='newtask'/>
            <input type='submit' value='Submit' className='submit-btn button'/>
          </form>
        </div>

      )
    }
  }

  export default AddTaskForm;