// src/App.jsx

import React from 'react';
import Quiz from './components/Quiz'; 

function App() {
  const quizData = {
    question: "Для передачи данных от родительского компонента к дочернему в React используются:",
    options: ["State (Состояние)", "Hooks (Хуки)", "Context (Контекст)", "Props (Свойства)"],
    correctAnswer: "Props (Свойства)" 
  };
  
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Викторина (Контр.раб№1)</h1>
      
      <Quiz 
        question={quizData.question}
        options={quizData.options}
        correctAnswer={quizData.correctAnswer}
      />
    </div>
  );
}

export default App;