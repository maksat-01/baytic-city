import React from 'react';
import image from "../assets/Images/img.png";
import arrow from '../assets/Images/Arrow 2.svg'

const WatchVideo = () => {
    return (
        <div className='watch flex items-center 7xl:ml-[10%] 6xl:ml-[5%] 5xl:ml-[0%] 4xl:ml-[-5%]'>
            <div>
                <img className="image-watch" src={image} alt=""/>
            </div>
            <div className='px-20 watch-q'>
                <h1 className='text-[#000000] text-lg font-extralight font-[Patriciana]'>Посмотрите короткое <br/> видео
                    для полного <br/> представления вашего <br/> уюта</h1>
                <div className="watch-see">
                    <img className='py-10' src={arrow} alt=""/>
                    <div
                        className='w-[100px] h-[100px] rounded-[50%] bg-[#252525] flex justify-center items-center flex-col text-center px-[10px] '>
                        <h1 className='font-extralight text-[15px] text-white font-[Patriciana]'>Нажмите для
                            просмотра</h1>
                    </div>
                </div>
            </div>
            <img className="image-watch-item hidden" src={image} alt=""/>
        </div>
    );
};

export default WatchVideo;