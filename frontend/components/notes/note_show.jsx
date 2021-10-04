import React from "react";
import { Link } from "react-router-dom";


class NoteShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            title: '',
            body: '',
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
        return(
            <div className="note-update">
                <div className="note-delete">
                    <Link to='/notes' onClick={this.deleteNote}>Delete</Link>
                </div>

                <div className="edit-note">
                    <input className="title-update" type="text" value={this.state.title} onChange={this.update("title")} />
                    <textarea className="body-update"  value={this.state.body} onChange={this.update("body")}/>
                </div>
               
            </div>
        )
    }
}

export default NoteShow;