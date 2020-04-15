import React from 'react';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import Footer from './containers/Footer';

function App() {
  return (
    <div>
      <h1>Hello ToDo App!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
