import React from "react";

import NotesContainer from "./notes_index_container";

class NotesForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = this.props.notes;
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
    render() {
        return(
            <div>
                <div>

                </div>
                <div>
                    <NotesContainer />
                </div>
            </div>
        )
    }
}

export default NotesForm;