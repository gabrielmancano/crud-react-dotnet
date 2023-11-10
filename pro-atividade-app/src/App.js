import { useState, useEffect } from 'react';
import './App.css';

import { Form } from '../src/components/Form';
import { ListaDeAtividades } from './components/ListaDeAtividades';


function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) :
      setIndex(Math.max.apply(
        Math,
        atividades.map((item) => item.id)
      ) + 1);
  }, [atividades]);


  // Funções de CRUD (Add, Remove, Edit)

  function addAtividade(ativ) {
    setAtividades([...atividades,
    { ...ativ, id: index }]
    );
  }


  function removerAtividade(id) {
    const atividadesFiltradas = atividades.filter((item) => item.id !== id);

    setAtividades([...atividadesFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade = atividades.filter((item) => item.id === id);
    setAtividade(atividade[0]);
  }

  function atualizarAtividade(ativ) {
    setAtividades(
      atividades.map((item) => (item.id === ativ.id ? ativ : item))
    );
    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 })
  }

  return (
    <>
      <Form
        atividades={atividades}
        addAtividade={addAtividade}
        atividadeSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
      />

      <ListaDeAtividades
        atividades={atividades}
        removerAtividade={removerAtividade}
        pegarAtividade={pegarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
    </>
  );
}

export default App;