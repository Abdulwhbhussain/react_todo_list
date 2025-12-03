import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

/**
 * TodoList Component
 * 
 * A container component that displays a list of TodoItem components.
 * Props:
 *   - todos: array of todo objects with id, text, and completed properties
 *   - onToggle: callback function passed to TodoItem for toggling completion
 *   - onDelete: callback function passed to TodoItem for deleting todos
 */
function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list empty">
        <p className="empty-message">No todos yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
