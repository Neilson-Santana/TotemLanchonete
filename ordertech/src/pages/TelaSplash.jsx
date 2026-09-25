import { useNavigate } from 'react-router-dom'

function TelaSplash() {

const navegar = useNavigate();

    return (
 <div onClick={() => navegar('/local')}>
    <img src="./public/rodeio_azia.jpeg" alt="Logo" />
    <p>Toque na tela para iniciar</p>
 </div>
    )
}

export default TelaSplash