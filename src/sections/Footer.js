import React from 'react';
import logo4 from "../assets/Images/Logo4.png"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
const Footer = () => {
    return (
        <div className="bg-[#C2C2C2] overflow-hidden h-[403px]">
            <div>
                <div className="footer flex justify-around items-center py-[5%]">
                    <img src={logo4} alt=""/>
                    <div className="flex footer-q">
                        <div className="bg-white m-4 hover:bg-black  rounded-[50%] w-[48px] text-center h-[48px]">
                            <FaFacebookF className="hover:text-white ml-[15px] mt-[15px] text-[#B66A20] "/>
                        </div>
                        <div  className="bg-white hover:bg-black  m-4 rounded-[50%] w-[48px] text-center h-[48px]">
                            <BsTwitter  className="ml-[15px] mt-[15px] text-[#B66A20] hover:text-white"/>
                        </div>
                        <div  className="bg-white m-4 hover:bg-black rounded-[50%] w-[48px] text-center h-[48px]">
                            <AiFillInstagram  className=" ml-[15px] mt-[15px] hover:text-white text-[#B66A20] "/>
                        </div>
                    </div>
                    <div>
                        <p className="font-Jost text-[20px] font-light not-italic">г. Бишкек, ул. Токтогула 125/1
                           <br/> Бизнес-центр «Авангард» 1 и 2 этажи</p>
                    </div>
                </div>
                <div className="my-10" style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #333333", opacity: 0.4, width: "1299px", height: "1px", marginLeft: "8%",
                }}></div>
                <span className="footer-fon font-Jost text-[18px] font-light not-italic pl-[8%]">Motion Web Studio 2023. All Rights Reserved.</span>
            </div>
        </div>
    );
};

export default Footer;