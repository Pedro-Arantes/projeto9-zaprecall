import Flashcard from "./Flashcard";
import styled from 'styled-components';


export default function Main({deck,AddCount}) {

    

    return (
        <MainStyle>
            {deck.map((item,i) =><Flashcard key={i} AddCount={AddCount} Quest = {item.quest} Answer={item.answer}   index={i}/> )}      
        </MainStyle>
    )
}

const MainStyle = styled.main `

    margin-top: 140px;
    /*margin-left: 10%;
    margin-right: 0px;*/

    max-height: 400px;

    display: flex;
    flex-direction: column;

    overflow-y: auto;

    ::-webkit-scrollbar {
    display: none;
    }
`