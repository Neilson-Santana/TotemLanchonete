

export default function TelaSucesso({ numeroPedido }) {
  return (
    <main>
      <h1>Pedido confirmado</h1>
      <p>Número do pedido: {numeroPedido ?? '---'}</p>
    </main>
  );
}