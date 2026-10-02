import styles from '../pages/TelaMenu.module.css';

export default function QuantidadeProduto({ produtoAtivo, variacaoSelecionada, quantidade, setQuantidade, setVariacaoSelecionada, setProdutoAtivo, adicionarAoCarrinho }) {
	const preco = produtoAtivo.price + variacaoSelecionada.preco;

	return (
		<section>
			<button type="button" onClick={() => setVariacaoSelecionada(null)}>Voltar</button>
			<h2>{produtoAtivo.name}</h2>
			<p>{variacaoSelecionada.nome} · R$ {preco.toFixed(2).replace('.', ',')}</p>
			<div className={styles['controle-quantidade']}>
				<button type="button" aria-label="Diminuir quantidade" disabled={quantidade <= 1} onClick={() => setQuantidade(valor => Math.max(1, valor - 1))}>−</button>
				<span aria-live="polite">{quantidade}</span>
				<button type="button" aria-label="Aumentar quantidade" onClick={() => setQuantidade(valor => valor + 1)}>+</button>
			</div>
			<button type="button" onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>
			<button type="button" onClick={() => { setVariacaoSelecionada(null); setProdutoAtivo(null); }}>Cancelar</button>
		</section>
	);
}
