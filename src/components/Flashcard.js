import play from "../assets/img/play-outline-icon.svg"
import giraSeta from "../assets/img/setinha.png"
import React from 'react';


export default function Flashcard({ Quest, Answer, index }) {

    const [statFlash, setFlash] = React.useState("");
    const [statPerg, setPerg] = React.useState("hidden")
    const [statResp, setResp] = React.useState("hidden")
    const [statAbert, setAbert] = React.useState("")
    const [statClassResp, setClassResp] = React.useState("")
    const [color, setColor] = React.useState("")

    const AbreFlash = () => {
        alert("O inicio de tudo!!!")
        setFlash("hidden");
        setPerg("");
        setAbert("aberto")
    }

    const ViraFlash = () => {
        alert("O meio de tudo!!!")
        setClassResp("resposta")
        setPerg('hidden')
        setResp("")
    }

    const BtnVerify = (classe) => {

        setClassResp("")
        setAbert("")
        setFlash("");
        setResp("hidden")
        setColor(classe)
        console.log(classe)
        
        

    }

    return (
        <div className={`flashcard  ${statAbert} ${statClassResp}`} >
            <p className={`${statFlash} ${color}`}>Pergunta {index + 1}  </p>
            <img onClick={AbreFlash} className={`icone ${statFlash}`} alt="play-icone" src={play} ></img>

            <div className='divPergunta' id={statPerg}>
                <p className=''>{Quest} </p>
            </div>

            <div className='' id={statPerg}>
                <img onClick={ViraFlash} className='' alt="icone-seta-gira" src={giraSeta}></img>
            </div>

            <div className={`respDiv ${statResp}`}>
                <div>
                    <p className='divPergunta'>{Answer} </p>
                </div>
                <div onClick={() => BtnVerify("error")} className='btnResp'>
                    <button className='error'>
                        Não Lembrei
                    </button>
                    <button onClick={() => BtnVerify('almost')} className='almost'>
                        Quase não Lembrei
                    </button>
                    <button onClick={() => BtnVerify('zap')} className='zap'>
                        Zap!
                    </button>
                </div>
            </div>
        </div>
    )
}