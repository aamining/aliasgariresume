import React, { Component } from "react";


class Navbar extends Component{
    render(){
    return(
        <div>
            <nav className="blue">
            {/* the above class add to change the color if remove it woud be pink again */}
                <div className="nav-wrapper">
                <a href="/" classN="brand-logo">Resume</a>
                <ul id="nav-mobile" class="right ">
                    <li><a href="/signup">signup</a></li>
                    <li><a href="/login">login</a></li>
                    <li><a href="comments">comments</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
    }
}
export default Navbar;
