import React from "react";
// import { Route, Switch, Link } from "react-router-dom";

// import NotesContainer from "../notes/notes_index_container";
import NotesForm from "../notes/notes_form";
// import NotebooksContainer from "../notebooks/notebooks_index_container"

const Main = () => {
    return (
        // <Route path="/notes" component={NotesForm}/>
        <div>
            {/* <NotebooksContainer /> */}
            <NotesForm />
        </div>
    )
}

export default Main;