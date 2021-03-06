import React from "react";

import TagNotesItem from "./tag_notes_item";

class TagNotesList extends React.Component{
    constructor(props) {
        super(props)

        this.handleNewNote = this.handleNewNote.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    handleNewNote() {
        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: this.props.notebooks[0].id
        }

        this.props.createNote(newNote)
            .then( res => this.props.history.push(`/notes/${res.note.id}`))
    }

    render() {
        let notes = this.props.notes.sort()
        const date = notes.map( ( note, i ) => [note.updateed_at, i]);
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
                {notes.map(note => <TagNotesItem notebooks={this.props.notebooks} note={note} key={note.id} tagId={this.props.tagId} />)}
            </ul>
        )
    }
}

export default TagNotesList;