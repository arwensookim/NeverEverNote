import React from "react";
import NotesItem from "./notes_index_item";
import Notes from "./notes_index";
import NotesContainer from "./notes_index_container";

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