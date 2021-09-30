import { connect } from "react-redux";

import NotesIndex from "./notes_index";
import { fetchNotes , deleteNote} from "../../actions/note_actions";

const mSTP = ({ entities: {notebooks, notes} }) => ({
    notebooks: notebooks,
    notes: Object.values(notes),
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    
    fetchNotes: () => dispatch(fetchNotes()),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(NotesIndex);