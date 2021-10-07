import { combineReducers } from "redux";
import notebookErrorsReducer from "./notebook_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers ({
    session: sessionErrorsReducer,
    notebooks: notebookErrorsReducer
})

export default errorsReducer;