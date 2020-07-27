import React, { Component, Fragment } from "react";
import { Image, Modal, Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUserAccounts } from "../../actions/pages";

export class Pages extends Component {
  static propTypes = {
    user_accounts: PropTypes.array.isRequired,
    loadUserAccounts: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.loadUserAccounts();
  }
  state = {
    activeIndex: 0,
    pageId: null,
    openModal: false,
    activeItemName: "",
    activeItemId: null,
    activeItemEmails: "",
    activeItemCategoryList: "",
    activeItemWebsite: "",
    activeItemPhone: "",
    activeItemSingleLineAddress: ""
  };

  openModalWithItem(item) {
    this.setState({
      openModal: true,
      activeItemId: item.id,
      activeItemName: item.name,
      activeItemAbout: item.about,
      activeItemImage: item.picture.data.url,
      activeItemEmails: item.emails,
      activeItemCategoryList: item.category_list,
      activeItemWebsite: item.website,
      activeItemPhone: item.phone,
      activeItemSingleLineAddress: item.single_line_address
    });
  }
  close = () => this.setState({ openModal: false });
  render() {
    return (
      <Fragment>
        <Modal open={this.state.openModal} onClose={this.close}>
          <Modal.Header>{this.state.activeItemName}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={this.state.activeItemImage} />
            <Modal.Description>
              Phone
              <Input disabled placeholder={this.state.activeItemPhone} />
              Website
              <Input disabled placeholder={this.state.activeItemWebsite} />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
        {this.props.user_accounts.map(account => (
          <Image.Group size="small" key={account.id}>
            <Image
              src={account.picture.data.url}
              index={account.id}
              onClick={() => this.openModalWithItem(account)}
            />
          </Image.Group>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user_accounts: state.reducerPages.user_accounts
});
export default connect(
  mapStateToProps,
  { loadUserAccounts }
)(Pages);
