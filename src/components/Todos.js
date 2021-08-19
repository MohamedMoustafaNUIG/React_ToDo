import React, {Component} from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends Component{
  render(){
    return this.props.todos.map((todo) =>(
        <h3>
            <TodoItem 
            key = {todo.id} 
            todo = {todo} 
            markComplete = {this.props.markComplete}
            deleteTodo = {this.props.deleteTodo}
            />
        </h3>
    ));    
  }
}

//type checking for props of component
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;