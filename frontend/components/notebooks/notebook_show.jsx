import React from "react";
import { Link } from "react-router-dom";
import NotebookNotesList from "./notebook_notes_list";

class NotebookShow extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId)
        this.props.fetchNotes();
    }

    

    render() {
        let notebookNotes = [];
        this.props.notes.forEach( note => {
            if (note.notebook_id == this.props.currentNotebookId) {
                notebookNotes.push(note) 
            }
        })

        // let notebook;
        // if (!this.props.notebooks) {
        //     notebook = "Default";
        // } else {
        //     notebook = this.props.notebook.title
        // }
        
        const { notes, history, currentNotebookId, currentUser, createNote, fetchNotes} = this.props;

        return(
            <div className="notes-index">
                <div className="notes-index-header">
                    <h2>Notes</h2>
                    <div className="notes-count">{notes.length} notes</div>
                </div>
                <div className="notes-content">
                    <NotebookNotesList notes={notes} history={history} currentNotebookId={currentNotebookId} currentUser={currentUser} createNote={createNote} fetchNotes={fetchNotes} />
                </div>
            </div>
        )
    }
}

export default NotebookShow;
