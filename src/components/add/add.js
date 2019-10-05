import React, {Component} from 'react';
import classes from './add.module.scss';

class Add extends Component {

     
    state = {
        tasks: []
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
    
    addTask(){
        fetch('https://isktodo.herokuapp.com/todos-api/todos/add', { 
         method: 'PUT' 
         });
        const titleValue = this.state.titleValue;
        const item = {'title': titleValue, 'completed': false};
        this.setState({
            tasks: [...this.state.tasks, item]
        });
    }

    render(){

        return(
            <div className={classes.Form}>
                <form>
                    <div className={classes.Inputbox}>
                        <input type="text" name='item' placeholder='What would you like to do?' />
                    </div>
                    <input type="submit" value="Add" name="add" />
                </form>
            </div>
        );
    }
}

export default Add;