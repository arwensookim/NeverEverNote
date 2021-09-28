import { connect } from "react-redux";

import CreateNotebookForm from "./create_notebook_form";

const mSTP = state => ({
    currentUser: state.entities.user
})

const mDTP = dispatch => ({
    
})

export default connect(mSTP, mDTP)(CreateNotebookForm);