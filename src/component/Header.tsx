

export default function Header() {
    return <><header style={{ overflow: "auto" }}>

        <div className="main-content flex p-4 ">
            <div>
                <a href="https://www.buenosaires.gob.ar/" className="navbar-brand">
                    <img width="74" className="header-logo" src="https://gcba.github.io/Obelisco/header/header-logo.svg" alt="Ciudad de buenos aires" /></a>
                    <strong className="text-sm">* No Oficial</strong>
            </div>

            <div className="flex-1 text-right md:text-center " style={{color:"#27B7EA"}}>


                <h1 className="text-2xl">Simulador de Test Teórico de conducción</h1>
                <h2>Argentina. <strong>CABA</strong>. Categoría B.</h2>

            </div>
        </div>

    </header>
        <div className="source-bar">
             <a href="https://github.com/bandinopla/simulador-test-de-conducir" target="_blank">Código Abierto </a> &nbsp;←  &nbsp;Podés colaborar para ayudar a formar mejores conductores y salvar vidas!
        </div>
    </>
}