import styles from '../css/Botao.module.css'

function Botao(props){

    
    const msg=()=>{
        if(props.tmsg=='0'){
          return
        }
        else{
            alert(props.tmsg)  
        }
        
    }

    return(
        <button onClick={()=>msg()} className={styles.button} value={props.value}>{props.nome}</button>
    )
}
export default Botao;