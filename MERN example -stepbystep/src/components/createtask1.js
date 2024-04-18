import React, { useState } from 'react';
// import axios from "axios";
import Navbar from './navbar';

export default function CreateTask() {
  const [activity, setOnChangeActivity] = useState(``);

  return (
    <div>
      <Navbar />

      <h3>Create New Task</h3>
      <form>
        <div className="form-group">
          <label>New Task: </label>
          <input
            type="text"
            required
            className="form-control"
            value={activity}
            onChange={(e) => setOnChangeActivity(e.target.value)}
          />
        </div>
        <br></br>
        <div className="form-group">
          <input
            type="submit"
            value="Create Activity Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
