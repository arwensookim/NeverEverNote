import React from "react";

class Notes extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {
        const {notes, fetchNote} = this.props;
        return(
            <div>
                <ul>
                    {notes.map( note => (
                        <NotesItem key={note.id} note={note} fetchNote={fetchNote} />
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Notes;