import React from 'react';
import classes from './MyImplInput.module.css'

const MyImplInput = ({...props}) => {
    return (
        <input className={classes.MyInput}
               {...props}
        />
    );
};

export default MyImplInput;