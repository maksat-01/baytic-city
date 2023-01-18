import React from 'react';
import image from "../assets/Images/img.png";
import arrow from '../assets/Images/Arrow 2.svg'
import video from "../assets/Images/video.webm";

const WatchVideo = () => {
    return (
        <div>
            <div className='watch flex items-center 7xl:ml-[10%] 6xl:ml-[5%] 5xl:ml-[0%] 4xl:ml-[-5%]'>
                <div>
                    <img className="image-watch" src={image} alt=""/>
                </div>
                <div className='px-20 watch-q'>
                    <h1 className='text-[#000000] text-lg font-extralight font-sans'>Посмотрите
                        короткое <br/> видео
                        для полного <br/> представления вашего <br/> уюта</h1>
                    <div className="watch-see ">
                        <img className='py-10 arrow' src={arrow} alt=""/>
                        <div
                            className='w-[100px] watch-one h-[100px] rounded-[50%] bg-[#252525] flex justify-center items-center flex-col text-center px-[10px] '>
                            <h1 className='font-extralight text-[15px] text-white font-sans'>Нажмите для
                                просмотра</h1>
                        </div>
                    </div>
                </div>
                <video  src={video} autoPlay loop muted className="image-video hidden min-w-full mx-40 min-h-full 8xl:w-[1300px] h-[1000px]   7xl:w-[1300px] h-[800px] 6xl:w-[1200px] h-[800px]  5xl:w-[400px] h-[500px] 4xl:w-[600px] h-[500px] " />

                <img className="image-watch-item hidden" src={image} alt=""/>
            </div>
        </div>
    );
};

export default WatchVideo;