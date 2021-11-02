import React from "react";
import { Link } from "react-router-dom";

class mainNav extends React.Component {
    constructor(props) {
        super(props);

        this.handleCreateNote = this.handleCreateNote.bind(this);
    }

    handleCreateNote() {

        let notebookId;
        if (this.props.match.params.notebookId) {
            notebookId = this.props.match.params.notebookId;

            let newNote = {
                title: "",
                body: "",
                user_id: this.props.currentUser.id,
                notebook_id: notebookId
            }

            this.props.createNote(newNote)
                .then( res => this.props.history.push(`/notebooks/${notebookId}/notes/${res.note.id}`))
        } else  {
            notebookId = this.props.notebooks[0].id;

            let newNote = {
                title: "",
                body: "",
                user_id: this.props.currentUser.id,
                notebook_id: notebookId
            }

            this.props.createNote(newNote)
                .then((res) => this.props.history.push(`/notes/${res.note.id}`))
        }
    

    }

    componentDidMount() {
        this.props.fetchNotebooks();
        this.props.fetchNotes();
        this.props.fetchTags();
    }

    render() {
        const {currentUser} = this.props;
        // if (!currentUser) return null;

        
        return(
            <div className="main-nav">
                <div className="greeting">
                    <div className="user-icon"><i className="far fa-user fa-2x" ></i></div>
                    {/* <div className="user-icon">{currentUser.username[0]}</div>  */}
                    <p>Welcome, {currentUser.username}</p>
                </div>

                <div className="add-note">
                        <button className="create-note" onClick={this.handleCreateNote}>
                        <div className="plus-icon">+</div><div className="text">Create Note</div>
                        </button>
                </div>

                <div className="links">
                    <ul className="nav-list">
                        <Link to='/notes'> <i className="fas fa-sticky-note"></i> Notes </Link>
                        <Link to='/notebooks'><i className="fas fa-book"></i> Notebooks </Link>
                        <Link to='/tags'><i class="fas fa-tag"></i> Tags </Link>
                    </ul>
                </div>

                <div className="footer">
                    <Link to="/" onClick={this.props.logout}><i class="fas fa-sign-out-alt"></i> Log Out</Link>
                </div>
            </div>
        )

    }
}

export default mainNav;