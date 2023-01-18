import React from 'react';
import person from "../assets/Images/person.png"
import person2 from "../assets/Images/person2.png"
import person3 from "../assets/Images/person3.png"

const KeyPersons = () => {
    return (
        <div className="ke flex">
            <div  className="key mt-[-70%] ml-[10%]">
                <h1 className=" text-xl font-Patriciana">Ключевые люди <br/>компании</h1>
                <div className="flex key-person  items-center">
                    <div>
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person} className="person" alt=""/>
                    </div>
                    <div className="mx-20">
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person2} className="person" alt=""/>
                    </div>
                    <div>
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person3} className="person" alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default KeyPersons;