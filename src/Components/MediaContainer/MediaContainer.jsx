import React, {useState, useEffect} from 'react';
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
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WysXP93cjIhjta8of3yl1NSC8hX3rUD3qaQMMadd`)
      .then(result => {
        setMedia(result.data);
        setMediaType(result.data.media_type);
        setMediaTitle(result.data.title);
        setMediaCaption(result.data.explanation);
      })
  }, []);
  return (
    <div className="mediaContainer">
      <MediaTitle title={mediaTitle}/>
      {mediaType === 'video' ? <VideoContainer video={media} /> : <ImageContainer image={media}/>}
      <MediaCaption caption={mediaCaption}/>
    </div>
  )
}