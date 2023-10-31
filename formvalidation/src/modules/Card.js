import React, { useState } from "react";
import image from '../images/wp8794557-jujutsu-kaisen-laptop-wallpapers.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faUserGraduate, faCode, faEnvelope, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
const Card = (props) => {

    return (


        <div className="flex flex-col gap-y-0 justify-center items-center smd:w-[30%] h-[20%] bg-[#141414] shadow-sm shadow-black ssm:w-[48%] sssm:w-[90%] ">
            {
                props.src ? (<img src={props.src} alt="" className="object-cover object-center w-[100%] h-[100%]" />) : (<img src={image} alt="" className="object-cover object-center w-[100%] h-[100%]" />)

            }
            <div className="flex flex-col gap-y-4 justify-start items-start p-4 w-[100%]">

                <div className="flex flex-row gap-x-[12px]">
                    <div className="flex justify-start items-center ml-1">
                        <FontAwesomeIcon icon={faUser} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <div className="flex flex-row gap-x-1 mt-1">
                        <h1 className="text-blue-600 text-xl font-sans ">{props.first_name}</h1>

                        <p className="text-blue-600 text-xl font-sans ">{props.second_name}</p>



                    </div>
                </div>
                <div className="flex flex-row gap-x-[12px] justify-start items-center">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <h1 className="text-blue-600 text-lg font-sans ">{props.degree}</h1>
                </div>
                <div className="flex flex-row gap-x-[12px] justify-start items-center">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <div className="text-blue-600 text-sm font-sans">
                        <p>{props.email}</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[12px] justify-start items-center">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <div className="text-blue-600 text-sm font-sans">
                        <p>{props.phone}</p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-[12px] justify-start items-center">
                    <div className="flex justify-start items-center">
                        <FontAwesomeIcon icon={faUserGraduate} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <div className="text-blue-600 text-sm font-sans">
                        <p className="text-blue-600 text-sm font-sans ">{props.degree}</p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-[12px]">
                    <div className="flex mt-[1px] -ml-1">
                        <FontAwesomeIcon icon={faCode} className="text-blue-600 font-sans text-lg" />
                    </div>
                    <div className="max-w-[100%]">
                        <p className="text-blue-600 text-sm font-sans text-start ">
                            {props.description}
                        </p>
                    </div>
                </div>



            </div>
        </div>




    )
}

export default Card