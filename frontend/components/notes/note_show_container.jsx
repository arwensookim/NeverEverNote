import { connect } from "react-redux";
import NoteShow from "./note_show";

const mSTP = ({entities: {notes}}, ownProps) => ({
    note: notes[ownProps.match.params.noteId]
})

const mDTP = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
})

export default connect(mSTP, mDTP)(NoteShow)
