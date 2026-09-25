import { useNavigate } from 'react-router-dom';
import styles from './TelaLocal.module.css';

function TelaLocal({ setLocal }) {
  const navegar = useNavigate();

    return (
        <main className={styles.telaLocal}>
            <div className={styles.opcoesLocal}>
                <button className={styles.botaoLocal}
                    onClick={() => {
                        setLocal('Comer Aqui');
                        navegar('/menu');
                    }}
                >
                    Comer Aqui
                </button>
                <button className={styles.botaoLocal}
                    onClick={() => {
                        setLocal('Levar');
                        navegar('/menu');
                    }}
                >
                    Levar
                </button>
            </div>
        </main>
    );
}

export default TelaLocal;

