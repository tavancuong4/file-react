import React from "react";
import "./Event.scss";

class Event extends React.Component {
  handle = () => {
    alert("hello");
  };

  handleTrend = () => {
    document.getElementById("trend").style.display = "block";
    document.getElementById("new").style.display = "none";
    document.getElementById("best_sell").style.display = "none";
  };
  handleNew = () => {
    document.getElementById("trend").style.display = "none";
    document.getElementById("new").style.display = "block";
    document.getElementById("best_sell").style.display = "none";
  };
  handleBest = () => {
    document.getElementById("trend").style.display = "none";
    document.getElementById("new").style.display = "none";
    document.getElementById("best_sell").style.display = "block";
  };
  render() {
    return (
      <div className="tong">
        <h3>Click để xem danh sách mới nhất</h3>
        <div className="container2">
          <ul className="tab">
            <li className="tap_item" id="1" onClick={() => this.handleTrend()}>
              Phổ biến
            </li>
            <li className="tap_item" id="2" onClick={() => this.handleNew()}>
              Mới nhất
            </li>
            <li className="tap_item" id="3" onClick={() => this.handleBest()}>
              Bán chạy
            </li>
          </ul>
          <div id="trend" className="animation">
            <ul className="product_list">
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r_lE0fOR3R4IHXKw-ZgzLKrk7x9AwoadtQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-5vpQbqPO310xJcEMp-d0jZqCLZ8HNvMVQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiwh2UjjSVjcR4LDbTyPk1KuTZ2QUVIRlbQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9H-DydTh6KoFqEppw8-ZrAjJH_66MBqOQg&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlPynxPyd9OWm2qfiMX33UYOYr1-R88BwIA&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpfmLkZgBeQlKYB3vU-I8w9_cf7AohaE4dQ&usqp=CAU"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div id="new" className="animation">
            <ul className="product_list">
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-5vpQbqPO310xJcEMp-d0jZqCLZ8HNvMVQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r_lE0fOR3R4IHXKw-ZgzLKrk7x9AwoadtQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlPynxPyd9OWm2qfiMX33UYOYr1-R88BwIA&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpfmLkZgBeQlKYB3vU-I8w9_cf7AohaE4dQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiwh2UjjSVjcR4LDbTyPk1KuTZ2QUVIRlbQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9H-DydTh6KoFqEppw8-ZrAjJH_66MBqOQg&usqp=CAU"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div id="best_sell" className="animation">
            <ul className="product_list">
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9H-DydTh6KoFqEppw8-ZrAjJH_66MBqOQg&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiwh2UjjSVjcR4LDbTyPk1KuTZ2QUVIRlbQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1r_lE0fOR3R4IHXKw-ZgzLKrk7x9AwoadtQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlPynxPyd9OWm2qfiMX33UYOYr1-R88BwIA&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-5vpQbqPO310xJcEMp-d0jZqCLZ8HNvMVQ&usqp=CAU"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpfmLkZgBeQlKYB3vU-I8w9_cf7AohaE4dQ&usqp=CAU"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Event;
