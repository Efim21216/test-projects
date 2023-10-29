import React from 'react';
import classes from './MyImpButton.module.css'

const MyImplButton = ({children, ...props}) => {
    return (
        <button className={classes.MyBtn} {...props}>
            {children}
        </button>
    );
};

export default MyImplButton;