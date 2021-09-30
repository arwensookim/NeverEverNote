import React from "react";

import NotesIndexContainer from "./notes_index_container";
import NotesIndex from "./notes_index";

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
                    <NotesIndexContainer />
                    {/* <NotesIndex/> */}
                </div>
            </div>
        )
    }
}

export default NotesForm;