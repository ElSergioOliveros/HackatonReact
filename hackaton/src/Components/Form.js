import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()==="" || name.length===0 || email.trim()==="" || email.length===0 || message.trim()==="" || message.length===0){
        alert("Empty fields");
    }
    else{
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;