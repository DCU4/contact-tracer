import React, { Component } from "react";
import Form from "../presentational/Form.jsx";

export default class NewNote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      class: "",
      apiResponse: "",
      addNote: this.props.addNote
    };
  }

  render() {
    return (
      <ul className="single-note">
          <Form
            writeNote={this.props.writeNote}
            saveNote={this.props.saveNote}
            note={this.props.note}
            class={this.state.class}
            onChange={this.props.onChange}
          />
      </ul>
    );
  }
}
