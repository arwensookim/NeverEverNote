import React from "react";

import TagsNotesList from "./tag_notes_list";

class TagShow extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTag(this.props.match.params.tagId);
        this.props.fetchNotes();
    }

    // componentDidUpdate(prevProps) {
    //     if(this.props.match.params.tagId !== prevProps.match.params.tagId) {
    //         this.props.fetchTag(this.props.match.params.tagId);
    //     }
    // }

    render() {
        if (!this.props.tag) return null;
        const {noteTags, tag, notes, notebooks, currentUser, fetchNoteTags, createNoteTag, deleteNoteTag, fetchTag, fetchNotes, createNote } = this.props;

        let tagNotes = [];
        notes.forEach(note => {
            note.tags.forEach(tag => {
                if(tag.id == this.props.match.params.tagId) {
                    tagNotes.push(note);
                }
            })
        })

        return(
            <div className="notes-index">
                <div className="notes-index-header">
                    <h2>{tag.title}</h2>
                    <div className="notes-count">{tagNotes.length} notes</div>
                </div>
                <div className="notes-content">
                    <TagsNotesList noteTags={noteTags} notebooks={notebooks} notes={tagNotes} tagId={this.props.match.params.tagId} history={this.props.history} currentUser={currentUser} fetchNoteTags={fetchNoteTags} createNoteTag={createNoteTag} deleteNoteTag={deleteNoteTag} fetchTag={fetchTag} fetchNotes={fetchNotes} createNote={createNote} />
                </div>
            </div>
        )
    }
}

export default TagShow;