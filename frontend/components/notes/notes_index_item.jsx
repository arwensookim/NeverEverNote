import React from "react";

class NotesItem extends React.Component{
    render() {
        return(
            <li>
                <div>
                        <h2 className="note-title">{this.props.note.title}</h2>
                        <p className="note-body">{this.props.note.body}</p>
                        
                </div>

            </li>

        )
    }
}

export default NotesItem;