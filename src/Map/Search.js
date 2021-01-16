import React, { Component } from "react";
import { Form, Button, Select, Input } from "semantic-ui-react";

import { findParcels } from "../actions";

const options = [
  { key: "parcels", text: "Parcel Size", value: "parcels" },
  { key: "coverage", text: "Site Cover %", value: "coverage" }
];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.inputtext = null;
  }

  search = () => {
    this.props.dispatch(findParcels(this.inputtext.value));
  };

  render() {
    return (
      <Form>
        <Form.Field required>
          <Form.Input type="text" placeholder="Enter value..." action>
            <input ref={input => (this.inputtext = input)} />
            <Select compact options={options} defaultValue="parcels" />
            <Button type="submit" onClick={this.search}>
              Search
            </Button>
          </Form.Input>
        </Form.Field>
      </Form>
    );
  }
}
