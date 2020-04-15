import React from 'react';
import { connect } from 'react-redux';

import Todo from '../components/Todo';
import { toggleTodo } from '../actions/todo.actions';

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

const filtersTodo = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.complete === true);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => todo.complete === false);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filtersTodo(state.todos, state.filter),
});

const mapDispatchToProps = {
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
