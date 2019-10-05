import React from 'react';
import classes from './container.module.scss';
import List from './../list/List';
import Add from './../add/add';

const container = (props)=>{
        return(
            <div className={classes.Container}>
                <div className={classes.Top}>
                    <h1>TODO List</h1>
          
                    <List/>
                </div>
            </div>
        );
    }
    

export default container;