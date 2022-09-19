import {useState} from 'react'

function Home(){
    function chamandoFuncao() {
        return 0
    }
    return <div><h1>Home</h1><Contador/></div>
} 

function Contador(){
    const [contador,setContador] = useState(1)
    function adicionarContador(){
         setContador(contador+1)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>AdicionaContador</button>
        </div>
    )
}

export default Home