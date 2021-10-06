import React from "react";
import { Link } from "react-router-dom";

class NotebooksIndex extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            title: 'Untitled',
            notebookRename: null,
            editNotebookTitle: '',
        }

        this.handleCreateNotebook = this.handleCreateNotebook.bind(this);
        this.handleDeleteNotebook = this.handleDeleteNotebook.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
    }

    handleDeleteNotebook(notebookId) {
        this.props.deleteNotebook(notebookId);
    }

    handleCreateNotebook() {
        const newNotebook = {
            title: this.state.title,
            user_id: this.props.currentUser.id
        }

        this.props.createNotebook(newNotebook);

    }

    handleEditTitle() {
        let editNotebook = this.state.notebookRename;
        editNotebook.title = this.state.editNotebookTitle;
        this.props.updateNotebook(editNotebook);
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }


    render() {
        return(
            <div className="notebooks-index" >
                <div className="notebook-header">
                    <h1>Notebooks</h1>
                    <p>{this.props.notebooks.length} notebooks</p>
                </div>

                <div className="add-notebook-button" >
                    <button onClick={this.handleCreateNotebook}>New Notebook</button>
                </div>

                
                <ul className="notebooks-index-list">
                    <li><h3>TITLE</h3></li>
                    <li><h3>CREATED BY</h3></li>
                </ul>
                {this.props.notebooks.map( notebook => (
                    <li key={notebook.id}>
                        <div className="notebook-list-title">
                            <Link to={`/notebooks/${notebook.id}/notes`}>{notebook.title}</Link>
                        </div>

                        <div className="notebook-list-created-by">
                            {this.props.currentUser.username}
                        </div>
                        <button className="edit-title" onClick={ () =>{this.handleEditTitle(notebook)} }>Edit Title</button>
                        <button className="delete-notebook" onClick={ () => { this.handleDeleteNotebook(notebook.id)}}>Delete</button>
                    </li>
                ))}
            </div>
        )
    }
}

export default NotebooksIndex;