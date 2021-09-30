import { connect, Connect } from "react-redux";

import NotesForm from "./notes_form";
import { createNote } from "../../actions/note_actions";

const mSTP = state => ({
    notes: {
        title: "",
        body: "",
    },

    formType: 'Add Notes'
})

const mDTP = dispatch => ({
    action: note => dispatch(createNote(note))
})

export default connect(mSTP, mDTP)(NotesForm);