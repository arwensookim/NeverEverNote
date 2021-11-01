import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

import { formatDateNotebook } from "../../util/date_util";

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            modal: false,
            tagmodal: false,
            retitle: null,
            retitleTag: ""
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCreateTag = this.handleCreateTag.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenTagModal = this.handleOpenTagModal.bind(this);
        this.handleCloseTagModal = this.handleCloseTagModal.bind(this);
        this.handleOpenRetitleModal = this.handleOpenRetitleModal.bind(this);
        this.handleRetitle = this.handleRetitle.bind(this);
    }

    componentDidMount() {
        this.props.fetchTags();
    }

    handleDelete(tagId) {
        this.props.deleteTag(tagId);
    }

    handleCreateTag() {
        let tag = {
            title: this.state.title,
            user_id: this.props.currentUser.id
        }

        this.props.createTag(tag);
        this.handleCloseTagModal();
    }

    update(field) {
        return e => { this.setState({ [field]: e. currentTarget.value })}
    }

    handleOpenModal() {
        this.setState({modal: true})
    }

    handleCloseModal() {
        this.setState({modal: false})
    }

    handleOpenTagModal() {
        this.setState({tagmodal: true})
    }

    handleCloseTagModal() {
        this.setState({tagmodal: false})
    }

    handleOpenRetitleModal(tag) {
        this.handleOpenModal();

        this.setState({
            retitle: tag,
            retitleTag: tag.title
        })
    }

    handleRetitle() {
        let tag = this.state.retitle;
        tag.title = this.state.retitleTag;
        this.props.updateTag(tag);
        this.handleCloseModal();
    }

    render() {

        // console.log(this.props.tags);
        return(
            <div className="tags-index">
                <div className="tags-header">
                    <h1>Tags</h1>
                </div>

                <div className="tags-subheader">
                    <p>{this.props.tags.length} Tags</p>
                    <button onClick={this.handleOpenTagModal} className="create-tag-button"><i className="fas fa-tag"></i> New Tag</button>
                </div>

                <ul className="tags-index-list">
                    <li>
                        <div className="tags-list-title"><h3>TITLE</h3></div>
                        <div className="tags-list-created-by"><h3>CREATED BY</h3></div>
                        <div className="tags-list-updated"><h3>UPDATED AT</h3></div>
                        <div className="tags-list-action-button"></div>
                    </li>

                {this.props.tags.map( tag => (
                     <li key={tag.id}>
                     <div className="tags-list-title">
                         <Link to={`/tags/${tag.id}`}><img src={window.tagURL}/>{tag.title}</Link>
                     </div>
                     <div className="tags-list-created-by">{this.props.currentUser.username}</div>
                     <div className="tags-list-updated"> {formatDateNotebook(tag.updated_at)}</div>
                     <div className="tags-list-action-button">
                         <button className="rename-button" onClick={() => this.handleOpenretitleModal(tag)}>Retitle</button>
                         <button className="delete-notebook-button" onClick={() => this.handleDelete(tag.id)}>Delete</button>
                     </div>
                 </li>
                ))}
                </ul>

                <Modal isOpen={this.state.modal} className="overlay">
                    <div className="my-modal">
                        <h2 className="modal-title">Retitle tag</h2>
                        <label className="modal-name">title</label>
                        <input className="rename-notebook-input" type="text" placeholder="Tag title" value={this.state.retitleTag} onChange={this.update('retitleTag')}/>
                        <div className="modal-buttons">
                                <button className="cancel" onClick={this.handleCloseModal}>Cancel</button>
                                <button className="continue" onClick={this.handleRename}>Continue</button>
                        </div>
                    </div>
                </Modal>

                <Modal isOpen={this.state.tagmodal} className="notebook-modal">
                    <div className="create-modal">
                        <h2>Create new tag</h2>
                        <p>Tags are useful for grouping notes around a common topic.</p>
                        <div>
                            <label className="ccreate-notebook-title-modal">title</label>
                            <input className="create-notebook-input-modal" type="text" placeholder="Tag title" value={this.state.title} onChange={this.update('title')}/>
                        </div>
                       
                        
                        <div className="modal-buttons">
                            <button className="create" onClick={this.handleCreateTag}>Create</button>
                            <button className="cancel" onClick={this.handleCloseTagModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default TagsIndex;