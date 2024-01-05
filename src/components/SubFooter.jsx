import { Link } from "react-router-dom"

function SubFooter() {
    return (
        <aside className="flex items-center justify-center flex-col md:py-24 py-10">
            <h2 className="text-center md:text-5xl sm:text-2xl text-xl md:font-extrabold font-bold bg-clip-text" style={{ lineHeight: "inherit" }}>Team Up for Triumph!</h2>
            <Link to="/hire-8ase" className="">
                <button
                    className="bg-black text-white hidden lg:flex items-center justify-center rounded-[2rem] text-sm font-light px-6 py-3 mt-5 hover:-translate-y-2 hover:shadow-[0px_3px_10px_black] hover:bg-white hover:text-black ease-in-out duration-300 group"
                >
                    <svg width="16px" height="16px" className="group-hover:bg-black rounded-full ease-in-out duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg> <span className="ms-2 font-medium">HIRE 8ASE</span>
                </button>
            </Link>
        </aside>
    )
}

export default SubFooter