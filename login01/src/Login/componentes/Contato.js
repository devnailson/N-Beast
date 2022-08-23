import { BsFillFilePersonFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import style from '../css/Contato.module.css'

export default function Contato(){
    return(
        <div className={style.princ}>
            <ul className={style.list}>
                <li><a href="tel:(85) 994006666"><BsFillFilePersonFill/>Phone Number</a></li>
                <li><a href="https://www.instagram.com/nailsonlr/" target='_blank'><FaInstagram/>Instagram</a></li>
                <li><a href="https://github.com/devnailson" target='_blank'><FaGithub/>Github</a></li>
            </ul>
        </div>
    )
}