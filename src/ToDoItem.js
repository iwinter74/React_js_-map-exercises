import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {  }
    render() { 
        return ( 
            <section>
                <input type="checkbox" name="" id="check" checked={this.props.completed}/>
                
                {/* <span>{this.props.completed?'oui':'non'}</span> */}
                <h1>{this.props.task}</h1>
            </section>
         );
    }
}
 
export default ToDoItem;