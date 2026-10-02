export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
	const precoCombo = 40.90;
	const permiteCombo = produtoAtivo.categoryId === 1;

	return (
		<section>
			<button type="button" onClick={() => setProdutoAtivo(null)}>Voltar</button>
			<h2>{produtoAtivo.name}</h2>
			<button type="button" onClick={() => executarComAtraso(() => selecionarVariacao('Padrão'))}>
				<span>Padrão</span>
				<span>R$ {produtoAtivo.price.toFixed(2).replace('.', ',')}</span>
			</button>
			{permiteCombo && (
				<button
					type="button"
					onClick={() => executarComAtraso(() => selecionarVariacao('Combo', precoCombo - produtoAtivo.price))}
				>
					<span>Combo</span>
					<span>R$ {precoCombo.toFixed(2).replace('.', ',')}</span>
				</button>
			)}
		</section>
	);
}
