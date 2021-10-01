import React from "react";

class NotesItem extends React.Component{
    render() {
        return(
            <li>
                <div className="note-title">{this.props.note.title}</div>
                <div className="note-body">{this.props.note.body}</div>
            </li>

        )
    }
}

export default NotesItem;