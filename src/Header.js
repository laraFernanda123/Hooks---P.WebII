import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Header = ({ children }) => {
    return (
        <div>
            <header>
                    <a>
                        <Link to="/">Lista Diária 1</Link>
                    </a>
                    <a>
                        <Link to="/listadois">Lista Diária 2</Link>
                    </a>
            </header>
            {children}
        </div>
    );
};

export default Header;