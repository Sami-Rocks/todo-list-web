import React from 'react';
import classes from './items.module.scss';


const item = (props) =>{
    return(
        <div className={classes.Item}>
            <table>
                <tr>
                    <td className={classes.Text}>Item</td>
                    <td>Completed</td>
                    <td>Close</td>
                </tr>
                <tr>
                    <td className={classes.Text}>Item</td>
                    <td>Completed</td>
                    <td>Close</td>
                </tr>
            </table>
        </div>
    );
}   

export default item;