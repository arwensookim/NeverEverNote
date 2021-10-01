import React from "react";
import NotesForm from "./notes_form";
import NotesIndexItem from "./notes_index_item";

class NotesIndex extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const {notes, deleteNote } = this.props;
        return(
            <div>
                <div className="notes-index-header">
                    <h2>Notes</h2>
                    <div className="notes-count">{this.props.notes.length} notes</div>
                </div>
                <div className="notes-content">
                    <ul>
                        {notes.map( note => (
                            <NotesIndexItem key={note.id} note={note} history={this.props.history} deleteNote={deleteNote} />
                        ))}
                    </ul>
                </div>

            </div>
        )
    }
}

export default NotesIndex;