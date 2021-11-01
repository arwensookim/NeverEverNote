import { connect } from "react-redux";

import TagShow from "./tag_show";
import { fetchNotes, createNote } from "../../actions/note_actions";
import { fetchTag } from "../../actions/tag_actions";
import { fetchNoteTags, createNoteTag, deleteNoteTag } from "../../actions/note_tag_actions";
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps)  => ({
    noteTags : state.entities.note_tags,
    tag: state.entities.tags[ownProps.match.params.tagId],
    note: state.entities.notes[ownProps.match.params.noteId],
    notes: Object.values(state.entities.notes),
    notebooks: Object.values(state.entities.notebooks),
    tags: Object.values(state.entities.tags),
    currentUser: state.session.id,
})

const mDTP = dispatch => ({
    fetchNoteTags: () => dispatch(fetchNoteTags()),
    createNoteTag: note_tag => dispatch(createNoteTag(note_tag)),
    deleteNoteTag: note_tagId => dispatch(deleteNoteTag(note_tagId)),

    fetchTag: tagId => dispatch(fetchTag(tagId)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: note => dispatch(createNote(note))
})

export default withRouter(connect(mSTP, mDTP)(TagShow));