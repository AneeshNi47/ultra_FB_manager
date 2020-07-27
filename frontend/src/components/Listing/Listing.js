import React, { Component } from "react";
import { Icon, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Listing extends Component {
  render() {
    return (
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
              <Link to="/pages">
                <Button primary>Update</Button>
              </Link>
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
    );
  }
}
export default Listing;
