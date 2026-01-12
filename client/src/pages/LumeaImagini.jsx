import { Suspense, lazy } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styling/lumeaimagini.scss";
import LoadingSpinner from '../components/Spinner.jsx';

const Gallery20152022 = lazy(() => import("../components/yearInPics/Gallery20152022.jsx"));
const Gallery2023 = lazy(() => import("../components/yearInPics/Gallery2023"));
const Evenimente = lazy(() => import("../components/yearInPics/Evenimente.jsx"));
const Evenimente2025 = lazy(() => import("../components/yearInPics/Evenimente2025.jsx"));

const LumeaImagini = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const year = query.get('year') || '2025'; 

  const handleButtonClick = (newYear) => {
    navigate(`?year=${newYear}`);
  };

  const getComponent = () => {
    switch (year) {
      case '2025': return <Evenimente2025 />;
      case '2024': return <Evenimente />;
      case '2023': return <Gallery2023 />;
      case '2015-2022': return <Gallery20152022 />;
      default: return <Evenimente2025 />;
    }
  };

  return (
    <div className="lumeamea">
      <div className="centered">
        <nav className="second-navbar">
          <button 
            className={year === '2025' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2025')}
          >
            2025
          </button>
          
          <button 
            className={year === '2024' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2024')}
          >
            2024
          </button>

          <button 
            className={year === '2023' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2023')}
          >
            2023
          </button>
          
          <button 
            className={year === '2015-2022' ? 'clicked' : ''} 
            onClick={() => handleButtonClick('2015-2022')}
          >
            2015-2022
          </button>
        </nav>

        <div className="content-area" style={{ minHeight: '400px' }}>
           <Suspense fallback={<LoadingSpinner />}>
              {getComponent()}
           </Suspense>
        </div>

      </div>
    </div>
  );
}

export default LumeaImagini;