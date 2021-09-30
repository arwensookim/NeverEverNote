import React from "react";
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
                <ul>
                    {notes.map( note => (
                        <NotesIndexItem key={note.id} note={note} deleteNote={deleteNote} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default NotesIndex;