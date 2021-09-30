import { connect } from "react-redux";
import { fetchNotebooks, createNotebook, deleteNotebook, updateNotebook } from "../../actions/notebook_actions";
import NotebooksIndex from "./notebooks_index";


const mSTP = state => ({
    currentUser: state.entities.user,
    notebooks: Object.vaalue(notebooks)
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
})

export default connect(mSTP, mDTP)(NotebooksIndex);