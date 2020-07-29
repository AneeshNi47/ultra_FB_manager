import React, { Component, Fragment } from "react";
import {
  Icon,
  Table,
  Modal,
  Dropdown,
  Divider,
  Image,
  Form,
  Input,
  TextArea,
  Button,
  Accordion
} from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadUserAccounts,
  updateAbout,
  updatePhone,
  updateWebsite
} from "../../actions/pages";

export class Listing extends Component {
  static propTypes = {
    user_accounts: PropTypes.array.isRequired,
    loadUserAccounts: PropTypes.func.isRequired,
    updateAbout: PropTypes.func.isRequired,
    updateWebsite: PropTypes.func.isRequired,
    updatePhone: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.loadUserAccounts();
  }

  state = {
    user_active: false,
    pageId: null,
    updateAccounts: false,
    activeIndex: -1,
    openModal: false,
    activeItemName: "",
    activeItemId: null,
    activeItemEmails: "",
    activeItemCategoryList: "",
    activeItemWebsite: "",
    activeItemPhone: "",
    activeItemSingleLineAddress: ""
  };

  openModalWithItem(account) {
    this.setState({
      openModal: true,
      activeAccountId: account.id,
      activeAccountName: account.name,
      activeAccountAccess: account.access_token,
      activeAccountAbout: account.about,
      activeAccountImage: account.picture.data.url,
      activeAccountEmails: account.emails,
      activeAccountCategoryList: account.category_list,
      activeAccountWebsite: account.website,
      activeAccountPhone: account.phone,
      activeAccountSingleLineAddress: account.single_line_address
    });
  }
  close = () => this.setState({ openModal: false });

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  //function to update Phone, website, about
  updateAbout(activeAccountAccess, value, activeAccountId) {
    this.props.updateAbout(activeAccountAccess, value, activeAccountId);
    this.setState({ updateAccounts: true });
  }
  updatePhone(activeAccountAccess, value, activeAccountId) {
    this.props.updatePhone(activeAccountAccess, value, activeAccountId);
    this.setState({ updateAccounts: true });
  }
  updateWebsite(activeAccountAccess, value, activeAccountId) {
    this.props.updateWebsite(activeAccountAccess, value, activeAccountId);
    this.setState({ updateAccounts: true });
  }

  componentDidUpdate() {
    if (this.state.updateAccounts) {
      this.close;
      setTimeout(
        function() {
          //Start the timer
          this.props.loadUserAccounts();
          console.log("action"); //After 1 second, set render to true
        }.bind(this),
        1000
      );
      this.setState(prevState => ({
        updateAccounts: !prevState.updateAccounts
      }));
    }
  }
  render() {
    const user_listing = (
      <Dropdown text="Update" color="teal">
        <Dropdown.Menu>
          {this.props.user_accounts.map(account => (
            <Dropdown.Item
              key={account.id}
              text={account.name}
              image={account.picture.data.url}
              onClick={() => this.openModalWithItem(account)}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
    const no_listing = (
      <Dropdown text="Update" color="teal">
        <Dropdown.Menu>
          <Dropdown.Item text="No pages" />
        </Dropdown.Menu>
      </Dropdown>
    );
    if (this.props.user_accounts) {
      this.setState({
        user_active: true
      });
    }
    const { activeIndex } = this.state;
    return (
      <Fragment>
        <Modal size="small" open={this.state.openModal} onClose={this.close}>
          <Modal.Header>{this.state.activeItemName}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={this.state.activeAccountImage} />
            <Modal.Description>
              <Form>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      data-toggle="tooltip"
                      title="Click Here to edit"
                      readOnly
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="About"
                      placeholder={this.state.activeAccountAbout}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <br />
                    <input
                      ref={ref => (this.inputAbout = ref)}
                      placeholder="New About "
                    />
                    <Button
                      onClick={() =>
                        this.updateAbout(
                          this.state.activeAccountAccess,
                          this.inputAbout.value,
                          this.state.activeAccountId
                        )
                      }
                    >
                      Submit
                    </Button>
                  </Accordion.Content>

                  <Form.Group widths="equal">
                    <Accordion.Title
                      active={activeIndex === 1}
                      index={1}
                      onClick={this.handleClick}
                    >
                      <Form.Field
                        data-toggle="tooltip"
                        title="Click Here to edit"
                        readOnly
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Website"
                        placeholder={this.state.activeAccountWebsite}
                      />
                    </Accordion.Title>

                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={this.handleClick}
                    >
                      <Form.Field
                        data-toggle="tooltip"
                        title="Click Here to edit"
                        readOnly
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Phone"
                        placeholder={this.state.activeAccountPhone}
                      />
                    </Accordion.Title>
                  </Form.Group>
                  <Accordion.Content active={activeIndex === 2}>
                    <input
                      ref={ref => (this.inputPhone = ref)}
                      placeholder="New Phone "
                    />
                    <Button
                      onClick={() =>
                        this.updatePhone(
                          this.state.activeAccountAccess,
                          this.inputPhone.value,
                          this.state.activeAccountId
                        )
                      }
                    >
                      Submit
                    </Button>
                  </Accordion.Content>
                  <Accordion.Content active={activeIndex === 1}>
                    <input
                      ref={ref => (this.inputWebsite = ref)}
                      placeholder="New Website "
                    />
                    <Button
                      onClick={() =>
                        this.updateWebsite(
                          this.state.activeAccountAccess,
                          this.inputWebsite.value,
                          this.state.activeAccountId
                        )
                      }
                    >
                      Submit
                    </Button>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      data-toggle="tooltip"
                      title="Click Here to edit"
                      readOnly
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Address"
                      placeholder={this.state.activeAccountSingleLineAddress}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 3}>
                    <Form.Field
                      data-toggle="tooltip"
                      control={TextArea}
                      label="Add New Address"
                      placeholder={this.state.activeAccountSingleLineAddress}
                    />
                    <Button>Save</Button>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      data-toggle="tooltip"
                      title="Click Here to edit"
                      readOnly
                      id="form-input-control-error-email"
                      control={Input}
                      label="Email"
                      placeholder={this.state.activeAccountEmails}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 4}>
                    <Form.Field
                      id="form-input-control-error-email"
                      control={Input}
                      label="Add New Email"
                      placeholder={this.state.activeAccountEmails}
                    />
                    <Button>Save</Button>
                  </Accordion.Content>
                </Accordion>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="9">
                Listing
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Source
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Name
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Address
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Phone
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Rating
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Listed
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Status
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Action
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="facebook f" />
              </Table.Cell>
              <Table.Cell>Facebook</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="red" name="close" />
              </Table.Cell>
              <Table.Cell>
                {this.state.user_active ? user_listing : no_listing}
              </Table.Cell>
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user_accounts: state.reducerPages.user_accounts
});
export default connect(
  mapStateToProps,
  { loadUserAccounts, updateAbout, updatePhone, updateWebsite }
)(Listing);
