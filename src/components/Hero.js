import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";
import home from "../assets/Images/home.png"


const Hero = () => {
    return (
        <div className="hero flex border-r-solid border-r-[3px] border-r-black mr-[200px] ">
            <div id="hero" className="hero flex border-r-solid border-r-[3px] border-r-black mr-[200px] ">
                <img src={home} className="img 4xl:w-[600px] h-[800px] 5xl:w-[600px] h-[800px] 6xl:w-[832px] h-[800px]"
                     alt=""/>
                <div className="m-8 ">
                    <div className="flex  flex-col ">
                        <div className='p-7'>
                            <svg>
                                <svg className="my-[-14px] logo-3" width="224" height="33" viewBox="0 0 224 33"
                                     fill="none"></svg>
                            </svg>
                            <svg className="my-[-14px]" width="224" height="33" viewBox="0 0 224 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 10.6447V21.2893L8.91089 21.2458L17.8218 21.2023L18.5277 20.8168C18.9158 20.6048 19.4505 20.1306 19.7158 19.7632L20.198 19.095L20.2489 15.6968C20.2845 13.3189 20.2432 12.1657 20.1114 11.856C19.9095 11.3816 19.023 10.7295 18.5347 10.7168C19.7865 10.1264 20.2918 9.67012 20.2417 5.78247C20.2018 2.6894 20.1689 2.33567 19.8671 1.77331C19.4761 1.04472 18.5213 0.344045 17.6516 0.14775C17.3096 0.0704971 13.1981 0.00573378 8.51485 0.0037292L0 2.84471e-05V10.6447ZM31.3264 0.216369C30.4288 0.533709 29.6938 1.14942 29.3231 1.89497C28.996 2.55294 28.9901 2.7278 28.9901 11.922V21.2794H30.7327H32.4752V17.5786V13.8779H39.1287H45.7822V17.5786V21.2794H47.5248H49.2673V12.0505C49.2673 5.48764 49.2146 2.67028 49.0847 2.29743C48.7995 1.47894 48.3593 0.962535 47.5541 0.50179L46.8119 0.0771276L39.3663 0.041662C33.4067 0.0132895 31.8021 0.0481383 31.3264 0.216369ZM55.2396 0.192776C55.3218 0.298865 57.2196 2.82402 59.457 5.80436L63.5248 11.2232V16.2513V21.2794H65.1881H66.8515V16.2831V11.2867L71.0495 5.72557C73.3584 2.66689 75.2475 0.127396 75.2475 0.0822162C75.2475 0.037036 74.303 0.000336842 73.1485 0.000645238L71.0495 0.00141623L68.2242 3.77758C66.6703 5.85448 65.3407 7.58875 65.2695 7.63146C65.1984 7.67433 63.8443 5.97475 62.2604 3.85468L59.3806 2.84471e-05H57.2353C55.5449 2.84471e-05 55.1216 0.040891 55.2396 0.192776ZM79.6832 1.61911V3.23819H83.1683H86.6535V12.2588V21.2794H88.396H90.1386V12.2588V3.23819H93.6238H97.1089V1.61911V2.84471e-05H88.396H79.6832V1.61911ZM104.396 10.6397V21.2794H106.139H107.881V10.6397V2.84471e-05H106.139H104.396V10.6397ZM116.594 10.6397V21.2794H118.337H120.079V16.7306V12.1817L123.05 12.184L126.02 12.1865L129.267 16.7278L132.515 21.2691L134.686 21.2743L136.857 21.2794L133.131 16.0191C130.939 12.9232 129.442 10.6678 129.493 10.5379C129.541 10.4167 131.156 8.08912 133.082 5.36567C135.008 2.64206 136.62 0.320761 136.665 0.206963C136.731 0.04012 136.338 0.00126203 134.631 0.00635058L132.515 0.0125185L129.284 4.5552L126.053 9.09773H123.066H120.079V4.54888V2.84471e-05H118.337H116.594V10.6397ZM217.96 2.19011C217.056 3.39471 216.161 4.69848 216.055 4.84003L218.112 7.72876L218.967 6.60141C220.403 4.7094 223.873 0.204621 224 0C224 0 223.393 2.84471e-05 221.732 2.84471e-05H219.604L217.96 2.19011ZM157.307 10.7168V21.2794H163.01H168.713V19.7374V18.1954H164.673H160.634V9.17483V0.154227H158.97H157.307V10.7168ZM176.158 9.4894C176.158 18.3621 176.173 18.8528 176.46 19.3966C176.811 20.0628 177.284 20.5118 178.059 20.9144C178.579 21.184 179.098 21.2023 186.218 21.2023C193.7 21.2023 193.832 21.1969 194.455 20.8703C195.251 20.4537 195.718 19.9699 196.032 19.239C196.244 18.7452 196.277 17.4175 196.277 9.41106V0.154227H194.614H192.95V8.98979C192.95 15.6563 192.904 17.8708 192.76 18.0104C192.487 18.2762 179.948 18.2762 179.675 18.0104C179.532 17.8708 179.485 15.6563 179.485 8.98979V0.154227H177.822H176.158V9.4894ZM203.908 0.278048C203.937 0.346204 205.671 2.67367 207.762 5.45017C209.853 8.22682 211.583 10.5494 211.605 10.6115C211.628 10.6736 209.868 13.0819 207.694 15.9634L203.742 21.2023L205.664 21.2458C206.721 21.2698 207.667 21.2595 207.764 21.2228C207.862 21.1863 209.221 19.4508 210.783 17.366C212.346 15.2812 213.695 13.5962 213.782 13.6214C213.869 13.6467 215.224 15.3785 216.792 17.4701L219.644 21.2728L221.741 21.2762L223.839 21.2794L221.259 17.8485C219.84 15.9616 216.268 11.2084 213.32 7.2859L207.96 0.154227H205.907C204.778 0.154227 203.878 0.209892 203.908 0.278048ZM16.7129 3.2348V9.10113H3.48515V6.16796V3.2348H16.7129ZM45.7454 6.9775L45.7879 10.6397H39.1316H32.4752V7.04181C32.4752 5.06282 32.5236 3.39671 32.5827 3.33935C32.6416 3.28183 35.6179 3.253 39.1965 3.27505L45.703 3.31529L45.7454 6.9775ZM16.7129 12.1817V18.0044H10.099L3.48515 18.0446V15.1132V12.1817H9.96087C15.2768 12.1817 16.7129 12.1817 16.7129 12.1817ZM188.673 26.7149L188.674 27.6786L187.162 27.625C185.437 27.5638 184.991 27.6395 184.55 28.068C184.274 28.3375 184.238 28.5861 184.238 30.2298C184.238 31.9997 184.256 32.1052 184.629 32.4683C185.011 32.8401 185.076 32.8491 187.322 32.8352L189.624 32.821V29.286V25.7512H189.149H188.673L188.673 26.7149ZM180.119 26.3679C180.119 26.7792 180.172 26.8305 180.594 26.8305C181.017 26.8305 181.069 26.7792 181.069 26.3679C181.069 25.9567 181.017 25.9054 180.594 25.9054C180.172 25.9054 180.119 25.9567 180.119 26.3679ZM157.307 30.234V32.8443H157.782H158.257C158.257 32.8443 158.262 33.7695 158.26 31.1095C158.257 28.4496 158.24 28.6809 159.464 28.6809H160.475V28.1434V27.6057L158.891 27.6148L157.307 27.6237V30.234ZM163.375 27.9736C162.958 28.3226 162.927 28.4333 162.875 29.7549C162.807 31.4801 162.922 32.1359 163.364 32.5365C163.671 32.8153 163.924 32.8443 166.05 32.8443H168.396V32.386V31.9277L166.218 31.8849L164.04 31.842L163.991 31.3578L163.943 30.8735L165.789 30.8166C167.921 30.8166 167.716 30.6855 167.921 30.4542C168.218 30.1174 168.111 28.0023 167.921 27.7557C167.683 27.4473 166.97 27.6148 165.645 27.6015C163.944 27.6015 163.789 27.6268 163.375 27.9736ZM171.953 27.9801C171.62 28.3041 171.564 28.5024 171.564 29.3591C171.564 30.7438 171.726 30.8397 174.055 30.8397H175.842V31.3794V31.9191H173.703H171.564V32.3817V32.8443H173.869C176.104 32.8443 176.184 32.833 176.562 32.4657C176.886 32.1496 176.95 31.9377 176.95 31.1789C176.95 29.8605 176.815 29.7807 174.488 29.727L172.594 29.6832V29.2206V28.758L174.772 28.7152L176.95 28.6723V28.1369V27.6015H174.646C172.411 27.6015 172.33 27.6128 171.953 27.9801ZM180.119 30.2229V32.8443H180.594H181.069V30.2229V27.6015H180.594H180.119V30.2229ZM193.483 27.7819C192.938 28.0388 192.99 28.5876 192.99 30.3888C192.99 31.9837 192.899 32.0782 193.181 32.4657C193.558 32.833 193.639 32.8443 195.874 32.8443H198.178V32.3817V31.9191H196.04H193.901V31.393V30.867L195.631 30.8147C197.206 30.7672 197.398 30.729 197.77 30.3888C198.11 30.077 198.178 29.8774 198.178 29.1867C198.178 28.513 198.106 28.2879 197.789 27.9801C197.421 27.6214 197.307 27.6022 195.611 27.612C194.627 27.6177 193.67 27.6942 193.483 27.7819ZM201.347 30.2339V32.8443H201.901H202.455V30.7626V28.6809H204.119H205.782V30.7626V32.8443H206.339H206.896L206.845 30.5877C206.794 28.3411 206.792 28.3295 206.357 27.9647C205.938 27.6142 205.821 27.5989 203.633 27.6108L201.347 27.6233V30.2339ZM210.351 28.0652L209.875 28.5287L209.927 30.3921C209.999 32.9047 209.921 32.8443 213.087 32.8443H215.446V32.386V31.9277L213.267 31.8849L211.089 31.842L211.044 30.2615L210.999 28.6809H213.222H215.446V28.1412V27.6015H213.136H210.827L210.351 28.0652ZM218.905 28.0652L218.429 28.5287L218.482 30.3921C218.553 32.9047 218.475 32.8443 221.641 32.8443H224V32.386V31.9277L221.822 31.8849L219.644 31.842L219.594 31.3408L219.544 30.8397H221.064C222.877 30.8397 223.541 30.622 223.835 29.9309C224.121 29.2578 223.946 28.375 223.442 27.9485C223.068 27.6319 222.872 27.6015 221.207 27.6015C219.389 27.6015 219.38 27.6034 218.905 28.0652ZM167.287 29.2206V29.7603H165.624H163.96V29.2206V28.6809H165.624H167.287V29.2206ZM188.594 30.3V31.842L186.97 31.8859L185.347 31.9299V30.3V28.6701L186.97 28.7141L188.594 28.758V30.3ZM197.198 29.1821L197.149 29.6832L195.525 29.7272L193.901 29.7711V29.226V28.6809H195.574H197.248L197.198 29.1821ZM222.861 29.1821L222.812 29.6832L221.188 29.7272L219.564 29.7711V29.226V28.6809H221.238H222.911L222.861 29.1821Z"
                                    fill="#3B76BA"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-40 title'>
                <h1 className='text-2xl caret-black font-extralight font-sans pt-3'>МЫ
                    СТРОИМ БУДУЩЕЕ УЖЕ СЕГОДНЯ</h1>
                <p className='font-light  text-sm pb-[2%]  py-[20px] font-[Montserrat] text-gray-800'>Стабильность
                    и надежность на рынке
                    СТРОИМ <br/> БУДУЩЕЕ УЖЕ <br/> СЕГОДНЯ</p>
                <p className='font-light  text-sm pb-[2%]  py-[20px] font-[Montserrat] text-[#253659]'>Стабильность
                    и надежность на
                    рынке <br/>
                    строительства</p>
                <div className='flex hero-p items-center pt-[50px]'>
                    <button className=' text-sm font-extralight cursor-pointer font-[Montserrat]'>Подробнее
                    </button>
                    <HiArrowNarrowRight className='w-8 rotate-90'/>
                </div>
            </div>
            <img src={home}
                 className="img-item hidden 4xl:w-[600px] h-[800px] 5xl:w-[600px] h-[800px] 6xl:w-[832px] h-[800px]"
                 alt=""/>
        </div>
    );
};

export default Hero;