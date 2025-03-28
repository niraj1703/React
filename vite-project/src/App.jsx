import React from 'react';
import QueryInput from  "./components/QueryInput"
import QueryHistory from './components/QueryHistory';
import QueryResults from './components/QueryResults';

const App = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <QueryInput />
      <QueryHistory /> 
      <QueryResults />
    </div>
  );
};

export default App;