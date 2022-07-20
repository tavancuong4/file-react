import React from "react";
import "./Form.scss";

class Form extends React.Component {
  // handleClick = () => {
  //   document.querySelector(".pass").style.type = "text";
  //   alert("click");
  // };
  state = {
    show: false,
  };
  render() {
    // console.log(this.state.show);
    return (
      <div className="login">
        <div className="container">
          <div className="content">
            <form action="">
              <div className="title">Login</div>
              <div className="username">
                <label htmlFor="">Username: </label>
                <input type="text" />
              </div>
              <div className="email">
                <label htmlFor="">Email: </label>
                <input type="email" />
              </div>
              <div className="password">
                <label htmlFor="">Password: </label>
                <input
                  type={this.state.show ? "text" : "password"}
                  className="pass"
                />
                <span onClick={() => this.setState({ show: !this.state.show })}>
                  <i class="fa fa-eye"></i>
                </span>
              </div>
              <button>Đăng nhập</button>
              <div className="bottom">
                not a member? <a href="https://shopeefood.vn/">Link Liên kết</a>
              </div>
              <div className="link">
                <a href="https://www.google.com.vn/?hl=vi">
                  <i class="fab fa-google-plus-g google"></i>
                </a>
                <a href="https://twitter.com/?lang=vi">
                  <i class="fab fa-twitter  twitter"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  //   state = {
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirm_password: "",
  //   };

  //   showError = () => {
  //     alert("vui lòng nhập ký tự vòa ô trống");
  //   };
  //   handleUser = (e) => {
  //     this.setState({
  //       username: e.target.value,
  //     });
  //     if (this.setState == "") {
  //       alert("vui long nhập");
  //     }
  //   };
  //   handleEmail = (e) => {
  //     this.setState({
  //       email: e.target.value,
  //     });
  //   };
  //   handlePass = (e) => {
  //     this.setState({
  //       password: e.target.value,
  //     });
  //   };
  //   handleConfirm = (e) => {
  //     this.setState({
  //       confirm_password: e.target.value,
  //     });
  //   };
  //   render() {
  //     return (
  //       <div className="container">
  //         <form action="" onClick={() => this.handleClick()}>
  //           <h1>Cuong login</h1>
  //           <div className="form">
  //             <input
  //               id="username"
  //               type="Username"
  //               placeholder="Username"
  //               value={this.state.username}
  //               onChange={(e) => this.handleUser(e)}
  //             />
  //             <span></span>
  //           </div>
  //           <div className="form">
  //             <input
  //               id="email"
  //               type="Email"
  //               placeholder="Email"
  //               value={this.state.email}
  //               onChange={(e) => this.handleEmail(e)}
  //             />
  //             <span></span>
  //           </div>
  //           <div className="form">
  //             <input
  //               id="password"
  //               type="password"
  //               placeholder="Password"
  //               value={this.state.password}
  //               onChange={(e) => this.handlePass(e)}
  //             />
  //             <span></span>
  //           </div>
  //           <div className="form">
  //             <input
  //               id="confirm-password"
  //               type="password"
  //               placeholder="Confirm Password"
  //               value={this.state.confirm_password}
  //               onChange={(e) => this.handleConfirm(e)}
  //             />
  //             <span></span>
  //           </div>
  //           <button type="submit" className="btn-submit">
  //             Login
  //           </button>
  //           <div className="singup">
  //             not a member? <a href="https://shopeefood.vn/">Link hot</a>
  //           </div>
  //         </form>
  //       </div>
  //     );
  //   }
}
export default Form;
