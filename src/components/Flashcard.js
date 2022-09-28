import play from "../assets/img/play-outline-icon.svg"
import check from "../assets/img/checkmark-circle-icon.svg"
import close from "../assets/img/close-circle-icon.svg"
import help from "../assets/img/help-circle-icon.svg"
import giraSeta from "../assets/img/setinha.png"
import React from 'react';


export default function Flashcard({ Quest, Answer, index ,AddCount}) {

    const [statFlash, setFlash] = React.useState("");
    const [statPerg, setPerg] = React.useState("hidden")
    const [statResp, setResp] = React.useState("hidden")
    const [statAbert, setAbert] = React.useState("")
    const [statClassResp, setClassResp] = React.useState("")
    const [color, setColor] = React.useState("")
    const [icon, setIcon] = React.useState(play)
    const [svg, setSvg] = React.useState("")
    



    const AbreFlash = () => {

        setFlash("hidden");
        setPerg("");
        setAbert("aberto")
    }

    const ViraFlash = () => {

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
        AddCount();
        

        switch (classe) {
            case "error":
                setIcon(close);
                setSvg("svgError");
               
                break;
            case "almost":
                setIcon(help);
                setSvg("svgAlmost");
                
               
                break;
            case "zap":
                setIcon(check);
                setSvg("svgZap");
               
                break;
            default:
                break;
        }


    }

    return (
        <div className={`flashcard  ${statAbert} ${statClassResp}`} >
            <p className={`${statFlash} `} id={color}>Pergunta {index + 1}  </p>
            <img onClick={AbreFlash} className={`icone ${statFlash} ${svg}`} alt="play-icone" src={icon} ></img>

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
                <div className='btnResp'>
                    <button onClick={() => BtnVerify("error")} className='error'>
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