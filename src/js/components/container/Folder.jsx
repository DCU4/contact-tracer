import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Nav from "../presentational/Nav.jsx";
// import Form from "../presentational/Form.jsx";
import Notes from "../presentational/Notes.jsx";
import NewNote from "../presentational/NewNote.jsx";
import SingleNote from "../presentational/SingleNote.jsx";
import Header from "../presentational/Header.jsx";

class Folder extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      note: "",
      apiResponse: "",
      singleNote: false,
      id: "",
      addNote: false
    };
    this.addClasses = this.addClasses.bind(this);
  }

  saveNote() {
    let url = 'https://localhost:3000/note';
    // let url = "https://dc-notes.herokuapp.com/note";
    let data = "note=" + this.state.note;

    fetch(url, {
      method: "POST",
      body: data,
      mode: "no-cors", // no-cors, cors, *same-origin
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(res => res.json())
      .catch(function(error) {
        console.error("Error:", error);
      });
    // console.log(this.state.apiResponse);
  }

  writeNote = e => {
    e.preventDefault();
    this.setState({
      note: "",
      addNote: false,
      singleNote:false
    });
    this.saveNote();
    this.getNotes();
  };


  onChange = event => {
    this.setState({ note: event.target.value });
  };

  getNotes() {
    let url = 'http://localhost:3000';
    // let url = "https://dc-notes.herokuapp.com/";
    fetch(url)
    // .then(res=>console.lot())
    .then(res => res.json())
    .then(res => {
      if (this._isMounted) {
      this.setState({ apiResponse: res });
    }}
  )};

  addNote = n => {
    let singleNote = this.state.singleNote;
    let addNote = this.state.addNote;
    let singleNoteState = singleNote ? false : true;
    let addNoteState = addNote ? false : true;

    this.setState({
      singleNote: singleNoteState,
      addNote: addNoteState
    });
  }



  onClick = open => {
    let singleNote = this.state.singleNote;
    let state = singleNote ? false : true;
    this.setState({
      singleNote: state,
      addNote: false,
      id: open.currentTarget.id
    });
  };

  addClasses (){
    console.log('functuinal called')
    this.setState({ class: "all-notes-reveal" })
  }

  componentWillMount() {
    this.getNotes();
    this.addClasses();
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let api = this.state.apiResponse;
    let singleNote = this.state.singleNote;
    let addNote = this.state.addNote;
    if (!this.props || api.notes == undefined) {
      return null; //You can change here to put a customized loading spinner
    }

    return (
      <main>
        <header>

          <Header
            singleNote={singleNote}
            onClick={this.onClick}
            addNote={this.addNote}
            addNoteState={addNote}
          />
        </header>


        {!singleNote ? (
          <ul className={"all-notes "+this.state.class}>
            {api.notes.map((n, i) => {
              return (
                <Notes
                  note={n.note}
                  date={n.created}
                  key={i}
                  id={n._id}
                  onClick={this.onClick}
                  class={this.state.class}
                  deleteNote={this.deleteNote}
                  getNotes={this.getNotes}
                />

              );
            }).reverse()}
          </ul>
        ) : (
          !addNote ? (
          <SingleNote
            id={this.state.id}
            note={this.state.note}
            onChange={this.onChange}
          />
          ) : (
          <NewNote
            writeNote={this.writeNote}
            saveNote={this.saveNote}
            note={this.state.note}
            addNote={addNote}
            onChange={this.onChange}
          />
          )
        )}
      </main>
    );
  }
}
export default Folder;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Folder />, wrapper) : false;
