import React, { useState } from 'react';

function GreetingApp() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('May I know your basic information?');

  // Function to handle form submission
  const handleSubmit = () => {
    if (!name) {
      setMessage('What is your name?');
    } else if (!age) {
      setMessage('How old are you?');
    } else {
      let greeting = '';
      if (age >= 0 && age <= 13) {
        greeting = `Hello, ${name}!`;
      } else if (age >= 14 && age <= 20) {
        greeting = `Good day, ${name}!`;
      } else if (age >= 21 && age <= 40) {
        greeting = `Nice day, ${name}!`;
      } else if (age >= 41 && age <= 60) {
        greeting = `How do you do, ${name}!`;
      } else if (age >= 61 && age <= 80) {
        greeting = `How a great day, ${name}!`;
      } else if (age >= 81 && age <= 100) {
        greeting = `Glad to see you, ${name}!`;
      } else {
        greeting = `Please enter a valid age, ${name}.`;
      }
      setMessage(greeting);
    }
  };

  // Function to clear the inputs and reset the message
  const handleClear = () => {
    setName('');
    setAge('');
    setMessage('May I know your basic information?');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.message}>{message}</h1>
      <input
        style={styles.input}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        style={styles.input}
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button style={styles.button} onClick={handleSubmit}>Enter</button>
      <button style={styles.clearButton} onClick={handleClear}>Clear</button>
    </div>
  );
}

// Inline styles for centering and enlarging text
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  message: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  input: {
    fontSize: '1.5rem',
    padding: '10px',
    margin: '10px',
    width: '300px',
  },
  button: {
    fontSize: '1.5rem',
    padding: '10px 20px',
    cursor: 'pointer',
    marginRight: '10px', // Space between buttons
  },
  clearButton: {
    fontSize: '1.5rem',
    padding: '10px 20px',
    cursor: 'pointer',
    marginRight: '10px', // Space between buttons
  },
};

export default GreetingApp;
