import React, { useState } from 'react';
import './circle.css';

const Circle = () => {
  const [circles, setCircles] = useState([...Array(50).keys()].map((i) => ({ number: i + 1, colored: false })));

  const handleClick = (index) => {
    const newCircles = [...circles];
    newCircles[index].colored = !newCircles[index].colored;
    setCircles(newCircles);
  }

  return (
    <div className="circle-container">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`circle ${circle.colored ? 'colored' : ''}`}
          onClick={() => handleClick(index)}
        >
          {circle.number}
        </div>
      ))}   
    </div>
  );
}

export default Circle;
