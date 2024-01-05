import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import baseIcon from "../assets/8ase.png";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(false)
    const location = useLocation()

    const handleClick = () => {
        if (location.pathname === "/") {
            setCurrentPage(true)
            setTimeout(() => {
                setCurrentPage(false)
            }, 0)
        }
    }

    React.useLayoutEffect(() => {

        return () => window.scrollTo({
            top: 0,
            opacity: 0,
            behavior: "smooth",
        });

    }, [currentPage])

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            {/* <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/engineers" className="uppercase flex items-center">
                    for engineers
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="uppercase flex items-center">
                    for clients
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center uppercase">
                    blogs
                </a>
            </Typography> */}
        </ul>
    );

    return (
        <header className="max-h-[768px] fixed top-0 left-0 right-0 z-20">
            <Navbar className="h-max max-w-full rounded-none px-4 py-2 lg:px-10 lg:py-2 shadow-none">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as={Link}
                        to="/"
                        onClick={() => handleClick()}
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src={baseIcon} alt="" className="h-10 aspect-square rounded-lg" />
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Link to="/hire-8ase">
                                <Button
                                    variant="filled"
                                    size="sm"
                                    className="hidden lg:flex items-center justify-center rounded-[2rem] text-sm font-light px-6 py-3"
                                >
                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg> <span className="ms-2">HIRE 8ase</span>
                                </Button>
                            </Link>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <Link to="/hire-8ase" className="flex items-center gap-x-1">
                        <Button fullWidth variant="filled" size="sm" className="flex items-center justify-center">
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg> <span className="ms-2">HIRE 8ase</span>
                        </Button>
                    </Link>
                </Collapse>
            </Navbar>
        </header>
    );
}