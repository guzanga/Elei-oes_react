import {useState} from "react";
import Vstyles from "./Voto.modules.css"

function Voto(){

    const [Voto1, setVoto1] = useState(0)
    const [Voto2, setVoto2] = useState(0)
    const [Voto3, setVoto3] = useState(0)
    const [Voto4, setVoto4] = useState(0)
    const [calcular,setCalcular] = useState("")

    function som() {
        let audio = new Audio("/urna2.mp3")
        audio.play()
    }

    function clicou1(){
        setVoto1(Voto1 + 1)
        som()
    }

    function clicou2(){
        setVoto2(Voto2 + 1)
        som()
    }

    function clicou3(){
        setVoto3(Voto3 + 1)
        som()
    }

    function clicou4(){
        setVoto4(Voto4 + 1)
        som()
    }

    function calc(){
        if (Voto1 > Voto2) {
            if (Voto1 > Voto3) {
                if (Voto1 > Voto4) {
                    setCalcular("Caue")
                }
                else {
                    setCalcular("Murilo")
                }
            }
            else {
                if (Voto3 > Voto4) {
                    setCalcular("Luiz")
                } else {
                    setCalcular("Murilo")
                }
            }
        } else {
            if(Voto2 > Voto3) {
                if(Voto2 > Voto4) {
                    setCalcular("Gustavo")
                } else {
                    setCalcular("Murilo")
                }
            } else {
                if(Voto3 > Voto4) {
                    setCalcular("Luiz")
                } else {
                    setCalcular("Murilo")
                }
            }
        }
    }


    return(
        <div className="todo">
            <div>
                <div className="divisao1">
                    <div className="candidatos">
                        <div>
                            <img className="fotos"  src="/CiroGomes.jpg"/>
                        </div>

                        <div>
                            <h2>Cauê(Ciro Gomes)</h2>
                            <p>PDT</p>
                            <button className="botao" onClick={clicou1}>Votar</button>
                        </div>

                    </div>
                    <div className="candidatos">
                        <div>
                            <img className="fotos"  src="/bol.jpg"/>
                        </div>

                        <div>
                            <h2>Gustavo(Bolsonaro)</h2>
                            <p>PL</p>
                            <button className="botao"  onClick={clicou2}>Votar</button>
                        </div>

                    </div>
                </div>

                <div className="divisao2">
                    <div className="candidatos">
                        <div>
                            <img className="fotos"  src="/Picsart_23-10-20_15-41-08-253.jpg"/>
                        </div>

                        <div>
                            <h2>Luiz(Lula)</h2>
                            <p>PT</p>
                            <button className="botao"  onClick={clicou3}>Votar</button>
                        </div>

                    </div>
                    <div className="candidatos">
                        <div>
                           <img className="fotos" src="/mu.jpg"/>
                        </div>

                        <div>
                            <h2>Murilo(Padre Kelmon)</h2>
                            <p>PTB</p>
                            <button className="botao"  onClick={clicou4}>Votar</button>
                        </div>

                    </div>
                </div>

            </div>
            <h2>O ganhador é: {calcular} </h2>
            <button className="botaozinho" onClick={calc}>Finalizar votação</button>

        </div>
    )

}

export default Voto