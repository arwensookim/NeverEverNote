import React from "react";
import { Link, Redirect } from "react-router-dom";

import NavBarContainer from "../navbar/navbar_container";


class Homepage extends React.Component{

    render() {
        if (this.props.currentUser) {
            return <Redirect to="/notes" />;
        }

        return(

            <div className="homepage">
                <NavBarContainer />
                <div className="bar">
                    <p className="main-text">never ever make your life messy</p>
                    <button className="download-button" >Download</button>
                </div>

                <div className="main-top">
                    <h1>Power of NeverEverNote, Make your life Organize</h1>
                    <p>Remembr everything and tackle any project with your notes, tasks, and shedule all in one place.</p>
                    <Link to='/signup'>
                        <button className="signup-button" >Sign up for free</button>
                    </Link>
                    <Link to='/login' className="login-link">Already have account? Log In</Link>
                </div>

                <div className="main-middle">
                    <img className="homepage-image" src={window.homepageURL} />
                    <div className="middle-texts">
                        <div className="middle-text">
                            <h3>WORK ANYWHERE</h3>
                            <p>You can log in to your account from any web browser!</p>
                        </div>

                        <div className="middle-text">
                            <h3>REMEMBER EVERYTHING</h3>
                            <p>You can keep track of your notes!</p>
                        </div>

                        <div className="middle-text">
                            <h3>ORGANIZE YOUR NOTE</h3>
                            <p>Keep your same categorizes notes under a notebook!</p>
                        </div>

                        <div className="middle-text">
                            <h3>FIND THINGS FAST</h3>
                            <p>You can easily sort your content with tags!</p>
                        </div>  
                    </div>
                </div>

            </div>
        )
    }
}

export default Homepage;