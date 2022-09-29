import logo from "../assets/img/logo.png"
import styled from 'styled-components';

export default function Header({statHome}) {

    return (
        <HeaderStyle home={statHome}>
            <div>
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
            </div>
        </HeaderStyle>
    )


}

const HeaderStyle = styled.header`
	position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: ${props=>props.home === "" ? "none": "flex"};
    justify-content: center;
    align-items: center;
    
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    div {
    margin-top: 60px;

    display: flex;
    align-items: center;
    gap: 20px;
    }

    img {
    width: 52px;
    height: 60px;
    }

    h1{
        font-weight: 400;
    }
`;