import { connect } from "react-redux";

import NotesIndex from "./notes_index";
import { fetchNotes , deleteNote} from "../../actions/note_actions";

const mSTP = state => ({
    
    // notebooks: notebooks,
    notes: Object.values(state.entities.notes),
    currentUser: state.entities.users[state.session.id],
    url: '/notes/'
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: note => dispatch(createNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    logout: () => dispatch(logout()),
})

export default connect(mSTP, mDTP)(NotesIndex);