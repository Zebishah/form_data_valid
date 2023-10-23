import React, { useRef, useState } from "react";
import AllCards from "./AllCards";

const FormData = () => {
    const [selectedGender, setSelectedGender] = useState('male');
    let existingData = []
    let [logs, setLogs] = useState(null);
    let [Image, setImage] = useState('');
    let [data, setData] = useState(() => {
        existingData = JSON.parse(localStorage.getItem('card')) || [];
        return existingData;
    });
    let First_Name = useRef(null);
    let second_Name = useRef(null);
    let imageFile = null
    let Domain = useRef(null);
    let Email = useRef(null);
    let image = useRef(null);
    let Phone = useRef(null);
    let Degree = useRef(null);
    let Description = useRef(null);
    let FNameError = useRef(null)
    let Sec_NameError = useRef(null)
    let EmailError = useRef(null)
    let PhoneError = useRef(null)
    let DegreeError = useRef(null)
    let DomainError = useRef(null)
    let DescError = useRef(null)
    let handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    }
    let imageClick = () => {
        image.current.click();
    }
    let imageChange = (e) => {
        console.log("a gaya");
        const files = e.target.files;
        if (files && files.length > 0) {
            if (files[0].type === 'image/png' || files[0].type === 'image/jpeg' || files[0].type === 'image/jpg') {
                const reader = new FileReader();
                reader.onload = (r) => {
                    setImage(r.target.result);
                };
                reader.readAsDataURL(files[0]);
            }
        }
        console.log(Image);
    };

    let HandleChange = (e) => {
        setLogs({ ...logs, [e.target.name]: e.target.value });
        if (First_Name.current.value !== "")
            FNameError.current.textContent = ''
        if (second_Name.current.value !== "")
            Sec_NameError.current.textContent = ''
        if (Domain.current.value !== "")
            DomainError.current.textContent = ''
        if (Email.current.value !== "")
            EmailError.current.textContent = ''
        if (Phone.current.value !== "")
            PhoneError.current.textContent = ''
        if (Degree.current.value !== "")
            DegreeError.current.textContent = ''
        if (Description.current.value !== "")
            DescError.current.textContent = ''

    }
    let SubmitData = (e) => {
        e.preventDefault();


        existingData = JSON.parse(localStorage.getItem('card')) || [];
        if (First_Name.current.value.trim() === "" || second_Name.current.value.trim() === "" || Domain.current.value.trim() === "" || Email.current.value.trim() === "" || Phone.current.value.trim() === "" || Degree.current.value.trim() === "" || Description.current.value.trim() === "") {// Create a new data object with the form values

            console.log("ghussa")
            if (First_Name.current.value.trim() === "")
                FNameError.current.textContent = 'Please write First name'
            if (second_Name.current.value.trim() === "")
                Sec_NameError.current.textContent = 'Please write Second name'
            if (Domain.current.value.trim() === "")
                DomainError.current.textContent = 'Please write Domain of degree'

            if (Email.current.value.trim() === "")
                EmailError.current.textContent = 'Please write Email First'
            if (Phone.current.value.trim() === "")
                PhoneError.current.textContent = 'Please write Phone Number'
            if (Degree.current.value.trim() === "")
                DegreeError.current.textContent = 'Please write Degree programme'
            if (Description.current.value.trim() === "")
                DescError.current.textContent = 'Please write Description'

        }
        else if (First_Name.current.value.trim() !== "" && second_Name.current.value.trim() !== "" && Domain.current.value.trim() !== "" && Email.current.value.trim() !== "" && Phone.current.value.trim() !== "" && Degree.current.value.trim() !== "" && Description.current.value.trim() !== "") {


            let newData = {
                first_name: First_Name.current.value,
                second_name: second_Name.current.value,
                gender: selectedGender,
                domain: Domain.current.value,
                email: Email.current.value,
                phone: Phone.current.value,
                degree: Degree.current.value,
                description: Description.current.value,
                image: Image
            };

            // Push the new data object to the existingData array
            existingData.push(newData);
            console.log(existingData)
            // Store the updated array in local storage
            localStorage.setItem('card', JSON.stringify(existingData));
            setData(existingData);
            // Clear the form fields
            First_Name.current.value = "";
            second_Name.current.value = "";
            Domain.current.value = "";
            Email.current.value = "";
            Phone.current.value = "";
            Degree.current.value = "";
            Description.current.value = "";
            image.current.value = ""
        }



    }

    return (
        <div>
            <div className="bg-[#232323] w-full h-full py-4 ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-col justify-center items-center gap-y-4">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-blue-600 marker:md:mb-6 lg:text-3xl">
                            Enter Internship Details
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-blue-600 font-sans md:text-lg">
                            Please provide the following details for your internship.we are offering you a internship
                            we are offering internships on different domains and we are giving it to both students
                            and employed persons so please Fill the details.
                        </p>
                    </div>
                    <form className="flex flex-col ssm:gap-y-1 border-2 border-blue-600 bg-[#131212] shadow-sm shadow-black md:w-[70%] justify-center items-center p-3 smd:w-[80%] ssm:w-[85%] sssm:w-[85%]">
                        <div className="flex ssm:flex-row smd:gap-x-2 smd:w-[98%] justify-center items-center p-2 ssm:gap-x-2 ssm:w-[100%] sssm:gap-y-2 sssm:flex-col">

                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%] ">
                                <label htmlFor="F-name " className="text-blue-600 font-sans">First-Name</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-center items-center smd:w-[80%]">
                                    <input type="text" id="F-name" name="F-name" placeholder="First Name" ref={First_Name} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans smd:placeholder:text-sm ssm:w-[100%] sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={FNameError}></p>
                                </div>

                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%] ">
                                <label htmlFor="L-name" className="text-blue-600 font-sans">Last-Name</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-start items-center smd:w-[80%]">
                                    <input type="text" id="L-name" name="L-name" placeholder="Last Name" ref={second_Name} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans smd:placeholder:text-sm ssm:w-[100%] sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={Sec_NameError}></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex ssm:flex-row smd:gap-x-2 smd:w-[98%] justify-center items-center p-2 ssm:gap-x-2 ssm:w-[100%] sssm:gap-y-2 sssm:flex-col">
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%]">
                                <label htmlFor="Email " className="text-blue-600 font-sans">Email</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-center items-center smd:w-[80%]">
                                    <input type="email" id="Email" name="Email" placeholder="Email" ref={Email} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans ssm:w-[100%] smd:placeholder:text-sm sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={EmailError}></p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%]">
                                <label htmlFor="Phone" className="text-blue-600 font-sans">Contact-No</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-center items-center smd:w-[80%]">
                                    <input type="text" id="Phone" name="Phone" placeholder="Your Number" ref={Phone} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans ssm:w-[100%] smd:placeholder:text-sm sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={PhoneError}></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex ssm:flex-row smd:gap-x-2 smd:w-[98%] justify-center items-center p-2 ssm:gap-x-2 ssm:w-[100%] sssm:gap-x-2 sssm:gap-y-2 sssm:flex-col">
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%]">
                                <label htmlFor="Degree " className="text-blue-600 font-sans">Degree Programme</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-center items-center smd:w-[80%]">
                                    <input type="text" id="Degree" name="Degree" placeholder="Degree Programme" ref={Degree} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans ssm:w-[100%] smd:placeholder:text-sm sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={DegreeError}></p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%] ">
                                <label htmlFor="Domain" className="text-blue-600 font-sans ">Internship Domain</label>
                                <div className="flex flex-col md:w-[80%] gap-y-0 justify-center items-center smd:w-[80%]">
                                    <input type="text" id="Domain" name="Domain" placeholder="Domain" ref={Domain} onChange={HandleChange} className="p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans smd:placeholder:text-sm ssm:w-[100%] sssm:w-[100%] ssm:placeholder:text-xs" />
                                    <p className="text-blue-600 text-xs" ref={DomainError}></p>
                                </div>
                            </div>

                        </div>
                        <div className="flex ssm:flex-row smd:gap-x-2 smd:w-[98%] justify-center items-center p-2 ssm:gap-x-2 ssm:w-[100%] sssm:gap-y-2 sssm:flex-col">
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%] sssm:w-[95%]">
                                <label htmlFor="file " className="text-blue-600 font-sans">Upload Image</label>

                                <input type="file" id="file" name="file" ref={image} onClick={imageClick} onChange={imageChange} className="p-2 rounded-md outline-none focus:ring md:w-[80%] bg-white placeholder:text-blue-600 text-blue-600 font-sans smd:placeholder:text-sm ssm:w-[100%] sssm:w-[100%] " />
                            </div>
                            <div className="flex flex-col gap-y-1 justify-center items-center md:w-[50%] ssm:w-[50%] sssm:w-[95%]">

                                <label className="block text-blue-600 font-bold mb-2">Select Gender</label>
                                <div className="flex items-center ssm:gap-x-9 sssm:gap-x-9 ">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="male"
                                            checked={selectedGender === 'male'}
                                            onChange={handleGenderChange}
                                            className="form-radio text-indigo-600 "
                                        />
                                        <span className="ml-2 text-blue-600">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="female"
                                            checked={selectedGender === 'female'}
                                            onChange={handleGenderChange}
                                            className="form-radio text-blue-600 "
                                        />
                                        <span className="ml-2 text-blue-600">Female</span>
                                    </label>
                                </div>

                            </div>

                        </div>

                        <div className="flex ssm:flex-row gap-x-2 w-[100%] justify-center items-center p-2">
                            <div className="flex flex-col gap-y-1 justify-center items-center w-[100%]">
                                <label htmlFor="Skills" className="text-blue-600 font-sans">Status</label>
                                <div className="flex flex-col w-[80%] gap-y-0 justify-center items-center">
                                    <input name="Skills" id="Skills" type="text" ref={Description} onChange={HandleChange} placeholder="Student,Employed" className=" resize-none p-2 rounded-md outline-none focus:ring md:w-[90%] bg-white placeholder:text-blue-600 text-blue-600 font-sans ssm:w-[100%]" />
                                    <p className="text-blue-600 text-xs" ref={DescError}></p>
                                </div>
                            </div>


                        </div>
                        <button className="bg-blue-600 text-white pl-6 pt-2 pb-2 pr-6 rounded-sm font-sans cursor-pointer hover:bg-white hover:text-blue-600 transition-all duration-300 ease-in-out sssm:mt-[20px]" onClick={SubmitData}>Submit</button>
                    </form>
                    <AllCards data={data} src={Image} />

                </div>
            </div >
        </div >
    );
};

export default FormData;
