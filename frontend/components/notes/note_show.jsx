import React from "react";


class NoteShow extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            title: '',
            body: ''
        }
    }




    componentDidMount() {
        this.props.fetchNotes();
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value })
    }

    render(){
        return(
            <div>
            <div>
                <input type="text"  placeholder="Title"  value={this.state.title} onChange={this.update('title')} />

                <button className="delete-button"  onClick={this.handleDelete} > Delete </button> 

            </div>
        </div>
        )
    }
}

export default NoteShow;