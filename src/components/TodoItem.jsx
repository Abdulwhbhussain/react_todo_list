import React, { useState } from 'react';
import './TodoItem.css';

/**
 * TodoItem Component
 * 
 * A reusable component that displays a single todo item with enhanced
 * visual feedback for completion state.
 * 
 * Props:
 *   - id: unique identifier for the todo
 *   - text: the todo item text
 *   - completed: boolean indicating if the todo is completed
 *   - onToggle: callback function to toggle completion status
 *   - onDelete: callback function to delete the todo
 * 
 * Features:
 *   - Custom styled checkbox with completion animation
 *   - Smooth visual transitions
 *   - Completion checkmark with icon
 *   - Enhanced accessibility
 */
function TodoItem({ id, text, completed, onToggle, onDelete }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(id);
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''} ${isAnimating ? 'animating' : ''}`}>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="todo-checkbox"
          id={`todo-${id}`}
          checked={completed}
          onChange={handleToggle}
          aria-label={`Mark "${text}" as ${completed ? 'incomplete' : 'complete'}`}
        />
        <label htmlFor={`todo-${id}`} className="checkbox-label">
          <span className="checkbox-custom">
            {completed && (
              <span className="checkmark" aria-hidden="true">✓</span>
            )}
          </span>
        </label>
      </div>
      <span className="todo-text">
        {text}
      </span>
      {completed && <span className="completion-badge" aria-hidden="true">✓</span>}
      <button
        className="delete-btn"
        onClick={() => onDelete(id)}
        aria-label={`Delete "${text}"`}
        title="Delete this todo"
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem;
