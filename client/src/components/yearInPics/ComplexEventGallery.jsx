import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';

const ComplexEventGallery = ({ title, subevents }) => {
  const [subeventsData, setSubeventsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllSubevents = async () => {
      try {
        const data = await Promise.all(
          subevents.map(subevent =>
            fetch(`/pics/${subevent.id}`)
              .then(res => {
                if (!res.ok) throw new Error(`Failed to load ${subevent.id}`);
                return res.json();
              })
              .then(manifest => ({
                ...subevent,
                ...manifest,
              }))
          )
        );
        setSubeventsData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error loading subevents:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllSubevents();
  }, [subevents]);

  if (loading) return <div className="event"><div className="spinner">Loading...</div></div>;
  if (error) return <div className="event"><div className="error">Error: {error}</div></div>;

  return (
    <div className="event">
      <div className="name">{title}</div>
      {subeventsData.map((subevent, index) => {
        const photos = subevent.images.map(img => ({
          src: `/pics/${img.id}`,
          width: img.width,
          height: img.height,
        }));

        return (
          <div key={index}>
            <div className="subName">{subevent.title}</div>
            {subevent.description && <div className="subDesc">{subevent.description}</div>}
            <Gallery photos={photos} />
            {index < subeventsData.length - 1 && <br />}
          </div>
        );
      })}
    </div>
  );
};

export default ComplexEventGallery;
