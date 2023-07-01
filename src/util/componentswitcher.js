import React, { useState, useEffect } from 'react';

const ComponentSwitcher = () => {
  const [currentComponent, setCurrentComponent] = useState(<FirstComponent />);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentComponent(<SecondComponent />);
    }, 5000); // Change to the desired delay in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return <div>{currentComponent}</div>;
};

const FirstComponent = () => {
  return <h1>First Component</h1>;
};

const SecondComponent = () => {
  return <h1>Second Component</h1>;
};

export default ComponentSwitcher;
