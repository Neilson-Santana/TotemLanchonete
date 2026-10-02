import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import TelaSplash from './TelaSplash';
import TelaLocal from './TelaLocal';
import TelaMenu from './TelaMenu';
import TelaResumo from './TelaResumo';
import TelaPagamento from './TelaPagamento';
import TelaProcessando from './TelaProcessando';
import TelaSucesso from './TelaSucesso';
import TelaModificarItem from './TelaModificarItem';
import { categoriasDados, produtosDados } from '../data/menuDados';

export default function Totem() {
  const navegar = useNavigate();

  const [local, setLocal] = useState('');
  const categorias = categoriasDados;
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoriasDados[0]?.id ?? null);
  const produtos = produtosDados.filter(produto => produto.categoryId === categoriaSelecionada);
  
  const [carrinho, setCarrinho] = useState([]);
  const [itemParaModificar, setItemParaModificar] = useState(null);
  const [indiceModificacao, setIndiceModificacao] = useState(null);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroPedido, setNumeroPedido] = useState(null);

    const executarComAtraso = (acao) => acao();

  const processarPagamento = (metodo) => {
    setMetodoPagamento(metodo);
    navegar('/processando');


    setTimeout(() => {
      const fakeOrderNumber = Math.floor(1000 + Math.random() * 9000);
      setNumeroPedido(fakeOrderNumber);
      navegar('/sucesso');

      setTimeout(() => {
        navegar('/');
        setCarrinho([]);
        setLocal('');
        setMetodoPagamento('');
      }, 5000);
    }, 5000);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', height: '100vh', border: '1px solid #ccc' }}>
      <Routes>
        <Route path="/" element={<TelaSplash executarComAtraso={executarComAtraso} />} />
        <Route path="/local" element={<TelaLocal setLocal={setLocal} />} />
        <Route path="/menu" element={
          <TelaMenu 
            categorias={categorias} 
            produtos={produtos} 
            categoriaSelecionada={categoriaSelecionada} 
            setCategoriaSelecionada={setCategoriaSelecionada} 
            carrinho={carrinho} 
            setCarrinho={setCarrinho} 
            executarComAtraso={executarComAtraso}
          />
        } />
        <Route path="/resumo" element={<TelaResumo carrinho={carrinho} setCarrinho={setCarrinho} executarComAtraso={executarComAtraso} local={local} setItemParaModificar={setItemParaModificar} setIndiceModificacao={setIndiceModificacao} />} />
        <Route path="/modificar-item" element={itemParaModificar && indiceModificacao !== null ? (
          <TelaModificarItem
            itemParaModificar={itemParaModificar}
            setItemParaModificar={setItemParaModificar}
            indiceModificacao={indiceModificacao}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            executarComAtraso={executarComAtraso}
          />
        ) : <Navigate to="/resumo" replace />} />
        <Route path="/pagamento" element={<TelaPagamento processarPagamento={processarPagamento} executarComAtraso={executarComAtraso} />} />
        <Route path="/processando" element={<TelaProcessando />} />
        <Route path="/sucesso" element={<TelaSucesso numeroPedido={numeroPedido} metodoPagamento={metodoPagamento} local={local} />} />
      </Routes>
    </div>
  );
}