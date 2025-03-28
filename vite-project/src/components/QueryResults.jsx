import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const QueryResults = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!results) return <p>No results yet.</p>;

  return (
    <div className="p-4">
      <h2 className="font-bold">Query Results</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={results.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default QueryResults;