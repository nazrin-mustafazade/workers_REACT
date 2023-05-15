import React, { useContext, useState } from 'react';
import { WorkerContext } from '../components/WorkerContext';

const WorkerForm = () => {
  const { createWorker } = useContext(WorkerContext);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    createWorker({ name, salary, position });
    setName('');
    setSalary('');
    setPosition('');
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm}>{showForm ? "Cancel" : "Add Worker"}</button>
      {showForm && (
        <form onSubmit={Submit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit">Create Worker</button>
      </form>
      )}
    </div>
  );
};

export default WorkerForm;
