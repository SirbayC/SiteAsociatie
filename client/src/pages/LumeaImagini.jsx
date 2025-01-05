import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styling/lumeaimagini.scss";
import Gallery from "react-photo-gallery";
import { p20152022 } from "../resources/pics/2015-2022/photos";
import { p2023 } from "../resources/pics/2023/photos";

const LumeaImagini = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  const handleButtonClick = (year) => {
    navigate(`?year=${year}`);
    console.log(`Button ${year} clicked`);
  };
  

  const query = new URLSearchParams(location.search);
  const year = query.get('year') || '2015-2022';

  useEffect(() => {
    setLoading(true);
    let photos;
    switch (year) {
      case '2024':
        photos = p2023;
        break;
      case '2023':
        photos = p2023;
        break;
      case '2015-2022':
      default:
        photos = p20152022;
        break;
    }
    setTimeout(() => {
      setContent(photos);
      setLoading(false);
    }, 1000); // Simulate loading delay
  }, [year]);
  const BasicRows = () => <Gallery photos={content} />;
  return (
    <div className="lumeamea">
      <div className="centered">
        <nav className="second-navbar">
          <button className={year === '2024' ? 'clicked' : ''} onClick={() => handleButtonClick('2024')}>2024</button>
          <button className={year === '2023' ? 'clicked' : ''} onClick={() => handleButtonClick('2023')}>2023</button>
          <button className={year === '2015-2022' ? 'clicked' : ''} onClick={() => handleButtonClick('2015-2022')}>2015-2022</button>
        </nav>
        {loading ? (
          <div className="loading"></div>
        ) : (
          <BasicRows/>
        )}
      </div>
    </div>
  );
}

export default LumeaImagini;