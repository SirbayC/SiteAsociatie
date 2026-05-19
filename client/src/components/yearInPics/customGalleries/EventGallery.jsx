import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';

const EventGallery = ({ manifestPath }) => {
  const [manifest, setManifest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(manifestPath)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load ${manifestPath}`);
        return res.json();
      })
      .then(data => {
        setManifest(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error loading manifest from ${manifestPath}:`, err);
        setError(err.message);
        setLoading(false);
      });
  }, [manifestPath]);

  if (loading) return <div className="event"><div className="spinner">Loading...</div></div>;
  if (error) return <div className="event"><div className="error">Error: {error}</div></div>;
  if (!manifest) return null;

  const photos = manifest.images.map(img => ({
    src: `/pics/${img.id}`,
    width: img.width,
    height: img.height,
  }));

  return (
    <div className="event">
      <div className="name">{manifest.title}</div>
      {manifest.description && <div className="desc">{manifest.description}</div>}
      <Gallery photos={photos} />
    </div>
  );
};

export default EventGallery;