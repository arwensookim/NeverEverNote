import React from "react";
import { Link } from "react-router-dom";



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

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value }, () => {this.props.updateNote(this.state)})
    }
    
    deleteNote() {
        this.props.deleteNote(this.state.id);
    }

    render(){

        let url;
        if(this.props.match.params.notebookId) {
            url = `/notebooks/${this.props.match.params.notebookId}`;
        } else {
            url = "/notes"
        }
        return(
            <div className="note-update">
                <div className="note-delete">
                    <Link to={url} onClick={this.deleteNote}>Delete</Link>
                </div>

                <div className="edit-note">
                    <input className="title-update" type="text" value={this.state.title} onChange={this.update("title")} placeholder="Title" />
                    {/* <useQuill placeholder="Start Writing..."  value={this.state.body} onChange={this.update("body")}/> */}
                    <textarea className="body-update"  value={this.state.body} onChange={this.update("body")} placeholder="write your body..."/>
                </div>
               
            </div>
        )
    }
}

export default NoteShow;

