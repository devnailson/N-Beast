import styles from '../css/BotaoMenu.module.css'

function BotaoMenu(props){
    

    return(
        <button className={styles.button} value={props.value}>{props.nome}</button>
    )
}
export default BotaoMenu;