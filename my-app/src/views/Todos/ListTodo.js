import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", work: "Bán đồ ăn" },
      { id: "todo2", work: "Làm công ty" },
      { id: "todo3", work: "Bán bất động sản" },
    ],
    editTodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.listTodo;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentTodo,
    });
  };

  handleEditTodo = (todo) => {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].work = editTodo.work;
      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });

      return;
    }
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let todoCopy = { ...this.state.editTodo };
    todoCopy.work = event.target.value;
    this.setState({
      editTodo: todoCopy,
    });
  };
  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p style={{ marginTop: "60px" }}>
          Thêm sửa xóa các chuỗi cùng Reactjs & cuong
        </p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo}></AddTodo>

          <div className="list-todo-content">
            {listTodo &&
              listTodo.length > 0 &&
              listTodo.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.work}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.work}
                              type="text"
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.work}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(ListTodo);
