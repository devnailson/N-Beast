import styles from '../css/Input.module.css'

function Input(props){
    return(
        <>
            <label className={styles.label}>{props.nome}</label><br/>
            <input className={styles.input} type={props.type}></input>
        </>
    )
}
export default Input; 