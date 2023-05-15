import React, { createContext, useState } from 'react';

export const WorkerContext = createContext();

const WorkerContextProvider = ({ children }) => {
  const [workers, setWorkers] = useState([]);

  const createWorker = (newWorker) => {
    setWorkers([...workers, newWorker]);
  };

  return (
    <WorkerContext.Provider value={{ workers, createWorker}}>
      {children}
    </WorkerContext.Provider>
  );
};

export default WorkerContextProvider;
