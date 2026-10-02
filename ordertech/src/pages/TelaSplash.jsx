import { useNavigate } from 'react-router-dom'
import styles from './TelaSplash.module.css';

function TelaSplash() {

const navegar = useNavigate();

    return (
 <div className={styles["tela-splash"]} onClick={() => navegar('/local')}>
      <div className={styles["banner-placeholder"]}>
    <img src="/banner.jpeg" alt="Hambúrguer" />
     </div>
      <h1 className={styles["texto-iniciar"]}>Toque para iniciar</h1>
    </div>
    )
}

export default TelaSplash