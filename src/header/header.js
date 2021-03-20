import React, { Component } from "react"
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="challenge">
                <div className="titulo justify-content-center d-flex align-items-center">
                    <h3>Random User API</h3>
                </div>
            </div>
        )
    }
}

export default Header;