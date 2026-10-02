export default function CategoriaItem({ categoria, categoriaSelecionada, setCategoriaSelecionada, getIconeCategoria, executarComAtraso }) {
	const selecionada = categoria.id === categoriaSelecionada;

	return (
		<button
			type="button"
			aria-pressed={selecionada}
			onClick={() => executarComAtraso(() => setCategoriaSelecionada(categoria.id))}
		>
			<span aria-hidden="true">{getIconeCategoria(categoria.name)}</span>
			<span>{categoria.name}</span>
		</button>
	);
}
