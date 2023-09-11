
const Content = () => {
    return (
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:w-11/12 lg:w-11/12 p-3 md:pl-0">
        <div className="lg:flex items-center gap-8 mb-16 md:mb-20">
          <div className="lg:w-7/12">
            <img 
            className="lg:h-screen object-cover object-center mt-8"
            src="/img1.jpg" alt="imagen sobre" />
          </div>
          <div className="lg:w-5/12 mt-5 ">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">Diseño Increible</h1>
            <p className="text-grisclaro text-3xl md:text-2xl mt-6">Ubicado en la costa, el Hotel Serenity Oasis es un refugio de lujo donde la elegancia se encuentra con la naturaleza. </p>

            <div className="mt-10">
              <a className="py-3 px-8 mr-2 text-white text-base font-medium bg-grisclaro2 transition duration-300 hover:bg-gris" href="#">
                Leer mas
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center gap-8 mb-16 md:mb-20">
          <div className="lg:w-5/12 mt-5 ">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">Hacer un recorrido</h1>
            <p className="text-grisclaro text-3xl md:text-2xl mt-6">Nuestras habitaciones y suites exquisitamente decoradas ofrecen vistas panorámicas al mar, balcones privados y comodidades de clase mundial.</p>

            <div className="mt-10">
              <a className="py-3 px-8 mr-2 text-white text-base font-medium bg-grisclaro2 transition duration-300 hover:bg-gris" href="#">
                Leer mas
              </a>
            </div>
          </div>
          <div className="lg:w-7/12">
            <img 
            className="lg:h-screen object-cover object-center mt-8"
            src="/img2.jpg" alt="imagen recorrido" />
          </div>
        </div>

        <div className="lg:flex items-center gap-8 mb-16 md:mb-20">
          <div className="lg:w-7/12">
            <img 
            className="lg:h-screen object-cover object-center mt-8"
            src="/img3.jpg" alt="imagen servicios" />
          </div>
          <div className="lg:w-5/12 mt-5 ">
            <h1 className="text-white text-4xl md:text-5xl font-semibold">Servicios</h1>
            <p className="text-grisclaro text-3xl md:text-2xl mt-6">Disfruta de la tranquilidad junto a la piscina, degusta la cocina gourmet en nuestro restaurante frente al mar y relájate en nuestro spa de clase mundial.</p>

            <div className="mt-10">
              <a className="py-3 px-8 mr-2 text-white text-base font-medium bg-grisclaro2 transition duration-300 hover:bg-gris" href="#">
                Leer mas
              </a>
            </div>
          </div>
        </div>

        <div className="lg:flex items-center gap-32 mb-16 md:mb-20">
          <div className="lg:w-1/2">
            <p className="text-white text-4xl md:text-4xl font-semibold">"No imagino un lugar mas moderno por este precio"</p>
            <p className="text-white text-3xl md:text-2xl mt-6">-The Leonel.</p>
          </div>
          <div className="lg:w-1/2 mt-5 ">
            <p className="text-white text-4xl md:text-4xl font-semibold">"Si pudiera vivir alli, lo haria. y creanme que lo pregunte".</p>
            <p className="text-white text-3xl md:text-2xl mt-6">-Mark</p>
          </div>
        </div>
      </div>
    )
}

export default Content