import React from "react";
import { Route, Switch, Link } from "react-router-dom";


// import NotesForm from "../notes/notes_form";
import NotesIndexContainer from "../notes/notes_index_container";
// import NoteShowContainer from "../notes/note_show_container";
// import NotebooksContainer from "../notebooks/notebooks_index_container"

const Main = () => {
    return (
        <div>
            {/* <NotesIndexContainer /> */}
            <Route path="/notes" component={NotesIndexContainer}/>

        </div>
    )
}

export default Main;