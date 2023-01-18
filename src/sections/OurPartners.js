import React from 'react';
import img5 from "../assets/Images/img5.png"

const OurPartners = () => {

    return (
        <div className="flex ml-[-25%]">
            <div className="swich ml-[-5%]">
                <p className="uppercase text-6xl">партнеры</p>
            </div>
            <div className="partners flex ml-[-65%] 7xl: ml-[-30%] 6xl:ml-[-25%] 5xl:ml-[-10%] 4xl:ml-[-5%]">
                <div>
                    <h1 className="text-[43px] font-[100] font-Patriciana">Наши партнеры</h1>
                    <p className="w-[366px] h-[154px] font-['Montserrat'] font-extralight text-[16px] mx-[10%] color-[#393939]">Lorem
                        ipsum dolor sit amet consectetur. Lacus odio egestas
                        pharetra tincidunt diam ornare cras.
                        Tincidunt orci a pellentesque arcu sapien. Rhoncus aliquam cras donec consequat habitant augue.
                        Nec
                        volutpat elementum dui non quis nulla mauris.</p>
                    <img src={img5} className="foto-s" alt=""/>
                </div>
                <div
                    className="line mx-[5%] mt-[5%] border-r-solid border-r-[1px] w-[1px] h-[400px] border-r-black"></div>
                <div className="">
                    <div className="text-[33px] 5xl:text-[28px] 6xl:text-[33px] font-[250] font-Patriciana">
                        <ul>
                            <li>Mancho Devs</li>
                            <li className="li my-[40%]">Company name</li>
                            <li className="li my-[40%]">Name company</li>
                            <li>Number one company</li>
                        </ul>
                    </div>
                </div>
                <div className="web flex justify-center items-center mx-[10%]">
                    <h2 className="text-[18px]   font-medium font-[Monserrat]">Partners</h2>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;