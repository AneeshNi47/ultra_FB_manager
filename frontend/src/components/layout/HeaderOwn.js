import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { Icon, Menu, Sidebar, Image } from "semantic-ui-react";

export class HeaderOwn extends Component {
  static propTypes = {
    logoutUser: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user_details } = this.props;
    console.log(user_details);
    const authLinks = (
      <ul className="navbar-nav ml-auto mt-lg-0">
        <li className="nav-item">
          <span className="navbar-text pt-50">
            <a className="nav-link">
              {user_details ? (
                <Image src={user_details.picture.data.url} avatar />
              ) : (
                <Icon circular name="users" />
              )}
              {user_details ? `Welcome ${user_details.name}` : ""}
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

    const authSidebar = (
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
    );

    const guestSideBar = (
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
          Login
        </Menu.Item>
      </Sidebar>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          {isAuthenticated ? authSidebar : guestSideBar}
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
  user_details: state.reducerAuth.user_details,
  isAuthenticated: state.reducerAuth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(HeaderOwn);
