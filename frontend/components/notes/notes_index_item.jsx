import React from "react";
import { Link } from "react-router-dom";

import { formatDateTime } from "../../util/date_util";

const NotesIndexItem = props => {

    let date = props.note.updated_at;

    const currentDate = new Date();
    const updatedDate = new Date(date);
    let showDate;
    if((currentDate.getDate() === updatedDate.getDate()) && (currentDate.getMonth() === updatedDate.getMonth())) {
        if(currentDate.getMinutes() === updatedDate.getMinutes()) {
            showDate = "a few seconds ago";
        } else if (currentDate.getMinutes() - updatedDate.getMinutes() < 10) {
            showDate = "a few minutes ago";
        } else if (currentDate.getHours() === updatedDate.getHours()) {
            let time = currentDate.getMinutes() - updatedDate.getMinutes();
            showDate = `${time} minutes ago`;
        } else {
            showDate = formatDateTime(date);
        }
    } else {
        showDate = formatDateTime(date);
    }

    const body = props.note.body.slice(0,150).replace(/<[^>]*>?/gm, '');
    return(
     
            <Link className="note-item" to={`${props.url}${props.note.id}`} >
                <li className="notes-lists">
                    <div className="note-title">{props.note.title}</div>
                    <div className="note-body">{body}</div>
                    <div className="note-datetime">{showDate}</div>
                </li>
            </Link>
     




    )
    
}

export default NotesIndexItem;