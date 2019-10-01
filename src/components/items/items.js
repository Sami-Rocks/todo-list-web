import React from 'react';
import classes from './items.module.scss';


const item = ({tasks}) =>{
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
                    {tasks.map((task) => (
                        <tr>
                            <td className={classes.Text}>{task.title}</td>
                            <td className={classes.Status}><a href="#">{task.completed}</a></td>
                            <td className={classes.Remove}><a href="#"><i className="fas fa-trash-alt"></i></a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}   

export default item;