import React from 'react';
import {Link, Outlet} from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.content__root}>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/about" style={{margin: 10}}>About</Link>
                    <Link to="/posts" style={{margin: 10}}>Posts</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;