import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YouTube_API } from '../utlis/constants';
import VideoCard from './VideoCard';


const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YouTube_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map((item) => (
      <Link to = {"/watch?v=" +item.id}>
        <VideoCard key={item.id} info = {item}/>
      </Link>
      ))}
    </div>
  )
}

export default VideoContainer