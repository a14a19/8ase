import { Typography } from "@material-tailwind/react";
import baseIcon from "../assets/8ase.png";
import { Link } from "react-router-dom";

const SITEMAP = [
    {
        title: "About Us",
        links: [{ name: "Privacy Policy", link: "" }, { name: "Contact Us", link: "" }],
    },
    // {
    //     title: "For Companies",
    //     links: ["Hire Engineers", "How to work with us", "Our Clients", "FAQs"],
    // },
    // {
    //     title: "For Engineers",
    //     links: ["Apply For Jobs", "Unleash+", "Season", "8-Outposts"],
    // },
    {
        title: "Connect",
        links: [{ name: "LinkedIn", link: "https://www.linkedin.com/company/8ase" }, { name: "Threads", link: "https://www.threads.net/@8ase_team" }, { name: "Instagram", link: "https://www.instagram.com/8ase_team/" }],
    },
];

// const currentYear = new Date().getFullYear();
const currentYear = "2021";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0c0c0c] mt-20">
            <div className="mx-auto w-full px-12">
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <Typography
                            variant="small"
                            className="flex items-center justify-start mb-4 font-normal text-[#8f8f8f] md:mb-0"
                        >
                            <img src={baseIcon} alt="" className="h-9 aspect-square rounded-lg" />
                            <span className="text-white text-3xl font-black">ASE</span>
                        </Typography>
                    </div>
                    {SITEMAP.map(({ title, links }, key) => (
                        <div key={key} className="w-full">
                            <Typography
                                variant="small"
                                color="white"
                                className="mb-4 font-semibold uppercase"
                            >
                                {title}
                            </Typography>
                            <ul className="space-y-1">
                                {links.map((link, key) => (
                                    <Typography key={key} as="li" color="gray" className="font-normal text-[#8f8f8f]">
                                        <Link
                                            to={link.link}
                                            className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                            title={title == "Connect" && "_Blank"}
                                        >
                                            {link.name}
                                        </Link>
                                    </Typography>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-10 md:flex-row md:justify-between">

                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-[#8f8f8f] md:mb-0"
                    >
                        &copy; {currentYear} All Rights Reserved.
                    </Typography>
                </div>
            </div>
        </footer>
    );
}