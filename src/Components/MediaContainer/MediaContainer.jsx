import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaTitle from './MediaTitle';
import ImageContainer from '../ImageContainer/ImageContainer'
import VideoContainer from '../VideoContainer/VideoContainer'
import MediaCaption from './MediaCaption';

export default function MediaContainer() {
  const [mediaType, setMediaType] = useState('');
  const [media, setMedia] = useState('')
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaCaption, setMediaCaption] = useState('');
  const [date, setDate] = useState('')
  console.log("connected");

  const handleSubmit = e => {
    e.preventDefault();
    setDate(document.querySelector('#date').value);
  }

  useEffect((handleSubmit) => {
    console.log(date);
    console.log("inside effect hook");
  }, [date])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WysXP93cjIhjta8of3yl1NSC8hX3rUD3qaQMMadd&date=${date}`)
      .then(result => {
        setMedia(result.data);
        setMediaType(result.data.media_type);
        setMediaTitle(result.data.title);
        setMediaCaption(result.data.explanation);
        console.log(result);
      })
  }, [date]);
  return (
    <div className="mediaContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input type="date" id="date" name="date" />
        <input type="submit" />
      </form>
      <MediaTitle title={mediaTitle} />
      {mediaType === 'video' ? <VideoContainer video={media} /> : <ImageContainer image={media} />}
      <MediaCaption caption={mediaCaption} />
    </div>
  )
}