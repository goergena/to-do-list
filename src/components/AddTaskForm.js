import React from 'react';

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

  export default AddTaskForm;