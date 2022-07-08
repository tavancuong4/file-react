import React from "react";

class List extends React.Component {
  state = {
    showJobs: true,
  };

  handleShow = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleDelete = (job) => {
    this.props.deleteAJob(job);
  };
  render() {
    let { array } = this.props;
    let { showJobs } = this.state;
    return (
      <div>
        {showJobs === false ? (
          <div>
            <button
              onClick={() => this.handleShow()}
              style={{ padding: "5px", marginTop: "10px" }}
            >
              Show
            </button>
          </div>
        ) : (
          <div>
            <div>
              {array.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.name} - {item.age} <></> <></>{" "}
                    <span onClick={() => this.handleDelete(item)}>X</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                onClick={() => this.handleShow()}
                style={{ padding: "5px", marginTop: "10px" }}
              >
                Hide
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default List;
