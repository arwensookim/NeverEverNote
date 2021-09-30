import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import NotesContainer from "../notes/notes_container";


const Main = () => {
    return (

        <div>
            <NotesContainer />
        </div>
    )
}

export default Main;