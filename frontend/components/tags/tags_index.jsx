import React from "react";
import { library } from "webpack";

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

    handleOpenRetitmeModal(tag) {
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
            </li>)
        }
        return(
            <div></div>
        )
    }
}

export default TagsIndex;