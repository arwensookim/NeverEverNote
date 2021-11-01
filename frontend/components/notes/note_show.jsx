import React from "react";
import { Link } from "react-router-dom";
import * as ReactQuill from "react-quill";
import Modal from "react-modal";

class NoteShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            title: '',
            body: '',
            notebook_id: null,
            tagTitle: ''
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);
        // this.handleOpenModal = this.handleOpenModal.bind(this);
        // this.handleCloseModal = this.handleCloseModal.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.updateNote(this.state))
    }

    setToolbar(status) {
        this.setState({showToolbar: status})
    }


    componentDidMount() {
        this.props.fetchTags();
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

    // this handler, you don't really do this. 
    // you are not guaranteed to get what you want, 100% of the time. 
    // to guarantee what you want from setState, you use {...} spread operator
    // biggest difference = merging two objects vs overwriting
    
    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value }, () => {this.props.updateNote(this.state)})
    }

    deleteNote() {
        this.props.deleteNote(this.state.id);
    }

    updateTag(e) {
        this.setState({tagTitle: e.currentTarget.value})
    }

    // handleOpenModal() {
    //     this.setState({modal: true})
    // }

    // handleCloseModal() {
    //     this.setState({modal: false})
    // }

    handleSubmit(e) {
        e.preventDefault();

        const user_id = this.props.note.user_id;
        const title = this.state.tagTitle;
        const note_id = this.props.note.id;
        this.setState( {tagTitle: ''} );

        let tag = this.props.tags.find( tag => {
            return tag.title === title;
        })

        if(tag) {
            const tag_id = tag.id;
            this.props.createNoteTag({note_id, tag_id})
                .then(res => {
                    this.props.fetchNote(this.props.note.id)
                    this.props.fetchNoteTags();
                })
        } else {
            this.props.createTag({title, user_id})
                .then(res => {
                    const tag_id = res.tag.id;
                    this.props.createNoteTag({note_id, tag_id})
                        .then(res => {
                            this.props.fetchNote(this.props.note.id)
                            this.props(fetchNoteTags());
                        })
                })
        }
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
                        {this.props.note.tags.map(tag => {
                            if (!tag) {
                                return null
                            } else if (tag.note_id === this.props.note.id) {
                                return (
                                    <Link to={`/tags/${tag.id}`}>
                                        <li className="tag-list-items" key={tag.id}>{tag.title}</li>
                                    </Link>
                                )
                            }
                        })}
                    </ul>
                    <div className="add-note-tag">
                        <form onSubmit={this.handleSubmit}>
                            <input className="tag-input" type="text" value={this.state.tagTitle} onChange={this.updateTag} placeholder="Add Tag" />
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