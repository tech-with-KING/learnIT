import React from 'react';
import './instruction.css'
const StartQuizInstructions = () => {
  const courses = [
    {
      name: 'Maths',
      icon: '🧮',
      topics: [
        'Algebra',
        'Geometry',
        'Trigonometry',
        'Calculus',
        'Statistics',
        'Probability',
      ],
    },
    {
      name: 'Physics',
      icon: '⚛️',
      topics: [
        'Mechanics',
        'Thermodynamics',
        'Electromagnetism',
        'Optics',
        'Quantum Mechanics',
      ],
    },
    {
      name: 'Chemistry',
      icon: '🧪',
      topics: [
        'Atomic Structure',
        'Chemical Reactions',
        'Periodic Table',
        'Organic Chemistry',
        'Physical Chemistry',
      ],
    },
    {
      name: 'Biology',
      icon: '🧬',
      topics: [
        'Cell Biology',
        'Genetics',
        'Ecology',
        'Evolution',
        'Anatomy',
        'Physiology',
      ],
    },
    {
      name: 'Computer Science',
      icon: '💻',
      topics: [
        'Programming',
        'Data Structures',
        'Algorithms',
        'Databases',
        'Artificial Intelligence',
      ],
    },
  ];

  return (
    <div className="start-quiz-instructions">
      <h2>Quiz Instructions</h2>
      <p>
        Welcome to the quiz! Please read the following instructions carefully before starting:
      </p>
      <ol>
        <li>Select the correct answer for each question.</li>
        <li>You can only choose one answer per question.</li>
        <li>Click the "Next" button to move to the next question.</li>
        <li>You can go back to the previous question by clicking the "Previous" button.</li>
        <li>Review your answers before submitting the quiz.</li>
        <li>Click the "Submit" button to finish the quiz and see your results.</li>
      </ol>
      <h3>Select a topic to start:</h3>
      <div className="course-topics">
        {courses.map((course, index) => (
          <div className="course-topic" key={index}>
            <div className="course-icon">{course.icon}</div>
            <div className="course-name">{course.name}</div>
            <ul>
              {course.topics.map((topic, topicIndex) => (
                <li key={topicIndex}>
                  <a href={`#${topic}`}>{topic}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="start-quiz-button">Start Quiz</button>
    </div>
  );
};

export default StartQuizInstructions;
