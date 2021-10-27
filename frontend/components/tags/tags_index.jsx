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

    render() {
        return(
            <div></div>
        )
    }
}

export default TagsIndex;