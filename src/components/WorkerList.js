import React, { useContext } from 'react';
import { WorkerContext } from '../components/WorkerContext';

const WorkerList = () => {
  const { workers } = useContext(WorkerContext);

  return (
    <div>
      <h2>Worker List</h2>
      <ul>
        {workers.map((worker) => (
          <li key={worker.id}>
            <p>
              Name: {worker.name}
            </p>
            <p>
              Salary: {worker.salary}
            </p>
            <p>
              Position: {worker.position}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkerList;
