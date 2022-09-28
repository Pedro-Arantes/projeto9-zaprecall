import React from 'react';
import deck1 from "./deck1";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function App() {

    const [contador, setContador] = React.useState(0)

    const AddCount =() =>{
        let c = contador+1;
        setContador(c);
        console.log(c);
    }

    

    return (
        <>
            <Header/>
            <Main AddCount={AddCount} deck = {deck1}/>
            <Footer count={contador} NumPerg = {deck1.length}/>
        </>
    )
}