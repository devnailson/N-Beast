import Menu from "./Menu";
import MenuV from "./MenuV";
import styles from '../css/Header.module.css'
import logo from '../logo-login01.png'

import {Link} from 'react-router-dom'

function Header(props){
    return(
        <nav className={styles.princ}>      
            <Link to='/'><img className={styles.logo}src={logo} alt='logo'/></Link>
            {props.logado? <Menu/>:<MenuV/>}
        </nav>
    )
}
export default Header;