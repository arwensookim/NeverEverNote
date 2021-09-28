import React from "react";

class SessionForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]:e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    // handleDemo(e) {
    //     e.preventDefault();
    //     this.props
    //             .login({username: "demouser", password: "demouser123"})
    //             .then( () => this.props.history.push("/main"));
    // }

    handleDemo() {
        this.props.processForm({ username: "demouser", password: "password" });
      }

    render() {
        return(
            <div className="session-form">
                <div className="form-box">
                    <img src={window.logoUrl} />
                    <br/>
                    <h1>{this.props.formType}</h1>
                    <button onClick={this.handleDemo} >
                        <span>Demo User</span>
                    </button>
                    <form onSubmit={this.handleSubmit}>
                        {/* <h1>{this.props.formType}</h1> */}

                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.update('username')}/>
                        </label>
                        <br/>

                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>    
                        <br/>

                        <input type="submit" value={this.props.formType} />
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;