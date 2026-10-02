import styles from '../pages/TelaResumo.module.css';

export default function ResumoItemLinha({ item, indice, setCarrinho, executarComAtraso = (acao) => acao(), setItemParaModificar, setIndiceModificacao, navegar }) {
  const alterarQuantidade = (diferenca) => {
    executarComAtraso(() => setCarrinho(atual => atual
      .map((produto, posicao) => posicao === indice
        ? { ...produto, quantity: produto.quantity + diferenca }
        : produto
      )
      .filter(produto => produto.quantity > 0)
    ));
  };

  const remover = () => executarComAtraso(() => setCarrinho(atual => atual.filter((_, posicao) => posicao !== indice)));
  const modificar = () => executarComAtraso(() => {
    setItemParaModificar(item);
    setIndiceModificacao(indice);
    navegar('/modificar-item');
  });

  return (
    <div className={styles['item-review-linha']}>
      <div className={styles['item-review-topo']}>
        <span>{item.quantity} × {item.name}</span>
        <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
      </div>
      <div className={styles['item-review-acoes']}>
        <div className={styles['review-qty-controls']}>
          <button type="button" aria-label="Diminuir quantidade" onClick={() => alterarQuantidade(-1)}>−</button>
          <span>{item.quantity}</span>
          <button type="button" aria-label="Aumentar quantidade" onClick={() => alterarQuantidade(1)}>+</button>
        </div>
        <button type="button" className={styles['btn-modificar']} onClick={modificar}>Modificar</button>
        <button type="button" className={styles['btn-remover']} onClick={remover}>Remover</button>
      </div>
    </div>
  );
}