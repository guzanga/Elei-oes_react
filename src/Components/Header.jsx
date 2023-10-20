import Hstyle from "./Header.modules.css"
function Header (){
    return(
        <div className="display">
            <div className="imgspcentro">
                <img className='imgs' src="/VotoIcon2.png"/>
            </div>
            <h1 className="texto">Votação do povo 2023</h1>
            <div className="imgspcentro">
                <img className='imgs' src="/VotoIcon2.png"/>
            </div>
        </div>
    )
}

export default Header