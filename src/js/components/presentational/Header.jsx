import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let singleNote = this.props.singleNote;
    let addNoteState = this.props.addNoteState;

    return (
      <nav>

          {singleNote ? (
            <ul>
              {!addNoteState ? (
                <form >
                  <button form="editNote">All Notes</button>
                </form>
              ) : (
                <form>
                  <button form="addNote">All Notes</button>
                </form>
              )}

            </ul>
          ) : (
            <ul>
              <li>Folders</li>
              <li onClick={this.props.addNote}>Add</li>
            </ul>

          )}


      </nav>
    );
  }
}
