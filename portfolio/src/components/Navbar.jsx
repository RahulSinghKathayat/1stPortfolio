import React,{useState} from "react";

import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

import { Link } from 'react-scroll'

const Navbar = () =>{

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300">
            <div>
                <h1 className="font-thin text-2xl italic font-serif">RSK</h1>
            </div>

            <ul className="hidden md:flex gap-x-8">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="works" smooth={true} duration={500}>Works</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
            </div>

            <ul className={!nav? 'hidden':'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-content items-center'}>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="py-6 text-4xl"> <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="works" smooth={true} duration={500}>Works</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-40 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="https://linkedin.com" className="flex justify-between items-center w-full text-gray-300 px-4">
                        Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>

                    <li className="w-40 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-gray-900">
                        <a href="https://github.com" className="flex justify-between items-center w-full text-white px-4">
                        Github <FaGithub size={30} /></a>
                    </li>

                    <li className="w-40 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-red-700">
                        <a href="https://gmail.com" className="flex justify-between items-center w-full text-gray-300 px-4">Gmail <FaEnvelope size={30}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar