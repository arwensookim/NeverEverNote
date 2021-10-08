import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import { formatDateNotebook } from "../../util/date_util";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
    },
  };


class NotebooksIndex extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            title: '',
            modal: false,
            notebookModal: false,
            notebookRename: null,
            renamedNotebook: '',
        }

        this.handleDeleteNotebook = this.handleDeleteNotebook.bind(this);
        this.handleCreateNotebook = this.handleCreateNotebook.bind(this);
        this.handleRename = this.handleRename.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenNotebookModal = this.handleOpenNotebookModal.bind(this);
        this.handleCloseNotebookModal = this.handleCloseNotebookModal.bind(this);
        this.handleOpenRenameModal = this.handleOpenRenameModal.bind(this);
    }


    handleDeleteNotebook(notebookId) {
        // this.props.deleteNotebook(notebookId);
        if (this.state.title !== "Default") {
            this.props.deleteNotebook(notebookId);
        } else {
            window.alert("You can't delete Default Notebook")
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

    renderErrors() {
        return(
            <div>
                {this.props.errors.map( (error, i) => (
                    <p key={`error- ${i}`}>{error}</p>
                ))}
            </div>
        )
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
        this.setState({notebookModal: true})
    }

    handleCloseNotebookModal() {
        this.setState({notebookModal: false})
    }

    handleOpenRenameModal(notebook) {
        this.handleOpenModal();

        this.setState({notebookRename: notebook, renamedNotebook: notebook.title})
    }


    render() {
        // console.log(this.props.notebooks);
        // let aNotebook;
        // if(this.props.noteboks.length <= 1) {
        //     aNotebook = "notebook";
        // } else {
        //     aNotebook = "notebooks"
        // }
        return(
            <div className="notebooks-index" >
                <div className="notebook-header">
                    <h1><i className="fas fa-book"></i> Notebooks</h1>
                </div>

                <div className="notebook-subheader" >
                    <p>{this.props.notebooks.length} Notebooks</p>
                    <button onClick={this.handleOpenNotebookModal} className="createNotebook-button"><i className="fas fa-book"></i>Create Notebook</button>
                </div>

                
                <ul className="notebooks-index-list">
                    <li>
                        <div className="notebook-list-title"><h3>TITLE</h3></div>
                        <div className="notebook-list-created-by"><h3>CREATED BY</h3></div>
                        <div className="notebook-list-updated">UPDATED AT</div>
                        <div className="notebook-list-action-button"></div>
                    </li>

                    {this.props.notebooks.map( (notebook, i) => (
                        <li key={notebook.id}>
                            <div className="notebook-list-title">
                                <Link to={`/notebooks/${notebook.id}/notes`}><i className="fas fa-book"></i> {notebook.title}</Link>
                            </div>

                            <div className="notebook-list-created-by">
                                {this.props.currentUser.username}
                            </div>

                            <div className="notebook-list-updated">{formatDateNotebook(notebook.updated_at)}</div>
                            {i === 0 ? <div className="notebook-list-action-button">Cannot Modify</div> :  
                            <div className="notebook-list-action-button">
                                <button className="rename-button" onClick={ () =>{this.handleOpenRenameModal(notebook)} }>Edit Title</button>
                                <button className="delete-notebook-button" onClick={ () => { this.handleDeleteNotebook(notebook.id)}}>Delete</button>
                            </div>}
                        </li>
                    ))}
                </ul>

                <Modal isOpen={this.state.modal} className="notebook-modal" ariaHideApp={false} style={customStyles} >
                    <div className="rename-modal">
                        <h2 className="modal-header">Rename Notebook Title</h2>
                        <label className="modal-title">Title</label>
                        <input type="text" className="rename-title-input" placeholder="Title" value={this.state.renamedNotebook} onChange={this.update('renamedNotebook')} />
                        <div className="modal-button">
                            <button className="save" onClick={this.handleRename}>Save</button>
                            <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>

                <Modal isOpen={this.state.notebookModal} className="notebook-modal" ariaHideApp={false} style={customStyles} >
                    <div className="create-modal">
                        <h2>Create New Notebook</h2>
                        <div className="input-area">
                            <label className="create-notebook-title-modal">Title</label>
                            <input type="text" className="create-notebook-input-modal" placeholder="Title" value={this.state.title} onChange={this.update('title')}/>
                        </div>
                        <div className="modal-button">
                            <button className="create" onClick={this.handleCreateNotebook}>Create</button>
                            <button className="cancel" onClick={this.handleCloseNotebookModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default NotebooksIndex;