import React, { Component } from 'react';


export default class Form extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let note = this.props.note

    return (
      <form id="addNote" className={this.props.class} onSubmit={note!=="" ? this.props.writeNote : null}>
        <textarea value={note} onChange={this.props.onChange}></textarea>
      </form>
    );
  }
}