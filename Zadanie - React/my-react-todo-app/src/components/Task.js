// Task.js
import React from 'react';

// Komponent pojedynczego zadania
const Task = ({ id, text, completed, onToggleCompleted }) => {
  return (
    <div>
      {/* Checkbox do oznaczania ukończenia zadania */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(id)}
      />
      {/* Tekst zadania z przekreśleniem, jeśli zadanie jest ukończone */}
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>
  );
};

// Eksport komponentu pojedynczego zadania
export default Task;
