import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Body = () => {
  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/question')
      .then(response => setQuestions(response.data))
      .catch(error => console.error("Error fetching questions", error));
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

  return (
    <div className="max-w-screen-md mx-auto mt-8 p-4 bg-gray-100 rounded-md">
      {currentQuestionIndex < questions.length && isCorrect === null ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question_text}</h1>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setAnswer(questions[currentQuestionIndex].option1)}>{questions[currentQuestionIndex].option1}</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setAnswer(questions[currentQuestionIndex].option2)}>{questions[currentQuestionIndex].option2}</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setAnswer(questions[currentQuestionIndex].option3)}>{questions[currentQuestionIndex].option3}</button>
            <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setAnswer(questions[currentQuestionIndex].option4)}>{questions[currentQuestionIndex].option4}</button>
          </div>
          <button className="bg-green-500 text-white p-2 mt-4 rounded" onClick={() => checkAnswer(questions[currentQuestionIndex].correct_option)}>SUBMIT</button>
          <h3 className="text-xl mt-4">Your score is {count}/{questions.length}</h3>
        </div>
      ) : (
        <div className="text-center">
          {isCorrect !== null && (
            <>
              {isCorrect ? (
                <>
                  <h1 className="text-2xl text-green-500 font-bold mb-4">You are correct!</h1>
                  <button className="bg-blue-500 text-white p-2 rounded" onClick={nextQuestion}>Next Question</button>
                </>
              ) : (
                <>
                  <h1 className="text-2xl text-red-500 font-bold mb-4">Sorry, your answer is incorrect.</h1>
                  <button className="bg-blue-500 text-white p-2 rounded" onClick={nextQuestion}>Next Question</button>
                </>
              )}
            </>
          )}
          {currentQuestionIndex === questions.length && (
            <>
              <h1 className="text-2xl font-bold mb-4">Your total score is {count}/{questions.length}</h1>
              <h2 className="text-xl font-bold">The End</h2>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
