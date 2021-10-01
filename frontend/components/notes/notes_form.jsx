import React from "react";

import NotesIndexItem from "./notes_index_item";

class NotesForm extends React.Component{
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchNotes();
    }

    handleCreateNote() {
        let notebookId = null;

        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: notebookId
        }

        this.props.createNote(newNote)
        .then((res) => this.props.history.push(`/notes/${res.note.id}`))

    }
    
    render() {
        return(
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default NotesForm;