import BotaoMenu from "./BotaoMenu";
import { Link } from 'react-router-dom'

function MenuV(){
    return(
        <nav>
            <Link to='/'><BotaoMenu value='home' nome='Home'/></Link>
            <Link to='logon'><BotaoMenu value='cad' nome='Logon'/></Link>
            <Link to='contact'><BotaoMenu value='contact' nome='Contact'/></Link>
            <Link to='about'><BotaoMenu value='about' nome='About'/></Link>
        </nav>
    )
}
export default MenuV;