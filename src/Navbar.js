import * as React from "react";

const Navbar = (props) => {

    return (
        <div>
            <ul>
                <li style={{ float: "left" }} className="title">
                    <a href="index.html" >{props.name}</a>
                </li>
                <div style={{float:'right'}} className="title">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="index.html">Service</a>
                    </li>
                    <li>
                        <a href="index.html">About</a>
                    </li>
                </div>
            </ul> 
        </div>
    );
};

export default Navbar;
