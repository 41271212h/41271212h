import React, { useState } from 'react';

function GreetingApp() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('May I know your basic information?');
  

    const handleSubmit = () => {
        if (!name) {
          setMessage('What is your name?');
        } else if (!age) {
          setMessage('How old are you?');
        } else {
          // Custom greetings based on age ranges
          let greeting = '';
          if (age >= 0 && age <= 13) {
            greeting = `Hello, ${name}!`;
          } else if (age >= 14 && age <= 20) {
            greeting = `Good day, ${name}!`;
          } else if (age >= 21 && age <= 40) {
            greeting = `Nice day, ${name}!`;
          } else if (age >= 41 && age <= 60) {
            greeting = `How do you do, ${name}?`;
          } else if (age > 60) {
            greeting = `How a wonderful day, ${name}!`;
          } else {
            greeting = `Please enter a valid age, ${name}.`;
          }
          setMessage(greeting);
        }
      };
    
      return (
        <div>
          <h1>{message}</h1> {/* Dynamic message display */}
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>Enter</button> {/* Enter button */}
        </div>
      );
    }
    
    export default GreetingApp;