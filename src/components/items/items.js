import React from 'react';
import classes from './items.module.scss';


const item = (props) =>{
    return(
        <div className={classes.Item}>
            <h3>Todo List</h3>
            <table>
                <thead>
                <tr>
                    <th className={classes.HText}>List</th>
                    <th>Status</th>
                    <th>Close</th>
                </tr>
                
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
}   

export default item;