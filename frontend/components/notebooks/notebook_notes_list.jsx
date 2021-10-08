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

        let notes = this.props.notes.sort()
        const date = notes.map((note, i )=> [note.updated_at, i]);
        date.sort().reverse();
        let sort_notes = [];

        if (date){
            for(let i = 0; i < date.length; i++){
                let temp = date[i][1];
                let temp_note = notes[temp];
                sort_notes.push(temp_note);
            }
        }

        if(sort_notes){
            notes = sort_notes;
        }

        return(
            <ul>
                {notes.map(note => <NotebookNotesItem note={note} key={note.id} currentNotebookId={this.props.currentNotebookId}/>)}
            </ul>
        )
    }
}

export default NotebookNotesList;