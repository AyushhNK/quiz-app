// Home.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('');

  const handleFieldSelection = (field) => {
    setSelectedField(field);
  };

  const startQuiz = () => {
    if (selectedField) {
      navigate(`/quiz?field=${selectedField}`);
    } else {
      alert('Please select a field before starting the quiz.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-purple-600 min-h-96 mt-20 flex items-center justify-center">
      <div className="mx-auto p-4 bg-gradient-to-r from-orange-600 to-blue-800 rounded-md shadow-lg w-1/2 text-white">
        <h1 className="text-3xl font-bold mb-4">Choose Your Quiz Field</h1>
        <div className="flex items-center justify-center mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="quizField"
              value="gk"
              onChange={() => handleFieldSelection('gk')}
            />
            <span className="ml-2">General Knowledge</span>
          </label>
          <label>
            <input
              type="radio"
              name="quizField"
              value="science"
              onChange={() => handleFieldSelection('science')}
            />
            <span className="ml-2">Science</span>
          </label>
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-black"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
