import {useState} from 'react'

function Home(){
    function chamandoFuncao() {
        return 0
    }
    return <div><h1>Root</h1><Contador/></div>
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
            <p>Phasellus quis auctor velit, nec euismod arcu. Mauris nec hendrerit risus, in egestas tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum orci at pulvinar condimentum. Donec nec euismod turpis, vel interdum eros. Nullam ornare sapien ac mauris fringilla maximus. Proin eu augue nec elit porta vulputate vestibulum eu erat. Mauris aliquet blandit nibh, sed sollicitudin justo luctus ut. Mauris elit arcu, molestie tincidunt felis eu, vulputate dictum lectus. Suspendisse sapien nulla, aliquet vitae felis lobortis, finibus aliquet nisl. Nulla accumsan nulla diam, vitae aliquam diam feugiat non. Morbi in eleifend augue. Nullam malesuada nulla est, vitae ultricies sem eleifend et. Phasellus bibendum blandit magna, id lacinia ante condimentum sed. Maecenas ut varius mauris, non euismod nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <input type="text" id="fname" name="fname"></input>
            <input type="button" id="fbut" value="Prosseguir" name="fname"></input>
        </div>
    )
}

export default Home