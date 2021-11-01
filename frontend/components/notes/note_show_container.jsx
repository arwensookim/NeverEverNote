import { connect } from "react-redux";

import NoteShow from "./note_show";
import { fetchNotes, fetchNote, updateNote,deleteNote } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { createTag, fetchTags } from "../../actions/tag_actions";
import { fetchNoteTags, createNoteTag, deleteNoteTag } from "../../actions/note_tag_actions";


const mSTP = (state, ownProps) => ({
    note: state.entities.notes[ownProps.match.params.noteId],
    notes: state.entities.notes,
    noteId: ownProps.match.params.noteId,
    notebooks: Object.values(state.entities.notebooks),
    tags: Object.values(state.entities.tags),
    noteTags: state.entities.note_tag
})

const mDTP = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    fetchTags: () => dispatch(fetchTags()),
    createTag: tag => dispatch(createTag(tag)),
    fetchNoteTags: () => dispatch(fetchNoteTags()),
    createNoteTag: note_tag => dispatch(createNoteTag(note_tag)),
    deleteNoteTag: note_tagId => dispatch(deleteNoteTag(note_tagId)),
})

export default connect(mSTP, mDTP)(NoteShow)
