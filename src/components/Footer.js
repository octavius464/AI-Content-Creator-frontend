import React from "react"
import "./Footer.css"

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>A.I. Content Creator</h4>
                        <ul className="list-unstyled">
                            <li>Email: <a href>info@aimarketer.com</a></li>
                            <li><a href>Request a New Feature</a></li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>OTHER PROJECTS</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Festive Style Transfer</a></li>
                            <li><a href="">Random Slogan Generator</a></li>
                            <li><a href="">Data Analytics</a></li>
                            <li><a href="">Digital Marketing Education</a></li>
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h4>ABOUT US</h4>
                        <ul className="list-unstyled">
                            <li>We created this website to generate provide design inspirations for artist
                                and digital marketing professionals using our 
                                meticulously-designed A.I.-powered content creation engine.
                            </li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} A.I. Content Creator | All right reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer