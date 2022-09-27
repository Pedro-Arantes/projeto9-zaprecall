import logo from "../assets/img/logo.png"

export default function Header() {

    return (
        <header>
            <div>
                <img src={logo}></img>
                <h1>ZapRecall</h1>
            </div>
        </header>
    )
}