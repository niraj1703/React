import React from 'react';
import { useSelector } from 'react-redux';

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="p-4 border-b">
      <h2 className="font-bold">Query History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;