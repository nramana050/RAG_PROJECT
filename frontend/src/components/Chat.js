import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://your-backend-url/retrieve', { query });
    const documents = res.data;
    const genRes = await axios.post('http://your-backend-url/generate', { documents, query });
    setResponse(genRes.data.response);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default Chat;
