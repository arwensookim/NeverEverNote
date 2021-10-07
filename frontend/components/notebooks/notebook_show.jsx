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

    // componentDidUpdate(pvsProps) {
    //     if (this.props.notebookId !== pvsProps.match.params.notebookId) {
    //         this.props.fetchNotebook(this.props.match.params.notebookId)
    //     }
    // }

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
        
        const { notes, history, currentNotebookId, currentUser, createNote, fetchNotes, notebook} = this.props;

        return(
            <div className="notes-index">
                <div className="notes-index-header">
                    <h2>{notebook.title}</h2>
                    <div className="notes-count">{notebookNotes.length} notes</div>
                </div>
                <div className="notes-content">
                    <NotebookNotesList notes={notebookNotes} history={history} currentNotebookId={currentNotebookId} currentNotebook={notebook} currentUser={currentUser} createNote={createNote} fetchNotes={fetchNotes} />
                </div>
            </div>
        )
    }
}

export default NotebookShow;
