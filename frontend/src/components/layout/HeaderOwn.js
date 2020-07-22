import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { Icon, Menu, Sidebar, Image } from "semantic-ui-react";

export class HeaderOwn extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user);
    const authLinks = (
      <ul className="navbar-nav ml-auto mt-lg-0">
        <li className="nav-item">
          <span className="navbar-text pt-50">
            <a className="nav-link">
              <strong>{user ? `Welcome ${user.profile.name}` : ""}</strong>
            </a>
          </span>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <button
              onClick={this.props.logoutUser}
              className="nav-link btn btn-sm text-light"
            >
              <i className="fas fa-sign-out-alt fa-lg" />
            </button>
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-lg-0">
        <li className="nav-item">
          <span className="navbar-text pt-50" />
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={this.props.sidebar}
            vertical
            visible={this.props.visible}
            width="thin"
            className="white"
          >
            <Menu.Item as="a">
              <Icon.Group size="massive">
                <Icon name="facebook" />
                <Icon
                  corner="bottom left"
                  size="tiny"
                  color="blue"
                  name="star outline"
                />
              </Icon.Group>
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="user" />
              Profile
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="copy outline" />
              Pages
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="settings" />
              Settings
            </Menu.Item>
          </Sidebar>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              className="navbar-brand"
              onClick={this.props.sidebar}
              style={{ color: "white" }}
            >
              <i className="fas fa-align-left" />
              Ultra Page Manager
            </a>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.reducerAuth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(HeaderOwn);
