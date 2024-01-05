import { useState } from "react";
import logo1 from '../assets/client-logo/bankiy.jpeg';
import logo2 from '../assets/client-logo/bold.jpeg';
import logo3 from '../assets/client-logo/famwork.jpeg';
import logo4 from '../assets/client-logo/nake.jpeg';
import logo5 from '../assets/client-logo/Worko.jpg';
import Select from 'react-select';

function HireBaseTeam() {

    const skillOptions = [
        { value: 'Amazon Web Services', label: 'Amazon Web Services (AWS)' },
        { value: 'Node', label: 'Node' },
        { value: 'Python', label: 'Python' },
        { value: 'SQL', label: 'SQL' },
        { value: 'Java', label: 'Java' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'C#', label: 'C#' },
        { value: 'React', label: 'React' },
        { value: 'GraphQL', label: 'GraphQL' },
        { value: 'Kubernetes', label: 'Kubernetes' },
        { value: 'Azure', label: 'Azure' },
        { value: 'PHP', label: 'PHP' },
        { value: 'Devops', label: 'Devops' },
        { value: 'iOS', label: 'iOS' },
        { value: 'Rest API', label: 'Rest API' },
        { value: 'Swift', label: 'Swift' },
        { value: 'Kotlin', label: 'Kotlin' }
    ]
    const sourceOptions = [
        { value: 'Website', label: 'Website' },
        { value: 'LinkedIn', label: 'LinkedIn' },
        { value: 'Youtube', label: 'Youtube' },
        { value: 'Clutch', label: 'Clutch' },
        { value: 'Referal', label: 'Referal' },
        { value: 'Search', label: 'Search' },
        { value: 'Other', label: 'Other' },

    ]

    const [transData, setTransData] = useState({ skill: [], email: "", source: {} });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(transData);


        // await dispatch(transTypeCreateApi({
        //     body: {
        //         skill: transData.skill,
        //         email: transData.email,
        //         source: transData.source,

        //     }, params: { skill: transData.skill, email: transData.email, source: transData.source, }, options: user.token
        // }))
        // setTimeout(() => {
        //     navigate("/")
        // }, 1500)
    }

    return (
        <div className="mt-20">
            <div className="pt-9 justify-center">
                <h1 className="text-black font-['Inter'] tracking-tighter text-left
                 md:text-center font-extrabold border-none text-5xl md:text-6xl
                  mb-5 md:mb-10 px-4 md:px-10">LET'S SCALE YOUR ENGINEERING TEAM.</h1>
            </div>
            <div>


            </div>
            <div className="justify-center mb-5 md:mb-10 px-4 lg:px-60">
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="pt-6 font-['Inter'] text-left md:text-left ">
                    <div className="pl-2 md:pl-0 ">
                        <label
                            htmlFor="Skills"
                            className=" pt-6 font-['Inter'] block mb-2 text-xl
                        font-bold text-gray-900 dark:text-white">
                            SELECT THE SKILLS YOU NEED
                        </label>
                        <Select
                            closeMenuOnSelect={false}
                            isMulti
                            onChange={(e) => setTransData({ ...transData, skill: e })}
                            name="team"
                            options={skillOptions}
                            className="basic-multi-select bg-gray-50  "
                            classNamePrefix="select"
                        />

                        {/* <select
                            id="Skills"
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="Amazon Web Services (AWS)">Amazon Web Services (AWS)</option>
                            <option value="React">React</option>
                            <option value="Node">Node</option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="Kubernetes">Kubernetes</option>
                        </select> 
                        
                        
                        */}

                    </div>

                    <br />

                    <div className="flex lg:flex-row flex-col ">
                        <div className="basis-1/2 items-stretch pl-2 md:pl-0 ">
                            <label
                                className="  pt-6 font-['Inter'] block mb-2 text-xl font-bold 
                                text-gray-900  pb-4 ">
                                YOUR WORK EMAIL
                                <input
                                    className="bg-white border border-gray-400
                                    text-gray-900 text-sm rounded-sm focus:ring-blue-500
                                    focus:border-blue-500 block w-full px-2.5 py-2 "
                                    placeholder="Your Email ID..."
                                    onChange={(e) => setTransData({ ...transData, email: e.target.value })}
                                    id="email"
                                    type="email"
                                />
                            </label>

                        </div>
                        <div className="basis-1/2 items-stretch pl-2 md:pl-0 lg:pl-2">
                            <label
                                htmlFor="source"
                                className=" font-['Inter'] pt-6 block text-xl font-bold
                                text-gray-900 dark:text-white">
                                HOW DID YOU HEAR ABOUT US?
                            </label>
                            <Select
                                closeMenuOnSelect={false}
                                onChange={(e) => setTransData({ ...transData, source: e })}
                                name="team"
                                options={sourceOptions}
                                className="basic-multi-select bg-gray-50 "
                                classNamePrefix="select"
                            />
                            {/* <select
                                id="source"
                                onChange={(e)=>setTransData({...transData, source:e.target.value})}
                                className="bg-white border border-gray-300
                                text-gray-900 text-sm rounded-sm focus:ring-blue-500
                                focus:border-blue-500 block w-full p-2.5  ">
                                <option value="Website">Website</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Clutch">Clutch</option>
                                <option value="Referal">Referal</option>
                                <option value="Youtube">Youtube</option>
                            </select> */}

                        </div>

                    </div>

                    <br />
                    <div className="flex lg:flex-row flex-col justify-between">
                        <div>
                            <button
                                className="px-24 py-3 md:px-5 md:py-2 text-base md:text-lg text-white 
                                font-semibold bg-black rounded-full border border-black-200 hover:text-black
                                hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-black-600
                                focus:ring-offset-2"
                                type="submit">
                                Submit
                            </button>
                        </div>

                        <div className="flex flex-row mt-6 lg:mt-0 overflow-hidden items-stretch">
                            <img className="rounded-lg mx-0 lg:mx-8 h-20 w-20 filter grayscale drop-shadow-md" src={logo1} alt="Client Logo1" />
                            <img className="rounded-lg mx-8 h-20 w-20 filter grayscale drop-shadow-md" src={logo2} alt="Client Logo2" />
                            <img className="rounded-lg mx-8 h-20 w-20 filter grayscale drop-shadow-md" src={logo3} alt="Client Logo3" />
                            <img className="rounded-lg mx-8 h-20 w-20 filter grayscale drop-shadow-md" src={logo4} alt="Client Logo4" />
                            <img className="rounded-lg mx-8 h-20 w-20 filter grayscale drop-shadow-md lg:mr-0" src={logo5} alt="Client Logo5" />
                        </div>

                    </div>

                </form>
            </div>


        </div>
    );

}
export default HireBaseTeam;