import React from "react";
import { Route, Switch } from "react-router-dom";


import NotesIndexContainer from "../notes/notes_index_container";
import NoteShowContainer from "../notes/note_show_container";
import mainNavContainer from "./main_nav/main_nav_container";
import NotebookIndexContainer from "../notebooks/notebooks_index_container";


const Main = () => {
    return (
        <div className="main-page">
            <Switch>
                <Route path="/notebooks/:notebookId" component={mainNavContainer}/>
                <Route path="/notebooks" component={mainNavContainer}/>
                <Route path="/notes" component={mainNavContainer}/>
            </Switch>
            {/* <Route path="/notes" component={mainNavContainer}/> */}
            <Route exact path="/notebooks" component={NotebookIndexContainer} />
            <Route path="/notes" component={NotesIndexContainer}/>
            <Route path="/notes/:noteId" component={NoteShowContainer} />
            <Route path="/notebooks/:notebookId/notes/:noteId" component={NoteShowContainer}/>
        </div>
    )
}

export default Main;