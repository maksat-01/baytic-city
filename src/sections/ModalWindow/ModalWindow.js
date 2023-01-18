import React, {useEffect} from 'react';
import gsap from "gsap"
import img7 from "../../assets/Images/img7.png"
import img8 from "../../assets/Images/img8.png"
import img9 from "../../assets/Images/img9.png"
import Slider from "react-slick";
import {TfiFullscreen} from "react-icons/tfi";
import {BsArrowRight} from "react-icons/bs"

const ModalWindow = ({setModal, modal}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        gsap.to(".modal-text", {
            y: '50px',
            repeat: -1,
            yoyo: true,
            ease: 'easeOut',
            duration: 1,
        })
    }, [])

    return (
        <div>
            <div onClick={() => setModal(!modal)}
                 className="our-cottages-w overflow-hidden mb-[50%] w-[186px] h-[186px] flex justify-center items-center cursor-pointer flex-col  rounded-[50%] bg-[#414141]">
                <h1 className="text-white font-Patriciana font-thin text-sm">Посмотреть</h1>
                <div className="my-2 border-t-2 w-[60px]"></div>
                <p className="text-center text-white text-[12px]">Нажмите сюда для <br/>просмотра</p>
            </div>
            <div
                style={{
                    transform: modal ? "translateY(-23rem)" : "translateY(0)",
                    transition: ".4s",
                }}>
                <div className="modal" style={{
                    display: modal ? "block" : "none",
                }}>
                    <div className="modal-content">
                        <div className="flex justify-evenly items-center">
                            <img src={img7} alt=""/>
                            <div>
                                <p className="font-sans text-xl">Трехэтажный <br/>
                                    загородный <br/>коттедж
                                    <br/> с плоской крышей</p>
                                <div className="my-8 mt-20 border-t-4 w-[250px]  bg-[#6D6D6D]"></div>
                                <span className="pt-10">2 этажа</span>
                                <div className="flex justify-start items-center pt-20">
                                    <TfiFullscreen className="text-[#009EE3] text-base"/>
                                    <span
                                        className="mx-2 text-lg font-[Open Sans] font-semibold text-base">335</span>
                                    <span className="font-[Open Sans] text-lg font-semibold font-base ">м2</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#363636] modal-text text-center my-40 text-base">Scroll down</h2>
                        </div>
                        <div>
                            <div className="">
                                <div className="flex justify-center items-center">
                                    <div className="border-t-4 w-[150px]  bg-[#6D6D6D]"></div>
                                    <h3 className=" text-2xl font-[Jost] text-center"><span
                                        className="text-[#C9AE5D]">О</span> <br/>проекте</h3>
                                </div>
                                <p className="text-center py-20   text-base ">Проект жилого двухэтажного дома выполнен с
                                    особым стилем, <br/>который впечатляет с
                                    <br/>первого взгляда. Изысканность проекта, продуманность каждой детали, гармония
                                    <br/>пространства ждет владельцев такого дома. <br/>Нестандартность конструкции и
                                    особый стиль
                                    <br/>выгодно отличают данный проект от других. Площадь застройки, включая крыльцо,
                                    <br/> составляет 100 кв.м.</p>
                            </div>
                            <Slider {...settings} className="flex">
                                <div className="modal-setting">
                                    <img src={img8} alt=""/>
                                </div>
                                <div className="modal-setting">
                                    <img src={img8} alt=""/>
                                </div>
                            </Slider>
                            <div>
                                <h4 className="text-center text-base my-[50px]">Типы комнат:</h4>
                                <div>
                                    <div className="flex flex-col">
                                        <div className="flex justify-evenly items-center">
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Кухня</span>
                                            </div>
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Санузел</span>
                                            </div>
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Кладовая</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-evenly my-[40px] items-center">
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Гостиная</span>
                                            </div>
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Спальни</span>
                                            </div>
                                            <div className="w-[34px] h-[34px] bg-[#B66A20] pt-[27px] pl-[20px]">
                                                    <span
                                                        className="border px-[70px] py-[10px] text-center border-[#C9AE5D] text-bidy">Котельная</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="m-[60px]">
                                <div className="flex">
                                    <div className="border-r-4  mx-5 border-[#C9AE5D]"></div>
                                    <p className="font-serif text-2xl"><span
                                        className="text-[#C9AE5D] ">Современный</span> <br/>коттедж</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col justify-between items-center">
                                        <div className="flex items-center my-20">
                                            <BsArrowRight className="text-xl text-[#C9AE5D] "/>
                                            <div className="px-10">
                                                <h4 className="py-3 font-serif text-sm">Материал кровли:</h4>
                                                <span className="text-sm ">Эксплуатируемая</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <BsArrowRight className="text-xl text-[#C9AE5D] "/>
                                            <div className="px-10">
                                                <h4 className="py-3 font-serif text-sm">Количество этажей:</h4>
                                                <span className="text-sm ">2 этажа</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center my-20">
                                            <BsArrowRight className="text-xl text-[#C9AE5D] "/>
                                            <div className="px-10">
                                                <h4 className="py-3 font-serif text-sm">Площадь застройки:</h4>
                                                <span className="text-sm ">300 м2</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center ">
                                            <BsArrowRight className="text-xl text-[#C9AE5D] "/>
                                            <div className="px-10">
                                                <h4 className="py-3 font-serif text-sm">Материал стен:</h4>
                                                <span className="text-sm ">Газобетон</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border  w-[510px] h-[527px]  border-[#C9AE5D]">
                                        <img className="w-[450px] h-[477px] pt-[40px]" src={img9} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-center text-lg" onClick={() => setModal(!modal)}>close</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;