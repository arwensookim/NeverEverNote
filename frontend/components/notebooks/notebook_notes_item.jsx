import React from "react";
import { Link } from "react-router-dom";

const NotebookNotesItem = props => {
    let url = `/notebooks/${props.currentNotebookId}/notes/${props.note.id}`
    const body = props.note.body.slice(0,150).replace(/<[^>]*>?/gm, '');

    return (
        <Link to={url}>
            <li className="notes-lists">
                <div className="note-title">{props.note.title}</div>
                <div className="note-body">{body}</div>
            </li>
        </Link>   
    )
}

export default NotebookNotesItem;