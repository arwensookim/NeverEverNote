import React from "react";

class NotebooksIndex extends React.Component{
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }


    render() {
        return(
            <div></div>
        )
    }
}

export default NotebooksIndex;