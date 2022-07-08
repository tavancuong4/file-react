import React from "react";

class AddTodo extends React.Component {
  state = {
    work: "",
  };
  handleOnchangeTitle = (event) => {
    this.setState({
      work: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.work) {
      alert("missing work..");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      work: this.state.work,
    };
    this.props.addNewTodo(todo);
    this.setState({
      work: "",
    });
  };
  render() {
    let { work } = this.state;
    return (
      <div>
        <div className="add-todo">
          <input
            type="text"
            value={work}
            onChange={(event) => this.handleOnchangeTitle(event)}
          />
          <button type="button" onClick={() => this.handleAddTodo()}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default AddTodo;
