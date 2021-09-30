import { connect } from "react-redux";

import Notes from "./notes";
import { fetchNotes } from "../../actions/note_actions";

const mSTP = ({ entities: {notebooks, notes} }) => ({
    notebooks: notebooks,
    notes: Object.values(notes),
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    
    fetchNotes: () => dispatch(fetchNotes()),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(Notes);