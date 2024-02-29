// NewTask.js
import React, { useState } from 'react';

// Komponent do dodawania nowego zadania
const NewTask = ({ onAddTask }) => {
  // Stan przechowujący treść nowego zadania
  const [taskText, setTaskText] = useState('');

  // Obsługa zmiany treści nowego zadania
  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  // Obsługa dodawania nowego zadania
  const handleAddTask = () => {
    // Sprawdzenie, czy treść zadania nie jest pusta
    if (taskText.trim() === '') {
      return;
    }

    // Przekazanie treści nowego zadania do funkcji nadrzędnej
    onAddTask(taskText);
    // Wyczyszczenie pola tekstowego po dodaniu zadania
    setTaskText('');
  };

  // Renderowanie komponentu
  return (
    <div>
      {/* Pole tekstowe do wprowadzania treści nowego zadania */}
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      {/* Przycisk do dodawania nowego zadania */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

// Eksport komponentu do dodawania nowego zadania
export default NewTask;
