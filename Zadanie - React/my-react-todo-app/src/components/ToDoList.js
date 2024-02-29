// ToDoList.js
import React from 'react';
import Task from './Task';

// Komponent wyświetlający listę zadań
const ToDoList = ({ tasks, onToggleCompleted, showCompleted }) => {
  // Filtracja zadań w zależności od opcji pokazywania ukończonych
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  // Renderowanie komponentu
  return (
    <div>
      {/* Wyświetlanie komunikatu, jeśli nie ma zadań do wyświetlenia */}
      {filteredTasks.length === 0 ? (
        <p>No tasks to display.</p>
      ) : (
        // Wyświetlanie listy zadań
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
              {/* Renderowanie komponentu pojedynczego zadania */}
              <Task
                id={task.id}
                text={task.text}
                completed={task.completed}
                onToggleCompleted={onToggleCompleted}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Eksport komponentu wyświetlającego listę zadań
export default ToDoList;
