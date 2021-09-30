import React from "react";

class NotesItem extends React.Component{
    render() {
        return(
            <li>
                <div>
                        {this.props.note.title}
                </div>

            </li>

        )
    }
}

export default NotesItem;