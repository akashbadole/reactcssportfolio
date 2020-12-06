import * as React from "react";

const Navbar = (props) => {

    return (
        <div>
            <ul>
                <li style={{ float: "left" }} className="title">
                    <a href="#" >{props.name}</a>
                </li>
                <div style={{float:'right'}} className="title">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </div>
            </ul> 
        </div>
    );
};

export default Navbar;
