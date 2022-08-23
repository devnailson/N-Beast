import Botao from "./Botao";
import {Link} from 'react-router-dom'
import Input from "./Input";

import style  from '../css/Login.module.css'

function Login(){
    return(
        <div className={style.princ}>
                N BEAST
                <p>Hoje melhor que ontem e pior que amanhã!</p>
                <span className={style.login}>Faça LOGIN:</span>
            <div className={style.input}>
                <Input type='text' nome='INSIRA SEU USUÁRIO:'/>
            </div>
            <div className={style.input}>
                <Input type='password' nome='INSIRA SUA SENHA:  '/>
            </div>
            <div className={style.submit}><Botao tmsg='Logado com sucesso' nome='Login' value='slogin'/></div>

            <label>Não tenho conta</label>
            <Link to='/logon'><Botao tmsg='0' nome="Cadastre-se" value='logon'/></Link>
        </div>
    )
}  
export default Login;       