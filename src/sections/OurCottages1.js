import React from 'react';
import img4 from "../assets/Images/img4.png"
import cottages2 from "../assets/Images/cottages2.png"
import {TfiFullscreen} from "react-icons/tfi"

const OurCottages = () => {


    return (
        <div className=" 4xl:ml-[-50%] 5xl:ml-[-65%] 6xl:ml-[-20%]">
            <div className="flex ml-[25%] our-cottages-team">
                <img src={img4} className="foto " alt=""/>
                <div className="flex justify-between items-center">

                    <div className="our-item">
                        <div className=" flex flex-col m-10 justify-between items-center">
                            <div className="our-cottages-w mb-[50%] w-[186px] h-[186px] flex justify-center items-center flex-col  rounded-[50%] bg-[#414141]">
                                <h1 className="text-white font-Patriciana font-thin text-sm">Посмотреть</h1>
                                <div className="my-2 border-t-2 w-[60px]"></div>
                                <p className="text-center text-white text-[12px]">Нажмите сюда для <br/>просмотра</p>
                            </div>
                            <div className="my-[10%] our-cottages-e">
                                <h2 className="text-[#252525 our-text font-Jost text-[24px]  text-center">Трехэтажный загородный коттедж с плоской крышей</h2>
                                <div className="line-q my-8  border-t-4 w-[15rem]"></div>
                            </div>
                            <div >
                                <h3 className="font-[Open Sans] text-[14px] my-4 font-light">2 этажа</h3>
                                <div className="flex justify-start items-center">
                                    <TfiFullscreen className="text-[#009EE3] text-base"/>
                                    <span className="mx-2 text-lg font-[Open Sans] font-semibold font-[24px]">335</span>
                                    <span className="font-[Open Sans] text-lg font-semibold font-[24px] ">м2</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="our-item-icon hidden">
                        <div className=" flex  flex-col m-10 justify-between items-center">
                            <div className="my-[10%] our-cottages-e">
                                <h2 className="text-[#252525 our-text text-[24px]  text-center">Трехэтажный загородный коттедж с плоской крышей</h2>
                                <div className="line-q my-8  border-t-4 w-[15rem]"></div>
                            </div>
                            <div className="our-team">
                                <div className="our-cottages-w mb-[50%] w-[186px] h-[186px] flex justify-center items-center flex-col  rounded-[50%] bg-[#414141]">
                                    <h1 className="text-white font-[Patriciana] font-thin text-sm">Посмотреть</h1>
                                    <div className="my-2 border-t-2 w-[60px]"></div>
                                    <p className="text-center text-white text-[12px]">Нажмите сюда для <br/>просмотра</p>
                                </div>
                                <div className="two">
                                    <h3 className="font-[Open Sans] two-second text-[14px] my-4 font-light">2 этажа</h3>
                                    <div className="flex justify-start items-center">
                                        <TfiFullscreen className="text-[#009EE3] text-base"/>
                                        <span className="mx-2 text-lg font-[Open Sans] font-semibold font-[24px]">335</span>
                                        <span className="font-[Open Sans] text-lg font-semibold font-[24px] ">м2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ul my-2 mx-[20%] border-r-solid border-r-[1px] w-[1px] h-[400px] border-r-black"></div>
                </div>
                <img src={cottages2} className="foto-see hidden" alt=""/>

            </div>
        </div>
    );
};

export default OurCottages;