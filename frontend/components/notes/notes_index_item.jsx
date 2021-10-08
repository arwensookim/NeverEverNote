import React from "react";
import { Link } from "react-router-dom";
import NoteShow from "./note_show";
import note_show_container from "./note_show_container";


const NotesIndexItem = props => {


    // let title;

    // if (props.note.title === "") {
    //     title = "Untitled";
    // } else {
    //     title = props.note.title;
    // }

    // if (!props.note) return null;
    const body = props.note.body.slice(0,150).replace(/<[^>]*>?/gm, '');
    return(
        // <div className="note-item">
            <Link className="note-item" to={`${props.url}${props.note.id}`} >
                <li className="notes-lists">
                    <div className="note-title">{props.note.title}</div>
                    <div className="note-body">{body}</div>
                </li>
            </Link>
        // {/* </div> */}




    )
    
}

export default NotesIndexItem;