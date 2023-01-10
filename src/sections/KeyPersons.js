import React from 'react';
import person from "../assets/Images/person.png"
import person2 from "../assets/Images/person2.png"
import person3 from "../assets/Images/person3.png"

const KeyPersons = () => {
    return (
        <div >
            <div className=" ml-[-40%]">
                <h1 className=" text-xl font-['Patriciana']">Ключевые люди <br/>компании</h1>
                <div className="flex  items-center">
                    <div>
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person} alt=""/>
                    </div>
                    <div className="mx-20">
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person2} alt=""/>
                    </div>
                    <div>
                        <div className="py-6">
                            <h2 className="text-base font-normal font-[Montserrat]">Алымкулова Мира</h2>
                            <p className="text-sm font-extralight font-[Montserrat]">Генеральный директор</p>
                        </div>
                        <img src={person3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyPersons;