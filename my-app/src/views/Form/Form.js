import React from "react";
import "./Form.scss";

class Form extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  showError = () => {
    alert("vui lòng nhập ký tự vòa ô trống");
  };
  handleUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleConfirm = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form action="" onClick={() => this.handleClick()}>
          <h1>Cuong login</h1>
          <div className="form">
            <input
              id="username"
              type="Username"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.handleUser(e)}
            />
            <span></span>
          </div>
          <div className="form">
            <input
              id="email"
              type="Email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.handleEmail(e)}
            />
            <span></span>
          </div>
          <div className="form">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.handlePass(e)}
            />
            <span></span>
          </div>
          <div className="form">
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
              value={this.state.confirm_password}
              onChange={(e) => this.handleConfirm(e)}
            />
            <span></span>
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
          <div className="singup">
            not a member? <a href="https://shopeefood.vn/">Link hot</a>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;
