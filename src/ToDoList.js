import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import data from './data';
console.log(data)

class ToDoList extends Component {
    state = {  }
    render() { 
        return (
            <section>
                {data.map (elt => 
                <ToDoItem
                    key={elt.id}
                    completed={elt.completed}
                    task={elt.task}
                />
                
                )}
            </section>
          );
    }
}
 
export default ToDoList;