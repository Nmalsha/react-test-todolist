import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
  <div className="container " style={{ width: "80%" }}>
    <ul className="list-group">
      {tasks.map((taskObj, index) => (
        <li
          key={index}
          className={`list-group-item ${
            taskObj.completed ? "list-group-item-success" : ""
          }`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id={`task-checkbox-${index}`}
                checked={taskObj.completed}
                onChange={() => toggleTask(index)}
              />
              <label
                className="form-check-label"
                htmlFor={`task-checkbox-${index}`}
              >
                <h5
                  className={`mb-1 ${
                    taskObj.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  {taskObj.title}
                </h5>
                <p
                  className={`mb-1 ${
                    taskObj.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  {taskObj.description}
                </p>
                <p
                  className={`mb-1 ${
                    taskObj.completed ? "text-decoration-line-through" : ""
                  }`}
                >
                  Priority : {taskObj.priority}
                </p>
                <small>Date de fin : {taskObj.endDate}</small>
              </label>
            </div>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => deleteTask(index)}
            >
              Supprimer
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TaskList;
