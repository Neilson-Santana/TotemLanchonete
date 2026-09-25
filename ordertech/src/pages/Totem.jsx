import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import TelaSplash from './TelaSplash';
import TelaLocal from './TelaLocal';
import TelaMenu from './TelaMenu';
import TelaResumo from './TelaResumo';
import TelaPagamento from './TelaPagamento';
import TelaProcessando from './TelaProcessando';
import TelaSucesso from './TelaSucesso';
import { categoriasDados, produtosDados } from '../data/menuDados';

export default function Totem() {
  const navegar = useNavigate();

  const [local, setLocal] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  
  const [carrinho, setCarrinho] = useState([]);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroPedido, setNumeroPedido] = useState(null);

    useEffect(() => {
        setCategorias(categoriasDados);
        if (categoriasDados.length > 0) setCategoriaSelecionada(categoriasDados[0].id);
}, []);

    useEffect(() => {
        if (categoriaSelecionada) {
            setProdutos(produtosDados.filter(p => p.categoryId === categoriaSelecionada));
        }
    }, [categoriaSelecionada]);

  const processarPagamento = (metodo) => {
    setMetodoPagamento(metodo);
    navegar('/processando');

      // Simula o tempo de pagamento na maquininha (5 segundos)
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
        <Route path="/" element={<TelaSplash />} />
        <Route path="/local" element={<TelaLocal setLocal={setLocal} />} />
        <Route path="/menu" element={
          <TelaMenu 
            categorias={categorias} 
            produtos={produtos} 
            categoriaSelecionada={categoriaSelecionada} 
            setCategoriaSelecionada={setCategoriaSelecionada} 
            carrinho={carrinho} 
            setCarrinho={setCarrinho} 
          />
        } />
        <Route path="/resumo" element={<TelaResumo carrinho={carrinho} setCarrinho={setCarrinho} />} />
        <Route path="/pagamento" element={<TelaPagamento processarPagamento={processarPagamento} />} />
        <Route path="/processando" element={<TelaProcessando />} />
        <Route path="/sucesso" element={<TelaSucesso numeroPedido={numeroPedido} />} />
      </Routes>
    </div>
  );
}