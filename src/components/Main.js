import Flashcard from "./Flashcard";



export default function Main({deck,AddCount}) {

    

    return (
        <main>
            {deck.map((item,i) =><Flashcard key={i} AddCount={AddCount} Quest = {item.quest} Answer={item.answer}   index={i}/> )}      
        </main>
    )
}