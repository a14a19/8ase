import { useState } from "react";

function HireXTeam() {
    const [selectedSkill, setSelectedSkill] = useState('');
    const [email, setEmail] = useState('');
    const [selectedSource, setSelectedSource] = useState('');

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSourceChange = (event) => {
        setSelectedSource(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted:', { selectedSkill, email, selectedSource })

    };

    return (
        <div className="mt-20">
            <div className="pt-9 justify-center">
                <h1 className="text-black font-['Inter'] tracking-tighter text-left md:text-center font-extrabold border-none text-5xl md:text-6xl mb-5 md:mb-10 px-4 md:px-10">LETS SCALE YOUR ENGINEERING TEAM.</h1>
            </div>
            <div className="justify-center mb-5 md:mb-10 px-4 md:px-60">
                <form className="pt-6 font-['Inter'] text-left md:text-left ">
                    <label for="Skills" className="pt-6 font-['Inter'] block mb-2 text-xl font-bold text-gray-900 dark:text-white">SELECT THE SKILLS YOU NEED </label>
                    <select id="Skills" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option value="Amazon Web Services (AWS)">Amazon Web Services (AWS)</option>
                        <option value="React">React</option>
                        <option value="Node">Node</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="Kubernetes">Kubernetes</option>
                    </select>
                    <br />

                    <div className="flex flex-row ">
                        <div className="basis-1/2 items-stretch pr-2">
                            <label className="  pt-6 font-['Inter'] block mb-2 text-xl font-bold text-gray-900  pb-4 dark:text-white">
                                YOUR WORK EMAIL
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  pb-4 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="email"
                                    id="login">
                                </input>
                            </label>

                        </div>
                        <div className="basis-1/2 items-stretch pl-2">
                            <label for="countries" className=" font-['Inter'] pt-6 block mb-2 text-xl font-bold text-gray-900 dark:text-white">SELECT THE SKILLS YOU NEED </label>
                            <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pb-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="Website">Website</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Clutch">Clutch</option>
                                <option value="Referal">Referal</option>
                                <option value="Youtube">Youtube</option>
                            </select>

                        </div>




                    </div>



                    <br />

                    <div>
                        <button class="px-24 py-3 md:px-5 md:py-2 text-base md:text-lg text-white font-semibold bg-black rounded-full border border-black-200 hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring-black-600 focus:ring-offset-2" type="submit">Submit</button>
                    </div>




                </form>
            </div>


        </div>
    );

}
export default HireXTeam;