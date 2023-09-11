import { useState } from "react"
import { MenuIcon, XIcon } from "./Icons"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    };

    return (
        <nav className="bg-grisoscuro relative">
            <div 
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:w-11/12 lg:w-11/12 p-3 md:pl-0"
            >
                <a href='#' className="flex items-center py-2">
                    <img
                        className="h-12 w-auto"
                        src="/public/logo.png"
                        alt="logo"
                    />
                </a>
                <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen}
                >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                    <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
                ) : (
                    <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
                )}
                </button>
                <div
                    className={`absolute top-full left-0 px-1 py-1 w-full md:w-auto ${
                        isMenuOpen ? 'block' : 'hidden'
                    } transition-all duration-500 ease-in-out bg-grisoscuro md:flex md:items-center md:space-x-8  md:relative md:bg-transparent`}
                    id="navbar-default"
                >
                    <ul className="flex md:items-center flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-3 md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href='#' className="uppercase block py-2 pr-4 pl-3 text-white font-bold rounded transition duration-300 hover:bg-grisclaro2 md:p-1">
                                Acerca
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase block py-2 pr-4 pl-3 text-white rounded transition duration-300 hover:bg-grisclaro2 md:p-1">
                                Recorrido
                            </a>
                        </li>
                        <li>
                            <a href="#" className="uppercase block py-2 pr-4 pl-3 text-white rounded transition duration-300 hover:bg-grisclaro2 md:p-1">
                                Servicios
                            </a>
                        </li>

                        <div className='flex gap-3 items-center py-2 pr-4 pl-3'>
                            <li>
                                <a target="_blank" href="#">
                                    <img className='w-5 h-5' src="/email.svg" alt="email" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img className='w-5 h-5' src="/facebook.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img className='w-5 h-5' src="/twitter.svg" alt="" />
                                </a>
                            </li>
                        </div>

                        <div className="flex items-center py-2 pr-4 pl-3">
                            <a className="py-3 px-8 mr-2 text-white text-base font-medium bg-grisclaro2 rounded border transition duration-300 hover:bg-gris" href="#">
                                Haz una reservacion
                            </a>
                        </div>

                    </ul>

                </div>
            </div>
    </nav>
    )
}

export default Header