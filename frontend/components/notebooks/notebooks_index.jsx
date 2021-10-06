import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";



class NotebooksIndex extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            title: 'Untitled',
            modal: false,
            notebookModal: false,
            notebookRename: null,
            renamedNotebook: '',
        }

        this.handleCreateNotebook = this.handleCreateNotebook.bind(this);
        this.handleDeleteNotebook = this.handleDeleteNotebook.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenNotebookModal = this.handleOpenNotebookModal.bind(this);
        this.handleCloseNotebookModal = this.handleCloseNotebookModal.bind(this);
        this.handleRename = this.handleRename.bind(this);
    }

    handleDeleteNotebook(notebookId) {
        // this.props.deleteNotebook(notebookId);
        if (this.state.title !== "Default") {
            this.props.deleteNotebook(notebookId);
        }
    }

    handleCreateNotebook() {
        const newNotebook = {
            title: this.state.title,
            user_id: this.props.currentUser.id
        }

        this.props.createNotebook(newNotebook);
        this.handleCloseNotebookModal();

    }

    handleRename() {
        let notebook = this.state.notebookRename;
        notebook.title = this.state.renamedNotebook;
        this.props.updateNotebook(notebook);
        this.handleCloseModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    handleOpenModal() {
        this.setState( {modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleOpenNotebookModal() {
        this.setState({notebookmModal: true})
    }

    handleCloseNotebookModal() {
        this.setState({notebookModal: false})
    }

    handleOpenRenameModal(notebook) {
        this.handleOpenModal();

        this.setState({notebookRename: notebook, renamedNotebook: notebook.title})
    }


    render() {
        let aNotebook;
        if(this.props.noteboks.length <= 1) {
            aNotebook = "notebook";
        } else {
            aNotebook = "notebooks"
        }
        return(
            <div className="notebooks-index" >
                <div className="notebook-header">
                    <h1>Notebooks</h1>
                    <p>{this.props.notebooks.length} {aNotebook}</p>
                </div>

                <div className="add-notebook-button" >
                    <button onClick={this.handleOpenNotebookModal} className="createNotebook-button">New Notebook</button>
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