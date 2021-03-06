import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/session_actions";
// import sessionReducer from "./session_reducer";

const sessionErrorsReducer = (state = [], action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
            case REMOVE_ERRORS:
                return [];
        default:
            return state
    }
}

export default sessionErrorsReducer;