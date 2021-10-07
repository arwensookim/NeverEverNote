import { RECEIVE_NOTEBOOK_ERRORS, REMOVE_NOTEBOOK_ERRORS, REMOVE_NOTEBOOK } from "../actions/notebook_actions";

const notebookErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_NOTEBOOK_ERRORS:
            return action.errors;
        case REMOVE_NOTEBOOK_ERRORS:
            return [];
        case REMOVE_NOTEBOOK:
            return [];
        default:
            return oldState;
    }
}