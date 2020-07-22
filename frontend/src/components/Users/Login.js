import React, { Component } from "react";
import store from "../../store";
import { loginSuccess } from "../../actions/auth";
import { FacebookProvider, LoginButton } from "react-facebook";

export class Login extends Component {
  state = {
    isLoggedIn: false,
    user_id: "",
    name: "",
    email: "",
    picture: ""
  };
  handleResponse = data => {
    console.log(data);
    store.dispatch(loginSuccess(data));
    this.setState({
      isLoggedIn: true,
      user_id: data.profile.id,
      name: data.profile.name,
      picture: data.profile.picture.data.url
    });
  };

  handleError = error => {
    console.log("Error");
    this.setState({ error });
  };
  componentClicked = () => {
    console.log("clicked");
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>{this.state.name}</h2>
          <h3>{this.state.user_id}</h3>
        </div>
      );
    } else {
      fbContent = (
        <FacebookProvider appId="226965631684229">
          <LoginButton
            scope="email"
            onClick={this.componentClicked}
            onCompleted={this.handleResponse}
            onError={this.handleError}
          >
            <span>Login via Facebook</span>
          </LoginButton>
        </FacebookProvider>
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Login;
