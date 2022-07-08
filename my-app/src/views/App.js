import logo from "./logo.svg";
import "./App.scss";
import "./App.scss";
import MyInformation from "./Example/MyInformation";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import Form from "./Form/Form";
import Event from "./event/Event";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/Todo">
              <ListTodo></ListTodo>
            </Route>
            <Route path="/about">
              <MyInformation></MyInformation>
            </Route>
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
            <Route path="/form">
              <Form></Form>
            </Route>
            <Route path="/event">
              <Event></Event>
            </Route>
          </Switch>
          {/* <p>Hello word with cuong chi co</p> */}

          {/* <MyComponent></MyComponent> */}
          {/* <ListTodo></ListTodo> */}
          {/* <Home></Home> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
