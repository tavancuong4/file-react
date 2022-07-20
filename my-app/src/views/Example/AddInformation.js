import React from "react";

class AddInformation extends React.Component {
  state = {
    name: "",
    age: "",
  };
  handleTitle = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSalary = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    console.log("check data: ", this.state);
    if (!this.state.name || !this.state.age) {
      alert("vui long nhap gia tri ");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      name: this.state.name,
      age: this.state.age,
    });
    this.setState({
      name: "",
      age: "",
    });
  };
  render() {
    return (
      <div>
        <form style={{ marginTop: "80px" }}>
          <label htmlFor="fname">Name :</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleTitle(event)}
            style={{ width: "300px", padding: "5px", fontSize: "17px" }}
          />
          <br />
          <label htmlFor="lname">Age :</label>
          <br />
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleSalary(event)}
            style={{ width: "300px", padding: "5px", fontSize: "17px" }}
          />
          <br />
          <br />
          <input
            style={{ padding: "5px" }}
            type="submit"
            value="submit"
            onClick={(event) => this.handleClick(event)}
          />
        </form>
      </div>
    );
  }
}
export default AddInformation;
