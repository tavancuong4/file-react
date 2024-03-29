import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.log("check res:", res);
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetail = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title" style={{ marginTop: "50px" }}>
          List người dùng lấy bằng api
        </div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  style={{ padding: "10px" }}
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetail(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
