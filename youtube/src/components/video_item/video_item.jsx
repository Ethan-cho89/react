import React from 'react';

const Video = (props) => {
  return <li>{props.video.snippet.title}</li>;
};

export default Video;
