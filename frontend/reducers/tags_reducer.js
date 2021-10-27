import { RECEIVE_TAGS, RECEIVE_TAG, REMOVE_TAG } from "../actions/tag_actions";

const tagsReducer = ( oldState = {}, action ) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TAGS:
            return action.tags;
        case RECEIVE_TAG:
            nextState[action.tag.id] = action.tag;
            return nextState;
        case REMOVE_TAG:
            delete nextState[action.tagId];
            return nextState
    
        default:
            return oldState;
    }
}

export default tagsReducer;