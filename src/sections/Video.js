import React from 'react';
import reg from '../assets/Images/Rectangle 80.png'

const Video = () => {
    return (
        <div className='video flex  ml-[-20%] 4xl:ml-[-10% ] '>
            <img  src={reg} className="image mx-40 min-h-full 8xl:w-[1300px] h-[1000px]   7xl:w-[1300px] h-[800px] 6xl:w-[1200px] h-[800px]  5xl:w-[800px] h-[800px] 4xl:w-[800px] h-[600px]     " alt=""/>
            <div className=" border-r-solid border-r-[3px] h-[800px] border-r-black mr-[200px]"></div>
        </div>
    );
};

export default Video;