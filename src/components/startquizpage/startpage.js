import React from 'react';
import './startpage.css'
const QuizPage = () => {
  const courses = [
    { name: 'Maths', icon: '🧮' },
    { name: 'Physics', icon: '⚛️' },
    { name: 'Chemistry', icon: '🧪' },
    { name: 'Biology', icon: '🧬' },
    { name: 'Computer Science', icon: '💻' },
  ];

  return (
    <div className="quiz-page">
      <div className="course-tiles">
        {courses.map((course, index) => (
          <div className="course-tile" key={index}>
            <div className="course-icon">{course.icon}</div>
            <div className="course-name">{course.name}</div>
          </div>
        ))}
      </div>
      <button className="take-quiz-button">Take Quiz</button>
    </div>
  );
};

export default QuizPage;
