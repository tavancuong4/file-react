import React from "react";
import AddInformation from "./AddInformation";
import List from "./List";

class MyInformation extends React.Component {
  state = {
    array: [
      { id: "1", name: "Hung", age: "25" },
      { id: "2", name: "Cong", age: "21" },
      { id: "3", name: "Song", age: "43" },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      array: [...this.state.array, job],
    });
  };
  deleteAJob = (job) => {
    let arrJob = this.state.array;
    arrJob = arrJob.filter((item) => item.id !== job.id);
    this.setState({
      array: arrJob,
    });
  };
  render() {
    return (
      <div>
        <AddInformation addNewJob={this.addNewJob}></AddInformation>

        <List array={this.state.array} deleteAJob={this.deleteAJob}></List>
      </div>
    );
  }
}

export default MyInformation;
