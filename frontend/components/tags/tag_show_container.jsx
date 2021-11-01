import { connect } from "react-redux";

import TagShow from "./tag_show";
import { fetchNotes, createNote } from "../../actions/note_actions";
import { fetchTag } from "../../actions/tag_actions";
import { fetchNoteTags, createNoteTag, deleteNoteTag } from "../../actions/note_tag_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps)  => ({
    noteTags : Object.values(state.entities.note_tgas),
    tag: state.entities.tags[ownProps.match.params.tagId],
    notes: Object.values(state.entities.notes),
    notebooks: Object.values(state.entities.notebooks),
    tags: Object.values(state.entities.tags),
    currentUser: state.entities.user[state.session.id],
})