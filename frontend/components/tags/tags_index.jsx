import React from "react";

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
        let tag;
        if (this.props.tags) {
            tag = this.props.tags.map(tag => 
            <li key={tag.id}>
                <div>
                    <Link to={`/tags/${tag.id}`}><img src={window.tagURL}/>{tag.title}</Link>
                </div>
                <div>{this.props.currentUser.username}</div>
                <div>
                    <button onClick={() => this.handleOpenretitleModal(tag)}>Retitle</button>
                    <button onClick={() => this.handleDelete(tag.id)}>Delete</button>
                </div>
            </li>
            )
        } else {
            tag = '';
        }

        return(
            <div className="tags-index">
                <div className="tags-header">
                    <h1>Tags</h1>
                </div>

                <div className="tags-subheader">
                    <p>{this.props.tags.length} Tags</p>
                    <button onClick={this.handleOpenTagModal} className="create-tag-button"><i class="fas fa-tag"></i> New Tag</button>
                </div>

                <ul className="tags-index-list">
                    <li>
                        <div className="tags-list-title"><h3>TITLE</h3></div>
                        <div className="tags-list-created-by"><h3>CREATED BY</h3></div>
                        <div className="tags-list-updated"><h3>UPDATED AT</h3></div>
                        <div className="tags-list-action-button"></div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TagsIndex;