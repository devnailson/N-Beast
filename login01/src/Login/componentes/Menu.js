import BotaoMenu from "./BotaoMenu";
import {Link } from 'react-router-dom'
function Menu(){
    return(
        <nav>
            <Link to=''><BotaoMenu value='home' nome='Home'/></Link>
            <Link to='mconta'><BotaoMenu value='mConta' nome='Minha Conta'/></Link>
            <Link to='contact'><BotaoMenu value='contact' nome='Contact'/></Link>
            <Link to='about'><BotaoMenu value='about' nome='Sobre'/></Link>
        </nav>
    )
}
export default Menu;