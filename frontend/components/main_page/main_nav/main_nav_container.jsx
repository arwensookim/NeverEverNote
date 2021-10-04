import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logout } from "../../../actions/session_actions";
import { createNote } from "../../../actions/note_actions";
import mainNav from "./main_nav";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    
    // currentUser: Object.values(state.entities.users)[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: note => dispatch(createNote(note))
})

export default withRouter(connect(mSTP, mDTP)(mainNav))