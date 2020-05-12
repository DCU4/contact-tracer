import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Folder from "../container/Folder.jsx;"
import Header from "../presentational/Header.jsx";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render() {

    return (
      <main>
        <header>
        <Header
            // singleNote={singleNote}
            // onClick={this.onClick}
            // addNote={this.addNote}
            // addNoteState={addNote}
          />
        </header>
        {/* <Folder /> */}
      </main>
      );
  }
}
export default Container;

// const wrapper = document.getElementById("app");
// wrapper ? ReactDOM.render(<Container />, wrapper) : false;