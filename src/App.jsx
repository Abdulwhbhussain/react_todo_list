import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

/**
 * App Component
 * 
 * The main component that manages the state of all todos and handles
 * adding, toggling, and deleting todos. It demonstrates component hierarchy
 * and props passing to child components.
 * 
 * State:
 *   - todos: array of todo objects
 *   - inputValue: current input field value
 */
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Fundamentals', completed: true },
    { id: 2, text: 'Master Component Architecture', completed: true },
    { id: 3, text: 'Build a Todo App with Reusable Components', completed: true },
    { id: 4, text: 'Implement Props Passing', completed: false },
    { id: 5, text: 'Style Components with CSS', completed: false },
    { id: 6, text: 'Deploy Application', completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Add a new todo
  const handleAddTodo = () => {
    if (inputValue.trim() === '') {
      alert('Please enter a todo item');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Toggle todo completion status
  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  // Calculate stats
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">📝 My Todo List</h1>
          <p className="app-subtitle">Stay organized and productive</p>
        </header>

        <div className="input-section">
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            aria-label="New todo input"
          />
          <button
            className="add-btn"
            onClick={handleAddTodo}
            aria-label="Add todo"
          >
            Add
          </button>
        </div>

        <div className="stats">
          <span className="stat-item">
            Total: <strong>{totalCount}</strong>
          </span>
          <span className="stat-item">
            Completed: <strong>{completedCount}</strong>
          </span>
          <span className="stat-item">
            Remaining: <strong>{totalCount - completedCount}</strong>
          </span>
        </div>

        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
