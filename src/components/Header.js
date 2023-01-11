import React, {useState} from 'react';
import logo2 from "../assets/Images/logo2.svg";
import {NavLink} from "react-router-dom";


const Header = () => {
    const [click , setClick] = useState(false)

    return (
            <div >
                <div className="w-[70px] flex  ">
                    <div  className="flex justify-center items-center absolute top-[50%] m-4">
                        <div onClick={() => setClick(!click)}  className="cursor-pointer  bg-white fixed  min-h-full w-[80px] left-0 top-0 flex justify-center items-center flex-col">
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
                        <div className="header bg-white fixed left-[5%] min-h-full w-[100px] flex  items-center flex-col 4xl:w-3/12 3xl:w-3/12">
                            <NavLink to="/">
                                <img className="m-20 " src={logo2} alt=""/>
                            </NavLink>
                            <div className="flex flex-col font-light text-xl text-center color-black">
                                <NavLink to="/About" className="m-7" href="#">О компании</NavLink>
                                <NavLink to="/OurCottages" className="m-7" href="#">Коттеджи</NavLink>
                                <NavLink to="/KeyPersons" className="m-7" href="#">Ключевые люди</NavLink>
                                <NavLink to="/OurPartners" className="m-7" href="#">Партнеры</NavLink>
                                <NavLink to="#" className="m-7" href="#">Связаться</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;
















