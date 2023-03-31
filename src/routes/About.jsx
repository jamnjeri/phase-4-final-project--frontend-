import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="about-container">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.mission}</p>
      <p>{data.thankyou}</p>
      <Footer/>
    </div>
  );
}

export default About;
