import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../../actions/session_actions";
import { createNote, fetchNotes } from "../../../actions/note_actions";
import mainNav from "./main_nav";
import { fetchNotebooks, fetchNotebook } from "../../../actions/notebook_actions";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    notebooks: Object.values(state.entities.notebooks),
    notes: Object.values(state.entities.notes),

    
    // currentUser: Object.values(state.entities.users)[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note)),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes())
})

export default withRouter(connect(mSTP, mDTP)(mainNav))