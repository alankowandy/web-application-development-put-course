// App.js
import React, { useState } from 'react';
import ToDoList from './ToDoList';
import NewTask from './NewTask';
import './App.css';

// Główny komponent aplikacji
const App = () => {
  // Stan przechowujący listę zadań
  const [tasks, setTasks] = useState([]);
  // Stan określający, czy pokazać ukończone zadania
  const [showCompleted, setShowCompleted] = useState(true);

  // Obsługa zmiany statusu ukończenia zadania
  const handleToggleCompleted = (taskId) => {
    // Aktualizacja stanu na podstawie identyfikatora zadania
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  // Obsługa dodawania nowego zadania
  const handleAddTask = (taskText) => {
    // Utworzenie nowego zadania
    const newTask = {
      id: new Date().getTime(),
      text: taskText,
      completed: false,
    };

    // Aktualizacja stanu dodając nowe zadanie
    setTasks([...tasks, newTask]);
  };

  // Obsługa usuwania wszystkich zadań
  const handleClearAllTasks = () => {
    // Wyczyszczenie listy zadań
    setTasks([]);
  };

  // Renderowanie głównego komponentu
  return (
    <div>
      <h1>To-Do List</h1>
      {/* Komponent do dodawania nowego zadania */}
      <NewTask onAddTask={handleAddTask} />
      {/* Komponent wyświetlający listę zadań */}
      <ToDoList
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        showCompleted={showCompleted}
      />
      <div>
        {/* Checkbox do kontrolowania widoczności ukończonych zadań */}
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
          Show Completed
        </label>
      </div>
      <div>
        {/* Przycisk do usuwania wszystkich zadań */}
        <button onClick={handleClearAllTasks}>Clear All Tasks</button>
      </div>
    </div>
  );
};

// Eksport głównego komponentu
export default App;
