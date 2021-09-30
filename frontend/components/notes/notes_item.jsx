import React from "react";

class NotesItem extends React.Component{
    render() {
        return(
            <li>
                {this.props.note.title}
            </li>
        )
    }
}

export default NotesItem;