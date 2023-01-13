import React, {useState} from 'react';
import logo2 from "../assets/Images/logo2.svg";


const Header = () => {
    const [click , setClick] = useState(false)

    return (
            <div >
                <div className="w-[70px] flex  ">
                    <div  className="flex justify-center items-center absolute top-[50%] m-4">
                        <div onClick={() => setClick(!click)}  className="cursor-pointer  bg-white fixed  min-h-full w-[70px] h-full left-0 top-0 flex justify-center items-center flex-col">
                            <svg  width="43" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <line  y1={click ? "21.5" : "1.5"} x2="30" y2="1.5" stroke="black" ></line>
                                {
                                    !click? <line className="line"  y1="11.5" x2="20" y2="11.5" stroke="black"></line> : ""
                                }
                                <line  y1={click ? "1.5": "21.5"} x2="30" y2="21.5" stroke="black" ></line>
                            </svg>
                            {click ? "close" : "menu"}
                            {/*<span className="text-1xl text-black">menu</span>*/}
                        </div>
                    </div>
                    <div   onClick={() => setClick(false)}  style={{
                        display: click ? "block" : "none",
                    }}>
                        <div className="header bg-white fixed left-[4%] min-h-full w-[100px] flex  items-center flex-col 4xl:w-3/12 3xl:w-3/12">
                            <a href="#hero">
                                <img className="m-20 " src={logo2} alt=""/>
                            </a>
                            <div className="flex flex-col font-light text-xl text-center color-black">
                                <a className="m-7" href="#about">О компании</a>
                                <a  className="m-7" href="#our-cottages">Коттеджи</a>
                                <a className="m-7" href="#key-person">Ключевые люди</a>
                                <a  className="m-7" href="#request">Связаться</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;
















