import React, {Component} from 'react';
import classes from './items.module.scss';
import axios from 'axios'

class Item extends Component{
    
    state = {
        tasks: []
    }

    getTasks(){
        fetch(`https://isktodo.herokuapp.com/todos-api/todos/`)
        .then(response => response.json())
        .then(data => {
          this.setState({
              tasks: data
          })
        })
    }
    
    
    componentDidMount() {
        this.getTasks();
        
      }
    
      deleteTask(e, value){
        fetch('https://isktodo.herokuapp.com/todos-api/todos/'+value, { 
        method: 'DELETE' 
        }); 
 
    }
    
      completion(value){
        if(value===true){
            return('Completed');
        }else{
            return('pending');
        }
    }
    
    render(){
    
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
                        {this.state.tasks.map((task) => (
                            <tr key={task.id}>
                                <td className={classes.Text}>{task.title}</td>
                                <td className={classes.Status}><button onClick="">{this.completion(task.completed)}</button></td>
                                <td className={classes.Remove}><button onClick={(e) =>this.deleteTask(e, task.id)}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
            </div>
        );

    }
}   

export default Item;