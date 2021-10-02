import React from "react";
import { Link } from "react-router-dom";

class NotesItem extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        let url = `/notes/${this.props.note.id}`
        let title;

        if (this.props.note.title === "") {
            title = "Untitled";
        } else {
            title = this.props.note.title;
        }

        if (!this.props.note) return null;

        return(
            <Link to={url}>
                <li className="notes-lists">
                    <div className="note-title">{this.props.note.title}</div>
                    <div className="note-body">{this.props.note.body}</div>
                </li>
            </Link>


        )
    }
}

export default NotesItem;