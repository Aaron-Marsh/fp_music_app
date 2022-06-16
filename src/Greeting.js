// This was just an example to go though

import React, { useState } from 'react';

const Greeting = () => {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');


  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setUsername(input)
    setInput('')
  }

  return (
    <div>
      <h3 style={{ marginBottom: "30px" }}>Hello, {username ? username : 'friend'}</h3>

      <form onSubmit={onFormSubmit}>
        <label
          style={{ marginRight: "30px" }}
          htmlFor="username">Username</label>
        <input
          type="text" name="username" id="username"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Greeting;
