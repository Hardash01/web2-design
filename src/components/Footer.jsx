
const Footer = () => {
  return (
      <footer className="max-w-screen-xl md:flex flex-wrap items-center justify-center md:justify-between mx-auto md:w-11/12 lg:w-11/12 p-3 md:pl-0 mb-12">
        <div>
          <a href='#' className="flex items-center py-2">
            <img
                className="h-12 w-auto"
                src="./public/logo.png"
                alt="logo"
            />
          </a>
          
          <ul className="flex gap-3 items-center py-2 pr-4 mt-3">
            <li>
                <a target="_blank" href="#">
                    <img className='w-5 h-5' src="/email.svg" alt="email" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#">
                    <img className='w-5 h-5' src="/facebook.svg" alt="facebook" />
                </a>
            </li>
            <li>
                <a target="_blank" href="#">
                    <img className='w-5 h-5' src="/twitter.svg" alt="twitter" />
                </a>
            </li>
          </ul>
        </div>

        <div className="md:flex gap-10">
          <div>
            <ul>
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
              <li>
                <a href="#" className="uppercase block py-2 pr-4 pl-3 text-white rounded transition duration-300 hover:bg-grisclaro2 md:p-1">
                    Mas
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mt-8 md:mt-0 text-center">Creado por IDigitalStudios 2023</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer