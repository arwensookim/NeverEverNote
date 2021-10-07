import { connect } from "react-redux";

import NoteShow from "./note_show";
import { fetchNotes, fetchNote, updateNote,deleteNote } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";


const mSTP = (state, ownProps) => ({
    note: state.entities.notes[ownProps.match.params.noteId],
    notes: state.entities.notes,
    noteId: ownProps.match.params.noteId,
    notebooks: Object.values(state.entities.notebooks),
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
})

export default connect(mSTP, mDTP)(NoteShow)
