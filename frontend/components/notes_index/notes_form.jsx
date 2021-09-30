import React from "react";
import NotesItem from "./notes_item";
import Notes from "./notes";
import NotesContainer from "../notes_index/notes_container";

class NotesForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div>
                
                </div>
                <div>
                    <NotesContainer />
                </div>
            </div>
        )
    }
}

export default NotesForm;