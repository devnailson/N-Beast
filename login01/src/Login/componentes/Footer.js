import style from '../css/Footer.module.css'
import React from "react";


export default function Footer(props){
    function logado(){
        props.setLogado(!props.logado)
        if(props.logado){
            alert('LOGOFF...')
        }else{
            alert('MODO LOGADO')
        }
    }
        return(
            <div className={style.princ}>
                <div>Rodapé</div>
                <div>&copy;Nailson</div>
                <button className={style.button} onClick={()=>logado()}>Logar/Deslogar</button>
            </div>
        )
}