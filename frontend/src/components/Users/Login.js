import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginSuccess } from "../../actions/auth";
import { FacebookProvider, LoginButton } from "react-facebook";
import { Icon, Card, Button } from "semantic-ui-react";

export class Login extends Component {
  static propTypes = {
    loginSuccess: PropTypes.func.isRequired
  };

  handleResponse = data => {
    this.props.loginSuccess(data);
  };

  render() {
    let fbContent;
    if (!this.props.isAuthenticated) {
      fbContent = (
        <FacebookProvider appId="226965631684229">
          <LoginButton
            className="ui icon button"
            scope="email"
            onCompleted={this.handleResponse}
            onError={this.handleResponse}
          >
            <Icon name="facebook square" color="blue" size="huge" />
          </LoginButton>
        </FacebookProvider>
      );
    }
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return <div>{fbContent}</div>;
    }
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.reducerAuth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { loginSuccess }
)(Login);
