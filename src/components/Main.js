import Flashcard from "./Flashcard";



export default function Main({deck}) {

    return (
        <main>
            {deck.map((item,i) =><Flashcard key={i}  Quest = {item.quest} Answer={item.answer}   index={i}/> )}      
        </main>
    )
}