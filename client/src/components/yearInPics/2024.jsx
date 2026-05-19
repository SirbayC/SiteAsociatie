import React, { useState, useEffect } from 'react';
import "../../styling/lumeaimagini.scss";
import EventGallery from './customGalleries/EventGallery';
import ComplexEventGallery from './customGalleries/ComplexEventGallery';

const Evenimente = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/pics/2024-index.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load 2024 index');
        return res.json();
      })
      .then(index => {
        setEvents(index.events || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading events:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="evenimente"><div>Loading events...</div></div>;
  if (error) return <div className="evenimente"><div>Error: {error}</div></div>;

  return (
    <div className="evenimente">
      {events.map(event =>
        event.type === 'complex' ? (
          <ComplexEventGallery key={event.id} title={event.title} subevents={event.subevents} />
        ) : (
          <EventGallery key={event.id} manifestPath={`/pics/${event.id}`} />
        )
      )}
    </div>
  );
};

export default Evenimente;