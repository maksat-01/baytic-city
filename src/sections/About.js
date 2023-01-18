import React from 'react';
import img3 from '../assets/Images/img3.png'
import imageItem from "../assets/Images/image-item.png"
import {BsPlus} from "react-icons/bs";

const About = () => {
    return (
        <div  className=' about 5xl:ml-[-35%] 6xl:ml-[0%] 4xl:ml-[-35%] '>
            <div className="flex">
                <div>
                    <h1 className='  text-xl mt-10  font-sans font-extralight text-[#000000] '>Коротко о нас</h1>
                    <div className='flex about-item'>
                        <div>
                            <p className=' py-5 font-Montserrat font-light  text-[#253659]'>Строительная компания
                                «Байтик Люкс»
                                - это команда <br/> профессионалов, стремящихся улучшить <br/> инфраструктуру города и
                                украсить его,
                                при этом,
                                не <br/> изменяя традициям страны.</p>
                            <img src={img3} className="about-img" alt=""/>
                            <img src={imageItem} className="hidden about-image" alt=""/>
                        </div>
                        <div className='flex about-title flex-col px-10 justify-around'>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='font-Montserrat font-light text-2xl'>11 000</h1>
                                    <BsPlus className='text-[18px] font-light text-2xl items-center'/>
                                </div>
                                <p className=' font-light text-sm text-center flex justify-center'>Счастливых <br/>клиентов
                                </p>
                            </div>
                            <div>
                                <h1 className='font-Montserrat text-center text-2xl font-light'>97%</h1>
                                <p className=' font-light text-sm text-center flex justify-center'>Позитивных <br/>
                                    отзывов</p>
                            </div>
                            <div>
                                <div className='flex items-center '>
                                    <h1 className='font-Montserrat pl-[40px] font-light text-2xl'>5</h1>
                                    <BsPlus className='text-[18px] font-light text-xl    '/>
                                </div>
                                <p className=' font-light text-sm  flex justify-center'>Лет работы</p>
                            </div>
                        </div>
                        <div className='flex about-title-item hidden  px-10 justify-around'>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='font-Jost font-light text-2xl'>11 000</h1>
                                    <BsPlus className='text-[18px] font-light text-2xl items-center'/>
                                </div>
                                <p className=' font-light text-sm text-center flex justify-center'>Счастливых <br/>клиентов
                                </p>
                            </div>
                            <div>
                                <h1 className='font-Jost text-center text-2xl font-light'>97%</h1>
                                <p className=' font-light text-sm text-center flex justify-center'>Позитивных <br/>
                                    отзывов</p>
                            </div>
                            <div>
                                <div className='flex items-center '>
                                    <h1 className='font-Jost pl-[40px] font-light text-2xl'>5</h1>
                                    <BsPlus className='text-[18px] font-light text-xl    '/>
                                </div>
                                <p className=' font-light text-sm  flex justify-center'>Лет работы</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-border border-r-solid border-r-[3px] h-[800px] border-r-black ml-[300px]"></div>
            </div>
        </div>
    );
};

export default About;