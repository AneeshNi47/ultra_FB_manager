import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUserImage } from "../../actions/auth";
import { Icon, Card, Button } from "semantic-ui-react";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.loadUserImage();
  }
  render() {
    const { user_details, user_image, user_imageUrl } = this.props;
    const extra = (
      <a>
        <Icon name="mail" />
        {user_details.email}
      </a>
    );
    return (
      <div>
        <Card
          image={user_imageUrl}
          header={user_details.name}
          meta="Friend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, enim sed semper accumsan, ipsum elit rutrum augue, eleifend maximus dolor odio sit amet lectus. Etiam vitae felis a dolor blandit faucibus scelerisque tincidunt ligula. "
          extra={extra}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_details: state.reducerAuth.user_details,
  user_image: state.reducerAuth.user_image,
  user_imageUrl: state.reducerAuth.user_imageUrl
});
export default connect(
  mapStateToProps,
  { loadUserImage }
)(Dashboard);
