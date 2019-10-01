import React from 'react';
import classes from './add.module.scss';

const add = () => {
    return(
        <div className={classes.Form}>
            <form>
                <div className={classes.Inputbox}>
                    <input type="text" name='item' placeholder='What would you like to do?' />
                </div>
                <input type="submit" value="Add" name="add" />
            </form>
        </div>
    )
}

export default add;