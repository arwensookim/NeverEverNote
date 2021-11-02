import React from "react";
import { Link } from "react-router-dom";
import * as ReactQuill from "react-quill";


class NoteShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            title: '',
            body: '',
            notebook_id: null,
            tagTitle: '',
            tags: [],
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);

        this.updateTag = this.updateTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewTag = this.handleNewTag.bind(this);
        this.handleRemoveTag = this.handleRemoveTag.bind(this);
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.updateNote(this.state))
    }

    setToolbar(status) {
        this.setState({showToolbar: status})
    }


    componentDidMount() {
        this.props.fetchTags()
            .then(res => {this.setState(this.props.note.tags)})
        this.props.fetchNoteTags();
        this.props.fetchNotes()
            .then(res => {this.setState(this.props.note)});
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId) || (this.props.notebookId !== prevProps.notebookId)) {
            this.props.fetchTags();
            this.setState(this.props.note);
        }

    }

    
    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value }, () => {this.props.updateNote(this.state)})
    }

    deleteNote() {
        this.props.deleteNote(this.state.id);
    }

    updateTag(e) {
        this.setState({tagTitle: e.currentTarget.value})
    }

    handleNewTag(e) {
        e.preventDefault();

        let tagTitle = this.state.tagTitle;
        let tag = this.props.tags.find(tag => {
            return tag.title === title;
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const user_id = this.props.note.user_id;
        const title = this.state.tagTitle;
        const note_id = this.props.note.id;
        this.setState( {tagTitle: ''} );

        let tag = this.props.tags.find( tag => {
            return tag.title === title;
        })
        console.log(this.state.tags);
        const newTag = {
            title: title,
            user_id: user_id
        }
        if(tag) {
            const tag_id = tag.id;
            this.setState( {tags: [...this.state.tags, newTag]})
            this.props.createNoteTag({note_id, tag_id})
            .then(res => {
                console.log(res.json());
                this.props.fetchNote(this.props.note.id)
                this.props.fetchNoteTags();
            })
        } else {
            this.setState( {tags: [...this.state.tags, newTag]})
            this.props.createTag({title, user_id})
            .then(res => {
                const tag_id = res.tag.id;
                this.props.createNoteTag({note_id, tag_id})
                .then(res => {
                    console.log(res.json());
                    this.props.fetchNote(this.props.note.id)
                    this.props(fetchNoteTags());
                })
            })
        }
    }


    handleRemoveTag(tag) {
        let deleteTag = Object.values(this.props.noteTags).find(note_tag => {
            return (note_tag.note_id === this.props.note.id) & (note_tag.tag_id === tag.id)
        })
        this.props.deleteNoteTag(deleteTag)
            .then(res => {
                this.props.fetchNote(this.props.note.id)
            });
    }


    render() {

        if(!this.props.note) {
            return null;
        } 

        let url;
        if(this.props.match.params.notebookId) {
            url = `/notebooks/${this.props.match.params.notebookId}`;
        } else {
            url = "/notes"
        }

        return(
            <div className="note-update">
                <div className="note-show-header">
                    <input className="title-update" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title" />
                    <div className="note-delete">
                        <Link to={url} onClick={this.deleteNote}>Delete</Link>
                    </div>
                </div>
 

                <div className="edit-note">
                    <ReactQuill theme="snow" placeholder="body..." value={this.state.body} onChange={this.handleQuillUpdate} modules={quillModules} formats={quillFormats} onFocus={() => this.setToolbar(true)}/>
                </div>

                <div className="tags">
                    <div><img src={window.tagURL} /></div>
                    <ul className="note-tags-lists">
                        {this.state.tags.map( tag => {
                            if (!tag) {
                                return null
                            } else {
                                return (
                                    <div>
                                        <Link to={`/tags/${tag.id}`}>
                                            <li className="tag-list-items" key={tag.id}>{tag.title}</li>
                                        </Link>
                                        {/* <div className="tag-dropdown">
                                            <ul>
                                                <li onClick={ () => this.handleRemoveTag(tag)}>Remove Tag</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                   
                                )
                            }
                        })}
                    </ul>
                    <div className="add-note-tag">
                        <form onSubmit={this.handleSubmit}>
                            <input className="tag-input" type="text" value={this.state.tagTitle} onChange={this.updateTag} placeholder="Add Tag here" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteShow;

const quillModules = {
    toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "image",
    "video",
    "code-block"
];