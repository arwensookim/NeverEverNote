import React from "react";
import NotesItem from "./notes_item";
import Notes from "./notes";

class NotesForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>Here is your NOTES!!</h2>
                <NotesItem />
            </div>
        )
    }
}

export default NotesForm;