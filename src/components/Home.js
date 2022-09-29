import styled from 'styled-components';
import logo from "../assets/img/logo.png"

export default function Home({IniciaJogo,statHome}) {



    return (
        <DivHome home={statHome} >
            <ImgHome src={logo}></ImgHome>
            <H1Home>ZapRecall</H1Home>
            <ButtonHome  onClick={IniciaJogo} >Iniciar Recall</ButtonHome>
        </DivHome>
    )
}

const DivHome = styled.div`
    
    
    display: ${props => props.home === "hidden" ? "none" : "flex"};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    background-color: var(--cor-fundo);
    gap: 30px;

`
const ButtonHome = styled.button`
width: 246px;
  height: 54px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;

  :hover {
  background-color: #cea2a0
}

`
const H1Home = styled.h1`
    font-family: "Righteous", cursive;
  font-size: 36px;
  color: white;

`
const ImgHome = styled.img`
width: 150px;
height: 150px;

`