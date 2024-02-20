// Body.js

import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Body = () => {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate=useNavigate();
  const queryString = location.search;
  const queryParams = new URLSearchParams(queryString);
  const field = queryParams.get('field');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/question/${field}`)
      .then(response => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching questions", error);
        setLoading(false);
      });
  }, []);

  const checkAnswer = (correct) => {
    if (answer === correct) {
      setIsCorrect(true);
      setCount(count + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const nextQuestion = () => {
    setAnswer(null);
    setIsCorrect(null);
    setCurrentQuestionIndex(current => current + 1);
  };

  const NavigateHome=()=>{
    navigate('/')
  }

  return (
    <div className="bg-gradient-to-r from-indigo-800 to-purple-600 min-h-96 mt-20 flex items-center justify-center">
      <div className="mx-auto p-4 bg-gradient-to-r from-indigo-800 to-purple-600 rounded-md shadow-lg w-1/2">
        {loading ? (
          <p className="text-center text-white">Loading...</p>
        ) : (
          <>
            {currentQuestionIndex < questions.length && isCorrect === null ? (
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question_text}</h1>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-indigo-800" onClick={() => setAnswer(questions[currentQuestionIndex].option1)}>{questions[currentQuestionIndex].option1}</button>
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-indigo-800" onClick={() => setAnswer(questions[currentQuestionIndex].option2)}>{questions[currentQuestionIndex].option2}</button>
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-indigo-800" onClick={() => setAnswer(questions[currentQuestionIndex].option3)}>{questions[currentQuestionIndex].option3}</button>
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-indigo-800" onClick={() => setAnswer(questions[currentQuestionIndex].option4)}>{questions[currentQuestionIndex].option4}</button>
                </div>
                <button className="bg-green-500 text-white p-2 mt-4 rounded hover:bg-black" onClick={() => checkAnswer(questions[currentQuestionIndex].correct_option)}>SUBMIT</button>
                <h3 className="text-xl mt-4 text-white">Your score is {count}/{questions.length}</h3>
              </div>
            ) : (
              <div className="text-center">
                {isCorrect !== null && (
                  <>
                    {isCorrect ? (
                      <>
                        <h1 className="text-2xl text-green-500 font-bold mb-4">You are correct!</h1>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-black" onClick={nextQuestion}>Next Question</button>
                      </>
                    ) : (
                      <>
                        <h1 className="text-2xl text-red-500 font-bold mb-4">Sorry, your answer is incorrect.</h1>
                        <button className="bg-blue-500 text-white p-2 rounded hover:bg-black" onClick={nextQuestion}>Next Question</button>
                      </>
                    )}
                  </>
                )}
                {currentQuestionIndex === questions.length && (
                  <>
                    <h1 className="text-2xl font-bold mb-4">Your total score is {count}/{questions.length}</h1>
                    <h2 className="text-xl font-bold text-white">The End</h2>
                    <button className="bg-blue-500 mt-4 text-white p-2 rounded hover:bg-black" onClick={NavigateHome}>Return Home</button>
                  </>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
