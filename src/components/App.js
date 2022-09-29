import React from 'react';
import deck1 from "./deck1";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import styled from 'styled-components';
import Home from './Home';

export default function App() {

    const [contador, setContador] = React.useState(0)
    const [statHome, setHome] = React.useState("");

    const AddCount = () => {
        let c = contador + 1;
        setContador(c);
        console.log(c);
    }
    

    const IniciaJogo = () => {
        setHome("hidden")
    }


    return (
        <>
            <Home  statHome={statHome} IniciaJogo={IniciaJogo}  />
            <Header statHome={statHome} />
            <Main AddCount={AddCount} deck={deck1} />
            <Footer  statHome={statHome} count={contador} NumPerg={deck1.length} />
            
        </>
    )
}

const Body = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: 'Recursive', sans-serif;
`