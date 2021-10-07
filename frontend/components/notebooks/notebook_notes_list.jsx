import React from "react";

import NotebookNotesItem from "./notebook_notes_item";

class NotebookNotesList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    handleNewNote() {
        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: this.props.currentNotebookId
        }

        this.props.createNote(newNote)
            .then( res => this.props.history.push(`/notebooks/${this.props.currentNotebookId}/notes/${res.note.id}`))
    }
    render() {
        return(
            <ul>
                {this.props.notes.map(note => <NotebookNotesItem note={note} key={note.id} currentNotebookId={this.props.currentNotebookId}/>)}
            </ul>
        )
    }
}

export default NotebookNotesList;