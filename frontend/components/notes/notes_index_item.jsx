import React from "react";

class NotesItem extends React.Component{
    render() {
        return(
            <li>
                <div>
                    <p className="note-title">{this.props.note.title}</p>  
                </div>
                <div>
                    <p className="note-body">{this.props.note.body}</p>
                </div>

            </li>

        )
    }
}

export default NotesItem;