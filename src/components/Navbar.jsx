import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="w-full bg-[#ffffff]  fixed z-10 h-16 flex justify-between items-center px-10 font-Verdana shadow-xl ">
            <div className="logo  text-base tracking-widest text-blue-700 font-bold">
                <a href="/">JYOTIRMAY</a>
            </div>

            <div>
                <ul className={`dropdown_list bg-[#cfcbcb7d] absolute top-16 left-0 w-full gap-3 md:static md:flex md:flex-row md:bg-transparent md:right-0 md:space-x-20 ${isDropdownOpen ? '' : 'hidden'}`}>
                    <li className="py-3 text-center text-lg tracking-widest"><a href="/">About</a></li>
                    <li className="py-3 text-center text-lg tracking-widest"><a href="/">Skills</a></li>
                    <li className="py-3 text-center text-lg tracking-widest"><a href="/">Projects</a></li>
                    <li className="py-3 text-center text-lg tracking-widest"><a href="/">Contact Me</a></li>
                </ul>
            </div>

            <div className="menu cursor-pointer md:hidden " onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
