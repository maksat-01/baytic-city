import React from 'react';
import video from "../assets/Images/video.webm"
const Video = () => {
    return (
        <div className='video flex  ml-[-50%] 4xl:ml-[-10% ] '>
            <video  src={video} autoPlay loop muted className="image min-w-full mx-40 min-h-full 8xl:w-[1300px] h-[1000px]   7xl:w-[1300px] h-[800px] 6xl:w-[1200px] h-[800px]  5xl:w-[400px] h-[500px] 4xl:w-[600px] h-[500px] " />
            <div className="video-border border-r-solid border-r-[3px] h-[800px] border-r-black mr-[200px]"></div>
        <div className='video ml-[-20%] 4xl:ml-[-10% ]'>
            <img  src={reg} className="image 8xl:w-[1300px] h-[1000px]   7xl:w-[1300px] h-[800px] 6xl:w-[1200px] h-[800px]  5xl:w-[800px] h-[800px] 4xl:w-[800px] h-[600px]     " alt=""/>
        </div>
    );
};

export default Video;