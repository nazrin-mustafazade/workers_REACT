import React from 'react';
import WorkerForm from './components/WorkerForm';
import WorkerList from './components/WorkerList';
import WorkerContextProvider from './components/WorkerContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <WorkerContextProvider>
        <WorkerForm/>
        <WorkerList />
      </WorkerContextProvider>
    </div>
  );
}

export default App;
