import React from "react";
import { Link } from "react-router-dom";

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


    renderErrors() {
        return(
            <div>
                {this.props.errors.map((error, i) => (
                    <p key={`error- ${i}`}>{error}</p>
                ))}
            </div>
        )
    }
    handleDemo() {
        this.props.loginDemo();
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        // const {formType} = this.props;

        // let sessionLink;
        // formType === "Log In" ? sessionLink = <Link to="/signup"><p className="sessionlinksP">Create Account</p></Link> : sessionLink = <Link to="/login"><p className="sessionlinksP">Already have an account?</p></Link>
        return(
            <div className="session-form">
                <div className="form-box">
    
                    <img className="logo" src={window.logoURL} width="130px"/>
                    <h2 className="appName">NeverEverNote</h2>
                    <div className="errors">{this.renderErrors()}</div>

                    <form className="inner-form" onSubmit={this.handleSubmit}>
                        {/* <h1>{this.props.formType}</h1> */}

  
                        <label className="username" >
                            <input  type="text" value={this.state.username} onChange={this.update('username')} placeholder="username"/>
                        </label>


                        <label className="password" >
                            <input  type="password" value={this.state.password} onChange={this.update('password')} placeholder="password"/>
                        </label>    
                        <button className="submission" >Continue</button>
                        <br/>


                        <div className="session-bottom">
                            <div className="text">{this.props.text}</div>
                            <div className="switching" >{this.props.navLink}</div>
                            <div className="demo-user"><a onClick={this.handleDemo}>Log in with Demo User</a></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SessionForm;