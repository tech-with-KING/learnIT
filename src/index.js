import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './components/landingpage/LandingPage';
import QuizPage from './components/startquizpage/startpage';
import StartQuizInstructions from './components/instruction/instruction';
import CourseOutlinePage from './components/courses/courses';
import LandingPage from './components/landingpage/LandingPage';



ReactDOM.render(
  <React.StrictMode >
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);



