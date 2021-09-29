import { connect } from "react-redux";

import Notes from "./notes";
import { fetchNotes } from "../../actions/note_actions";
import { fetchNote } from "../../util/note_api_util";

const mSTP = ({ entities: {notes} }) => ({
    notes: Object.values(notes)
})

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mSTP, mDTP)(Notes);