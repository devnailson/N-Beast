import Botao from "./Botao";
import Input from "./Input";

import {Link} from 'react-router-dom'

import style from '../css/Login.module.css'

function Logon(){


    return(
        <div className={style.princ}>
                N BEAST
                <p>Hoje melhor que ontem e pior que amanhã!</p>
                <span className={style.login}>Faça LOGIN:</span>
            <div className={style.input}>
                <Input type='text' nome='INSIRA SEU NOME:'/>
            </div>
            <div className={style.input}>
                <Input type='text' nome='INSIRA SEU USUÁRIO:  '/>
            </div>
            <div className={style.input}>
                <Input type='date' nome='INSIRA SUA DATA DE NASCIMENTO:  '/>
            </div>
            <div className={style.input}>
                <Input type='text' nome='INSIRA SEU USUÁRIO:  '/>
            </div>
            <div className={style.input}>
                <Input id='pass' type='password' nome='INSIRA SUA SENHA:  '/>
            </div>
            <div className={style.submit}><Botao  tmsg='Cadastrado com sucesso'  nome='Cadastrar' value='sLogon'/></div>

            <label>Não tenho conta</label>
            <Link to="/login"><Botao tmsg='0' nome="login" value="login"></Botao></Link>
        </div>
    )
}  
export default Logon;