import {Link} from 'react-router-dom'

function Home({logado}){
    return(
        <>{logado?
        //quando tiver logado   
         
        <div>
            <p>Olá, Temos o prazer de apresentar nossa plataforma!!!</p>
            <p>O que faremos por aqui? <br/>
                ps: NADA, e unicamente isso, plataforma criada apenas para fins de estudo!
            </p>
            <p>
                Falaremos sobre foco.<br/>
                Bem, faz semanas que tenho o foco de estudar programação pelo menos 1h por dia mesmo trabalhando 8h do mesmo, creio que um homem sem foco não concretiza seu objetivos, e se tem algo que eu quero na vida é chegar lá, isso, LÁ, o lugar que eu e apenas eu sei onde e fica, apenas eu e Deus pra ser bem sincero. E EU VOU!
            </p>
            <p>OPA, VI QUE VOCÊ ESTÁ LOGADO, INFELIZMENTE NÃO TEMOS NADA PARA USUARIOS AINDA, SORRY ME HIHI</p>
            
            
        </div>
        :
        //quando não tiver logado
        <div>
            <p>Olá, Temos o prazer de apresentar nossa plataforma!!!</p>
            <p>O que faremos por aqui? <br/>
                ps: NADA, e unicamente isso, plataforma criada apenas para fins de estudo!
            </p>
            <p>
                Falaremos sobre foco.<br/>
                Bem, faz semanas que tenho o foco de estudar programação pelo menos 1h por dia mesmo trabalhando 8h do mesmo, creio que um homem sem foco não concretiza seu objetivos, e se tem algo que eu quero na vida é chegar lá, isso, LÁ, o lugar que eu e apenas eu sei onde e fica, apenas eu e Deus pra ser bem sincero. E EU VOU!
            </p>
            <p>chega de falácia, faça <Link to='/login'>Login</Link> ou <Link to='/logon'>Cadastre-se</Link></p>
            
            
        </div>
        }</>
    )
}
export default Home;