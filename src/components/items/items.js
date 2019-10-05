import React, {Component} from 'react';
import classes from './items.module.scss';
import classesF from './../add/add.module.scss';

var title;
class Item extends Component{
    constructor(){
        super();
        this.state = {
            tasks: [],
            titleValue: ''
        }
        this.addTask = this.addTask.bind(this)
    }

    getTasks(){
        fetch('https://isktodo.herokuapp.com/todos-api/todos/')
        .then(response => response.json())
        .then(data => {
          this.setState({
              tasks: data
          })
        })
    }
    
    
    componentDidMount(){
        this.getTasks();
    }
 
    deleteTask(e, id) {
        fetch('https://isktodo.herokuapp.com/todos-api/todos/'+id, { 
         method: 'DELETE' 
         });
         console.log(id);
        this.setState(prevState => {
            const tasks = prevState.tasks.filter(task => task.id !== id);
            return { tasks };
        });
    }

    addTask(e){
        const titleValue = title.value;
        const item = {'title': titleValue, 'completed': false};
        fetch('https://isktodo.herokuapp.com/todos-api/todos/add', { 
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
         body: JSON.stringify(item) 
        });
       
        this.setState({
             tasks: [...this.state.tasks, item]
        });
        console.log("it works");
        console.log(this.state.tasks);
    }

    updatedStatus(e, id) {
        
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
            <div className={classes.separate}>
            <div className={classesF.Form}>
            <form>
                <div className={classesF.Inputbox}>
                    <input type="text" name='title' ref={input => title = input} placeholder='What would you like to do?' />
                </div>
            </form>
            <button className={classesF.button} onClick={this.addTask}>Add</button>
        </div>

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
                                <td className={classes.Status}><button onClick={(e) =>this.updatedStatus(e, task.id)}>{this.completion(task.completed)}</button></td> 
                                <td className={classes.Remove}><button onClick={(e) =>this.deleteTask(e, task.id)}><i className="fas fa-trash-alt"></i></button></td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
            </div>
            </div>
        );

    }
}   

export default Item;