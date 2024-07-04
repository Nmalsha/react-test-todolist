import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim() &&
      description.trim() &&
      day &&
      month &&
      year &&
      priority
    ) {
      const endDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;
      addTask({ title, description, endDate, priority });
      setTitle("");
      setDescription("");
      setDay("");
      setMonth("");
      setYear("");
      setPriority("");
    }
  };

  const getDays = (month, year) => new Date(year, month, 0).getDate();

  const dayOptions = Array.from(
    { length: getDays(month || 1, year || new Date().getFullYear()) },
    (_, i) => i + 1
  );
  const monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  const yearOptions = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  return (
    <div className="container " style={{ width: "80%" }}>
      <h2>Nouvelle Tache</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"></label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="row mb-3">
          <div className="col-2 rounded-3">
            <label htmlFor="datedefin" className="form-label">
              Date de fin :
            </label>
            <label htmlFor="day" className="form-label"></label>
            <select
              className="form-select"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="">Day</option>
              {dayOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2 mb-3">
            <label htmlFor="month" className="form-label"></label>
            <select
              className="form-select"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Month</option>
              {monthOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="year" className="form-label"></label>
            <select
              className="form-select"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Year</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-2">
          <label htmlFor="priority" className="form-label">
            Selectioner la Priority
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="Bas">Bas</option>
            <option value="Moyen">Moyen</option>
            <option value="Haut">Haut</option>
          </select>
        </div>
        <button type="submit" className="btn btn-secondary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
