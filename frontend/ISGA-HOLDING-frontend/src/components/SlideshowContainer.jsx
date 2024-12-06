import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import Dots from './Dots';

export default function SlideshowContainer({ posts }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % posts.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [posts.length]);

  return (
    <div className="slideshow-container" style={containerStyle}>
      {posts.map((post, index) => (
        <Slide
          key={index}
          post={post}
          isVisible={current === index}
        />
      ))}
      <Dots
        total={posts.length}
        current={current}
        onClick={setCurrent}
      />
    </div>
  );
}

const containerStyle = {
  position: 'relative',
  maxWidth: '650px',
  margin: 'auto',
};

