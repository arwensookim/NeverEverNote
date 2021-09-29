import React from "react";
import { Link } from "react-router-dom";


class Homepage extends React.Component{
    render() {
        return(
            <div className="homepage">
                <div className="bar">
                    <p className="text">never ever make your life messy</p>
                    <button className="download-button" >Downlaod</button>
                </div>

                <div className="main-top">
                    <h1>Power of NeverEverNote, Make your life Organize</h1>
                    <h2>Try NeverEverNote today</h2>
                    <img className="homepage-image" src={window.homepageURL} />
                </div>

            </div>
        )
    }
}

export default Homepage;