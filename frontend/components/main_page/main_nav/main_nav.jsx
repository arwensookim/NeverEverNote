import React from "react";
import { Link } from "react-router-dom";

class mainNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    handleCreateNote() {
        let notebookId;

        if(this.props.match.params.notebookId) {
            notebookId = this.props.match.params.notebookId;
        } else {
            notebookId = null;
        }

        let newNote = {
            title: "",
            body: "",
            user_id: this.props.currentUser.id,
            notebook_id: notebookId
        };

        this.props.createNote(newNote)
            .then( res => {
                if (this.props.match.params.notebookId) {
                    this.props.history.push(`/notebooks/${this.props.match.params.notebookId}/notes/${res.note.id}`);
                } else {
                    this.props.history.push(`/notes/${res.note.id}`);
                }
            })
    }

    render() {
        const {currentUser} = this.props;
        if (!currentUser) return null;
        return(
            <div className="main-nav">
                <div className="greeting">
                    <div className="user-icon">{currentUser.username[0]}</div> 
                    <p>Welcome, {currentUser.username}</p>
                </div>

                <div className="add-note">
                        <button className="create-note" onClick={this.handleCreateNote}>
                        <div className="plus-icon">+</div><div>Create Note</div>
                        </button>
                </div>
                <div className="links">
                    <ul className="nav-list">
                        <Link to='/notes'> <i className="fas fa-sticky-note"></i> Notes</Link>
                        <br/>
                        <Link to='/notebooks'><i className="fas fa-book fa-fw"></i> Notebooks </Link>

                    </ul>
                </div>


                <div className="footer">
                    <Link to="/" onClick={this.props.logout}>Log Out</Link>
                </div>
            </div>
        )

    }
}

export default mainNav;