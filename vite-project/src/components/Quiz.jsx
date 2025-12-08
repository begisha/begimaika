// src/components/Quiz.jsx

import React, { useState } from 'react';

export default function Quiz({ question, options, correctAnswer }) {
  const [isCorrect, setIsCorrect] = useState(false);
  
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (isAnswered) {
      return;
    }

    setIsAnswered(true);

    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
    } 
  };
  
  const getButtonStyle = (option) => {
      if (!isAnswered) {
          return { padding: '10px', margin: '5px', border: '1px solid #ccc', cursor: 'pointer' };
      }
      
      if (option === correctAnswer) {
          return { padding: '10px', margin: '5px', border: '2px solid green', backgroundColor: '#e6ffe6', cursor: 'default' };
      }
      
      return { padding: '10px', margin: '5px', border: '1px solid #ccc', cursor: 'default', opacity: 0.5 };
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', border: '1px solid #eee', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      
      <h3 style={{ marginBottom: '20px', color: '#333' }}>{question}</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={getButtonStyle(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isCorrect && isAnswered && (
        <div style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            textAlign: 'center',
            fontWeight: 'bold',
            borderRadius: '4px'
        }}>
          ПРАВИЛЬНО!
        </div>
      )}
      
      {!isCorrect && isAnswered && (
          <div style={{ 
            marginTop: '20px', 
            padding: '10px', 
            backgroundColor: '#F44336', 
            color: 'white', 
            textAlign: 'center',
            fontWeight: 'bold',
            borderRadius: '4px'
        }}>
          НЕПРАВИЛЬНО! 
        </div>
      )}
    </div>
  );
}