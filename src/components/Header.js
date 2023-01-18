import React, {useState} from 'react';
import logo2 from "../assets/Images/logo2.svg";
import logo from "../assets/Images/logo.svg"

const Header = () => {
    const [click , setClick] = useState(false)

    return (
            <div >
                <div className=" hidden header-title flex ">
                    <div  className="fixed left-0 top-0  bg-white  header-bg ">
                        <div onClick={() => setClick(!click)}  className=" cursor-pointer   fixed left-[20px] top-[15px]  flex justify-center items-center flex-col">
                            <svg  width="43" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <line  y1={click ? "21.5" :
                                    "1.5"} x2="30" y2="1.5" stroke="black" ></line>
                                {
                                    !click? <line className="line"  y1="11.5" x2="20" y2="11.5" stroke="black"></line> : ""
                                }
                                <line  y1={click ? "1.5": "21.5"} x2="30" y2="21.5" stroke="black" ></line>
                            </svg>
                            {click ? "close" : "menu"}
                        </div>
                        <img src={logo} className="logo-2 pl-[55%] pt-[4%]" alt=""/>

                    </div>
                    <div   onClick={() => setClick(false)}  style={{
                        display: click ? "block" : "none",
                    }}>
                        <div style={{
                        }} className="header bg-white fixed left-[4%] min-h-full w-[100px] flex  items-center flex-col 4xl:w-[35%] 3xl:w-[35%]">
                            <a href="#hero">
                                <img className="m-20 logo" src={logo2} alt=""/>
                            </a>
                            <div className="flex href flex-col font-light text-xl text-center color-black">
                                <a className="m-7 href-a" href="#" >О компании</a>
                                <a  className="m-7 href-a" href="#">Коттеджи</a>
                                <a className="m-7 href-a" href="#">Ключевые люди</a>
                                <a  className="m-7 href-a" href="#">Связаться</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-amber-400">Maksat</div>
                <div className="w-[70px] header-general flex ">
                    <div  className="flex justify-center items-center absolute top-[50%] m-4">
                        <div onClick={() => setClick(!click)}  className="header-bg cursor-pointer  bg-white fixed  min-h-full w-[70px] h-full left-0 top-0 flex justify-center items-center flex-col">
                            <svg  width="43" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <line  y1={click ? "21.5" :
                                    "1.5"} x2="30" y2="1.5" stroke="black" ></line>
                                {
                                    !click? <line className="line"  y1="11.5" x2="20" y2="11.5" stroke="black"></line> : ""
                                }
                                <line  y1={click ? "1.5": "21.5"} x2="30" y2="21.5" stroke="black" ></line>
                            </svg>
                            {click ? "close" : "menu"}
                        </div>
                    </div>
                    <div   onClick={() => setClick(false)}  style={{
                        display: click ? "block" : "none",
                    }}>
                        <div style={{
                        }} className="header bg-white fixed left-[4%] min-h-full w-[100px] flex  items-center flex-col 4xl:w-[35%] 3xl:w-[35%]">
                            <a href="#hero">
                                <img className="m-20 " src={logo2} alt=""/>
                            </a>
                            <div className="flex href flex-col font-light text-xl text-center color-black">
                                <a className="m-7 href-a" href="#" >О компании</a>
                                <a  className="m-7 href-a" href="#">Коттеджи</a>
                                <a className="m-7 href-a" href="#">Ключевые люди</a>
                                <a  className="m-7 href-a" href="#">Связаться</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;
















