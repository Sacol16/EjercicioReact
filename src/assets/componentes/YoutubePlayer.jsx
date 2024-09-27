import React from 'react';

const YouTubePlayer = ({ url }) => {
  return (
    <div>
      <iframe
        width="640"
        height="390"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubePlayer;
