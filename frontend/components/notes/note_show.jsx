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
        }

        this.deleteNote = this.deleteNote.bind(this);
        this.handleQuillUpdate = this.handleQuillUpdate.bind(this);
        this.setToolbar = this.setToolbar.bind(this);
    }

    handleQuillUpdate(text) {
        this.setState({body: text}, () => this.props.updateNote(this.state))
    }

    setToolbar(status) {
        this.setState({showToolbar: status})
    }


    componentDidMount() {
        this.props.fetchNotes()
            .then(res => {this.setState(this.props.note)});
    }

    componentDidUpdate(prevProps){
        if((this.props.noteId !== prevProps.noteId)) {
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

    render() {

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
                    {/* <textarea className="body-update"  value={this.state.body} onChange={this.update("body")} placeholder="write your body..."/> */}
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