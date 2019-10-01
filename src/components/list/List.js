import React, {Component} from 'react';
import classes from './list.module.scss';
import Item from './../items/items';

class List extends Component{

    state = {
        tasks: []
    }

    componentDidMount() {
        fetch('https://isktodo.herokuapp.com/todos-api/todos/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ tasks: data })
        })
        .catch(console.log)
      }

    render(){
        return(
            <div className={classes.List}>
               <Item tasks={this.state.tasks} />
              
            </div>
        );
    }
}

export default List;