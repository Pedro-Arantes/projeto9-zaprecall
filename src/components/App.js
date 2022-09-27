import React from 'react';
import deck1 from "./deck1";
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function App() {

    

    

    return (
        <>
            <Header/>
            <Main  deck = {deck1}/>
            <Footer NumPerg = {deck1.length}/>
        </>
    )
}