import { connect } from "react-redux";

import Notes from "./notes";
import { fetchNote } from "../../actions/note_actions";

const mSTP = ({ entities: {notes} }) => ({
    notes: Object.values(notes)
})

const mDTP = dispatch => ({
    fetchNote: () => dispatch(fetchNote())
})

export default connect(mSTP, mDTP)(Notes);