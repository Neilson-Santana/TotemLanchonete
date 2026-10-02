export default function ProdutoCard({ produto, onClick }) {
	return (
		<button type="button" onClick={onClick}>
			<img src={produto.image} alt={produto.name} />
			<span>{produto.name}</span>
			<span>R$ {produto.price.toFixed(2).replace('.', ',')}</span>
		</button>
	);
}
