import React from "react";
import { Route, Switch, Link } from "react-router-dom";


import NotesIndexContainer from "../notes/notes_index_container";
import NoteShowContainer from "../notes/note_show_container";
import mainNavContainer from "./main_nav/main_nav_container";


const Main = () => {
    return (
        <div className="main-page">
            <Route path="/notes" component={mainNavContainer}/>
            <Route path="/notes" component={NotesIndexContainer}/>

        </div>
    )
}

export default Main;