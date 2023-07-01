import React, { useState } from 'react';
import './courses.css'
const CourseOutlinePage = () => {
  const courses = [
    {
      name: 'Maths',
      icon: '🧮',
      topics: [
        {
          name: 'Algebra',
          subtopics: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
        },
        {
          name: 'Geometry',
          subtopics: ['Triangles', 'Circles', 'Polygons'],
        },
        {
          name: 'Trigonometry',
          subtopics: ['Sine, Cosine, Tangent', 'Trigonometric Identities'],
        },
        {
          name: 'Calculus',
          subtopics: ['Limits', 'Derivatives', 'Integrals'],
        },
        {
          name: 'Statistics',
          subtopics: ['Probability', 'Sampling', 'Hypothesis Testing'],
        },
      ],
    },
    // Repeat the same structure for other courses
    // ...
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handleCourseChange = (event) => {
    const selectedCourseName = event.target.value;
    const selectedCourse = courses.find((course) => course.name === selectedCourseName);
    setSelectedCourse(selectedCourse);
  };

  return (
    <div className="course-outline-page">
      <h2>Course Outline</h2>
      <select value={selectedCourse.name} onChange={handleCourseChange}>
        {courses.map((course, index) => (
          <option key={index} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      <div className="topics-list">
        <h3>Topics:</h3>
        <ul>
          {selectedCourse.topics.map((topic, index) => (
            <li key={index}>
              {topic.name}
              <ul>
                {topic.subtopics.map((subtopic, subtopicIndex) => (
                  <li key={subtopicIndex}>{subtopic}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOutlinePage;
