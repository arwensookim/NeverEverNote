import { connect } from "react-redux";
import NotesIndex from "../notes/notes_index";
import { fetchNotebooks, fetchNotebook } from "../../actions/notebook_actions";
import { fetchNotes, createNote } from "../../actions/note_actions";


const mSTP = (state, ownProps) => ({
    notebooks: state.entities.notebooks,
    notes: Object.values(state.entities.notes),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch, ownProps) => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
    createNote: note => dispatch(creatNote(note))
})

export default connect(mSTP, mDTP)(NotesIndex)