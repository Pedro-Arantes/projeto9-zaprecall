import play from "../assets/img/play-outline-icon.svg"
import check from "../assets/img/checkmark-circle-icon.svg"
import close from "../assets/img/close-circle-icon.svg"
import help from "../assets/img/help-circle-icon.svg"
import giraSeta from "../assets/img/setinha.png"
import styled from 'styled-components';
import React from 'react';


export default function Flashcard({ Quest, Answer, index, AddCount }) {

    const [statFlash, setFlash] = React.useState("");
    const [statPerg, setPerg] = React.useState("hidden")
    const [statResp, setResp] = React.useState("hidden")
    const [statAbert, setAbert] = React.useState("")
    const [statClassResp, setClassResp] = React.useState("")
    const [color, setColor] = React.useState("")
    const [icon, setIcon] = React.useState(play)
    const [svg, setSvg] = React.useState("")
    const [conta, setConta] = React.useState(0)




    const AbreFlash = () => {
        if (conta === 1) {

        } else {
            setFlash("hidden");
            setPerg("");
            setAbert("aberto")
            setConta(1)
        }

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
    //className={`flashcard  ${statAbert} ${statClassResp}`}
    return (
        <FlashCard className={`flashcard  ${statAbert} ${statClassResp}`}>
            <p className={`${statFlash} `} id={color}>Pergunta {index + 1}  </p>
            <img onClick={() => AbreFlash()} className={`icone ${statFlash} ${svg}`} alt="play-icone" src={icon} ></img>

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
                <BtnResp>
                    <Button onClick={() => BtnVerify("error")} cor="#FF3030">
                        Não Lembrei
                    </Button>
                    <Button onClick={() => BtnVerify('almost')} cor='#FF922E'>
                        Quase não Lembrei
                    </Button>
                    <Button onClick={() => BtnVerify('zap')} cor=' #2FBE34'>
                        Zap!
                    </Button>
                </BtnResp>
            </div>
        </FlashCard>
    )
}

const Button = styled.button`

    width: 100%;
    height: 37px;
    background-color: ${props => props.cor};
    color: white;

    font-size: 12px;
    font-weight: 400;
    font-family: 'Recursive', cursive;

    border-radius: 4px;
    border-style: none;

    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
    filter: brightness(0.7)
    }
       

`

const BtnResp = styled.div`
    display: flex;
    gap: 10px;
`
const FlashCard = styled.div`

    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive', cursive;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);



  &.aberto {
    min-height: 130px;
    display: flex;
    flex-direction: column;
    
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px;
  }

  &.aberto div {
    width: 100%;
    
    display: flex;
    justify-content: flex-end;
  }

  &.aberto  > .hidden{
    display: none;
  }

  &.aberto > .divPergunta{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  div > .divPergunta{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  
  
  
  &.aberto.resposta  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &.aberto img {
    cursor: pointer;
  }

  &.aberto.resposta   > .respDiv{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

img.icone {
  color: var(--preto);
  width: 23px;
  height: 23px;
}

 .icone svg {
  width: 23px;
  height: 23px;
}

#hidden{
    display: none;
}
.hidden{
    display: none;
}

#error{
    color:var(--cor-nao-lembrei);
    text-decoration: line-through;
    
}
#almost{
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
    
}

#zap{
    color: var(--cor-zap);
    text-decoration: line-through;
    
}

.svgError{
    filter: invert(31%) sepia(94%) saturate(3050%) hue-rotate(342deg) brightness(102%) contrast(108%);
}

.svgAlmost{
    filter: invert(72%) sepia(18%) saturate(5162%) hue-rotate(335deg) brightness(100%) contrast(106%);
}

.svgZap{
    filter: invert(59%) sepia(10%) saturate(3410%) hue-rotate(72deg) brightness(99%) contrast(88%);
}

`