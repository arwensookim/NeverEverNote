import React from "react";
import NotesItem from "./notes_index_item";

class Notes extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        const {notes} = this.props;
        return(
            <div>
                <ul>
                    {notes.map( note => (
                        <NotesItem key={note.id} note={note} />
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Notes;