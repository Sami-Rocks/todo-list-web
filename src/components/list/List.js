import React, {Component} from 'react';
import classes from './list.module.scss';
import Item from './../items/items';

class List extends Component{
    render(){
        return(
            <div className={classes.List}>
               <Item/>
              
            </div>
        );
    }
}

export default List;