
const Landing = () => {
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:w-11/12 lg:w-11/12 p-3 md:pl-0 mb-20">
            <div>
                <div className="mt-5">
                    <h1 className="text-white text-5xl md:text-6xl font-bold">Diseño Increible.</h1>
                    <p className="text-white text-5xl md:text-6xl font-bold">Servicio Extraordinario.</p>
                </div>

                <img 
                className="w-full mt-8"
                src="/landingimg.jpg" alt="imagen landing" />
            </div>
        </div>
    )
}

export default Landing