import React, { useState } from "react";
import AddTaskForm from "../../components/AddTaskForm";
import "./TaskPage.css";

const TaskPage = () => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  return (
    <div className="task-page">
      <div className="task-header">
        <h1>Tasks</h1>
        <button
          className="add-task-btn"
          onClick={() => setIsTaskFormOpen(true)}
        >
          Add Task
        </button>
      </div>

      {isTaskFormOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddTaskForm onClose={() => setIsTaskFormOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPage;
