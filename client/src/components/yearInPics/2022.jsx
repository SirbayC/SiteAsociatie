import React, { useState, useEffect } from "react";
import Gallery from "react-photo-gallery";

const Gallery2015_2022 = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/pics/2015-2022-manifest.json')
      .then(res => res.json())
      .then(manifest => {
        const photos = manifest.images.map(img => ({
          src: `/pics/${img.id}`,
          width: img.width,
          height: img.height,
        }));
        setPhotos(photos);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading manifest:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  return <Gallery photos={photos} />;
};

export default Gallery2015_2022;