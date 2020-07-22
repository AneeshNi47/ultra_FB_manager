import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import Login from "./Users/Login";
import store from "../store";
import Dashboard from "./Dashboard/Dashboard";
import HeaderOwn from "./layout/HeaderOwn";
import { Header, Segment, Sidebar } from "semantic-ui-react";
import { FacebookProvider, Status, LoginButton } from "react-facebook";

class App extends Component {
  handleResponse = data => {
    console.log(data);
  };

  handleError = error => {
    this.setState({ error });
  };

  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <HeaderOwn sidebar={this.handleClick} visible={this.state.visible} />
          <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher dimmed={this.state.visible}>
              <Segment basic>
                <Fragment>
                  <div className="container">
                    <br />
                    <Switch>
                      <Route exact path="/login" component={Login} />
                      <PrivateRoute exact path="/" component={Dashboard} />
                    </Switch>
                  </div>
                </Fragment>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Router>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
