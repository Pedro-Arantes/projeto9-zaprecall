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
            case "#FF3030":
                setIcon(close);
                setSvg("svgError");

                break;
            case "#FF922E":
                setIcon(help);
                setSvg("svgAlmost");


                break;
            case "#2FBE34":
                setIcon(check);
                setSvg("svgZap");

                break;
            default:
                break;
        }


    }
    //div className='divPergunta' id={statPerg}
    return (
        <FlashCard  aberto={statAbert} className={`flashcard   ${statClassResp}`}>
            <PadraoP flash={statFlash} color={color}>Pergunta {index + 1}  </PadraoP>
            <ImgPlay onClick={() => AbreFlash()} className={svg} flash={statFlash} alt="play-icone" src={icon} ></ImgPlay>

            <DivPergunta id= {statPerg}>
                <p>{Quest} </p>
            </DivPergunta>

            <DivSetaGira aberto={statAbert} id={statPerg}>
                <ImgGiraSeta onClick={ViraFlash} alt="icone-seta-gira" src={giraSeta}></ImgGiraSeta>
            </DivSetaGira>

            <DivPadrao resp={statResp}>
                <div>
                    <PerguntaP>{Answer} </PerguntaP>
                </div>
                <BtnResp>
                    <Button onClick={() => BtnVerify("#FF3030")} cor="#FF3030">
                        Não Lembrei
                    </Button>
                    <Button onClick={() => BtnVerify('#FF922E')} cor='#FF922E'>
                        Quase não Lembrei
                    </Button>
                    <Button onClick={() => BtnVerify('#2FBE34')} cor=' #2FBE34'>
                        Zap!
                    </Button>
                </BtnResp>
            </DivPadrao>
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

const DivPergunta = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`
const PerguntaP = styled.p`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`
const PadraoP = styled.p`

display: ${props=>props.flash=== "hidden" ?  "none" : "flex"};
color: ${props=> props.color};
text-decoration:${props=> props.color !== "" ? "line-through": ""} ;
`
const DivPadrao = styled.div`
display: ${props=>props.resp=== "hidden" ?  "none" : "flex"}  ;
flex-direction: column;
justify-content: space-between;
gap: 20px;

`
const DivSetaGira = styled.div`

    width: 100%;
    
    display: flex;
    justify-content:  ${props=>props.aberto === "aberto" ?  "flex-end" : ""}  ;
`
const ImgGiraSeta = styled.img`
    color: var(--preto);
`
const ImgPlay = styled.img`
    color: var(--preto);
  width: 23px;
  height: 23px;
  display: ${props=>props.flash === "hidden" ?  "none" : ""};
`
const FlashCard = styled.div`

    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: ${props=>props.aberto === "aberto" ?  "column" : "row"};
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: ${props=>props.aberto === "aberto" ?  "20px 10px" : "10px 10px"};
    min-height: ${props=>props.aberto === "aberto" ?  "130px" : "50px"};
    cursor: ${props=>props.aberto === "aberto" ?  "default" : "pointer"};
    font-family: 'Recursive', cursive;

    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

#hidden{
    display: none;
}
.hidden{
    display: none;
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