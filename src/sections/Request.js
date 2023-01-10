import React from 'react';
import img6 from "../assets/Images/img6.png"
const Request = () => {
    return (
        <div className=" mt-[-21%] flex justify-between items-center ">
            <div className="ml-[5%]">
                <h1 className="text-[42px] font-light font-[Patriciana]">Оставьте заявку</h1>
                <p className="font-[Monserrat] text-[18px] mx-[10%] font-extralight w-[366px]">Напишите ваши контактные данные для индивидуальной консультации</p>
                <div className="my-10">
                    <h2 className="my-5">Ваше имя:</h2>
                        <input type="text" id="last_name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="" required/>
                </div>
                <div className="my-10">
                    <h2 className="my-5">Ваш телефонный номер:</h2>
                    <input type="tel" id="phone"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="+996" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>

                <button type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  rounded-lg text-sm px-[30px] py-[10px] dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Отправить
                </button>
            </div>
            <div className="">
                <div className="text-[33px] font-[250] font-[Patriciana]">
                    <on>
                        <li >Instagram</li>
                        <li className="my-[20%]">Twitter</li>
                        <li className="my-[20%]">Telegram</li>
                        <li>E-Mail</li>
                    </on>
                </div>
            </div>
            <img className="" src={img6} alt=""/>
        </div>
    );
};

export default Request;