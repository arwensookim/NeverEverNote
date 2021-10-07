import { connect } from "react-redux";
import NotebookShow from "./notebook_show";
import { fetchNotebooks, fetchNotebook } from "../../actions/notebook_actions";
import { fetchNotes, createNote } from "../../actions/note_actions";


const mSTP = (state, ownProps) => ({
    notebooks: Object.values(state.entities.notebooks),
    notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    notes: Object.values(state.entities.notes),
    currentUser: state.entities.users[state.session.id],
    currentNotebookId: ownProps.match.params.notebookId,
})

const mDTP = (dispatch, ownProps) => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: notebookId => dispatch(fetchNotebook(notebookId)),
    fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
    createNote: note => dispatch(creatNote(note))
})

export default connect(mSTP, mDTP)(NotebookShow)