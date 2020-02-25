import React from 'react'

export default function VideoContainer(props) {
  const { video } = props;
  return (
    <iframe width="420" height="315"
      src={video.url}>
    </iframe>
  )
}