import React from "react";
import { Link } from "react-router-dom";

class mainNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    handleCreateNote() {
        const notebookId = null;

        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: notebookId
        };

        this.props.createNote(newNote).then( res => this.props.history.push(`/notes/${res.note.id}`))
    }

    render() {
        if (!this.props.currentUser) return null;
        return(
            <div className="main-nav">
                <div className="greeting">
                    <p>Welcome, {this.props.currentUser.username}</p>
                </div>

                <div className="add-note">
                    <i className="fas fa-plus">
                        <button className="create-note" onClick={this.handleCreateNote}>
                         Create Note
                        </button>
                    </i>

                </div>
                <div className="links">
                    <Link to='/notes'> <i className="fas fa-sticky-note fa-fw"></i> Notes</Link>
                </div>


                <div className="main-logout">
                    <Link to="/" onClick={this.props.logout}>Log Out</Link>
                </div>
            </div>
        )

    }
}

export default mainNav;