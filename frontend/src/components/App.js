import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard/Dashboard";
import HeaderOwn from "./layout/HeaderOwn";
import { Header, Segment, Sidebar } from "semantic-ui-react";

class App extends Component {
  state = { visible: false };
  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <div>
        <HeaderOwn sidebar={this.handleClick} visible={this.state.visible} />
        <Sidebar.Pushable as={Segment}>
          <Sidebar.Pusher dimmed={this.state.visible}>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Dashboard />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
