import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (message !== prevProps.message) {
      if (message.newAccounts) alert.success(message.newAccounts);
      if (message.aboutUpdate) alert.success(message.aboutUpdate);
      if (message.phoneUpdate) alert.success(message.phoneUpdate);
      if (message.websiteUpdate) alert.success(message.websiteUpdate);
    }
    if (error !== prevProps.errors) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.reducerErrors,
  message: state.reducerMessages
});
export default connect(mapStateToProps)(withAlert()(Alerts));
