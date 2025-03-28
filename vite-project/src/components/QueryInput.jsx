import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitQuery, setQueryResult, setQueryError } from '../Redux/querySlice';

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!query) return;
    dispatch(submitQuery(query));

    setTimeout(() => {
      if (Math.random() > 0.1) {
        dispatch(setQueryResult({
          query,
          data: [
            { month: 'Jan', value: Math.floor(Math.random() * 100) },
            { month: 'Feb', value: Math.floor(Math.random() * 100) },
            { month: 'Mar', value: Math.floor(Math.random() * 100) },
          ],
        }));
      } else {
        dispatch(setQueryError('Failed to fetch data. Try again!'));
      }
    }, 1500);
  };

  return (
    <div className="p-4 border-b">
      <input
        type="text"
        className="p-2 border rounded w-3/4"
        placeholder="Ask a question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit} className="ml-2 bg-blue-500 text-white p-2 rounded">Submit</button>
    </div>
  );
};

export default QueryInput;
