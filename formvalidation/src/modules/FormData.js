import React from "react";

const FormData = () => {
    return (
        <div>
            <div className="bg-[#232323] w-full h-screen py-4">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col justify-center items-center">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 marker:md:mb-6 lg:text-3xl">
                            Get in touch
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-blue-600 font-sans md:text-lg">
                            This is a section of some simple filler text, also known as
                            placeholder text. It shares some characteristics of a real written
                            text but is random or otherwise generated.
                        </p>
                    </div>
                    <form className="flex flex-col gap-y-1 border-2 border-blue-600 bg-[#3b3b3b] shadow-sm shadow-black w-[70%] justify-center items-center p-3">
                        <div className="flex flex-row gap-x-2 w-[98%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="F-name " className="text-blue-600 font-sans">First-Name</label>
                                <input type="text" id="F-name" name="F-name" placeholder="First Name" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="L-name" className="text-blue-600 font-sans">Last-Name</label>
                                <input type="text" id="L-name" name="L-name" placeholder="Last Name" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>

                        </div>
                        <div className="flex flex-row gap-x-2 w-[98%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="Email " className="text-blue-600 font-sans">Email</label>
                                <input type="email" id="Email" name="Email" placeholder="Email" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="Phone" className="text-blue-600 font-sans">Contact-No</label>
                                <input type="text" id="Phone" name="Phone" placeholder="Your Number" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>

                        </div>
                        <div className="flex flex-row gap-x-2 w-[98%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="Degree " className="text-blue-600 font-sans">Degree Programme</label>
                                <input type="text" id="Degree" name="Degree" placeholder="Degree Programme" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="Domain" className="text-blue-600 font-sans">Internship Domain</label>
                                <input type="text" id="Domain" name="Domain" placeholder="Domain" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>

                        </div>
                        <div className="flex flex-row gap-x-2 w-[98%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="file " className="text-blue-600 font-sans">Upload Image</label>
                                <input type="file" id="file" name="file" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[50%]">
                                <label htmlFor="Domain" className="text-blue-600 font-sans">Internship Domain</label>
                                <input type="text" id="Domain" name="Domain" placeholder="Domain" className="p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans" />
                            </div>

                        </div>
                        <div className="flex flex-row gap-x-2 w-[100%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[100%]">
                                <label htmlFor="Skills" className="text-blue-600 font-sans">Skills and Expertise</label>
                                <textarea name="Skills" id="Skills" cols="34" rows="4" placeholder="Skills and Expertise" className=" resize-none p-2 rounded-md outline-none focus:ring w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans"></textarea>

                            </div>


                        </div>

                    </form>



                </div>
            </div>
        </div>
    );
};

export default FormData;
