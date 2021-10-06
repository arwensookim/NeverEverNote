import React from "react";
// import { Link } from "react-router-dom";
import NoteIndexItem from "./notes_index_item"

class NotesIndexList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this)
    }

    componentDidMount(){
        this.props.fetchNotes();
    }

    handleNewNote() {
        let notebookId = 1;

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
        // let notes = this.props.notes.sort()
        // const date = notes.map((note, idx )=> [note.updated_at, idx]);
        // date.sort().reverse();
        // let sort_notes = [];

        // if (date){
        //     for(let i = 0; i < date.length; i++){
        //         let temp = date[i][1];
        //         let temp_note = notes[temp];
        //         sort_notes.push(temp_note);
        //     }
        // }

        // if(sort_notes){
        //     notes = sort_notes;
        // }

        // if (this.props.notes.length === 0){
        //     return (
        //         <ul>
        //             <div className="notes-list-firstnote">
        //             Create your first note
        //             </div>
        //             <div className="notes-list-clickme">
        //             Click the 
        //             <button onClick={this.handleNewNote} className="notes-list-newnote">+ New Note</button> button <br></br>
        //             <div className="notes-list-clickme-second">in the sidebar to get started.</div>
        //             </div>
        //         </ul>
        //     )
        // }
        console.log(this.props.notes)
        return(

            <ul>
                
                {this.props.notes.map((note) => <NoteIndexItem note={note} key={note.id} url={this.props.url} />)}
            </ul>
        )
    }
}

export default NotesIndexList;