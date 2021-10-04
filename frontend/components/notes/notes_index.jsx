import React from "react";

import NotesIndexList from "./notes_index_lists";

class NotesIndex extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const {notes, history, currentUser, createNote, fetchNotes, url } = this.props;
        return(
            <div className="notes-index">
                <div className="notes-index-header">
                    <h2>Notes</h2>
                    <div className="notes-count">{this.props.notes.length} notes</div>
                </div>
                <div className="notes-content">
                    <ul>
                        <NotesIndexList url={url}  notes={notes} history={history} currentUser={currentUser} createNote={createNote} fetchNotes={fetchNotes}/>
                    </ul>
                </div>

            </div>
        )
    }
}

export default NotesIndex;