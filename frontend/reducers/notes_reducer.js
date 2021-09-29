import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from "../actions/note_actions";

const notesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_NOTES:
            return action.notes;
        case REMOVE_NOTE:
            newState[action.note.id] = action.note;
            return newState
        case REMOVE_NOTE:
            delete newState[action.noteId];
            return newState;
        default:
            return oldState
    }
}

export default notesReducer;