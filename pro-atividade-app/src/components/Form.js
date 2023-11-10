import { useEffect, useState } from "react";

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export function Form(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (props.atividadeSelecionada.id !== 0)
            setAtividade(props.atividadeSelecionada);
    }, [props.atividadeSelecionada]);


    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value });
    }

    // FUNÇÕES EDITAR E CANCELAR
    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.atividadeSelecionada.id !== 0) props.atualizarAtividade(atividade);
        else props.addAtividade(atividade);

        setAtividade(atividadeInicial);
    }

    const handleCancelar = (e) => {
        e.preventDefault();

        setAtividade(atividadeInicial);
    }
    // FIM DAS FUNÇÕES EDITAR E CANCELAR

    function atividadeAtual() {
        if (props.atividadeSelecionada.id !== 0) {
            return props.atividadeSelecionada;
        }
        else {
            return atividadeInicial;
        }
    }

    return (
        <form className="row g-3 mt-3" onSubmit={handleSubmit}>
            <h1>
                {
                    atividade.id === 0 ?
                        "Atividades:"
                        :
                        "Atividade " + atividade.id + ":"
                }
            </h1>
            <div className="col-md-6">
                <label className="form-label">TÍTULO</label>
                <input
                    id="titulo"
                    name="titulo"
                    value={atividade.titulo}
                    onChange={inputTextHandler}
                    type="text"
                    className="form-control"
                />
            </div>

            <div className="col-md-6">
                <label className="form-label">PRIORIDADE</label>
                <select
                    id="prioridade"
                    name="prioridade"
                    value={atividade.prioridade}
                    onChange={inputTextHandler}
                    className="form-select"
                >
                    <option defaultValue="0">Selecionar...</option>
                    <option value="1">BAIXA</option>
                    <option value="2">MÉDIA</option>
                    <option value="3">ALTA</option>
                </select>
            </div>


            <div className="col-md-12">
                <label className="form-label">DESCRIÇÃO</label>
                <textarea
                    id="descricao"
                    name="descricao"
                    value={atividade.descricao}
                    onChange={inputTextHandler}
                    type="text"
                    className="form-control"
                />

                <hr />
            </div>

            <div className="col-12 mt-0">
                {
                    atividade.id === 0 ?
                        <button
                            className="btn btn-outline-primary"
                        >
                            ADICIONAR ATIVIDADE
                        </button>
                        :
                        <>
                            <button
                                onClick={handleSubmit}
                                className="btn btn-outline-success me-3"
                                type="submit"
                            >
                                <i className="fas fa-plus me-2" />
                                <b>SALVAR</b>
                            </button>
                            <button
                                onClick={handleCancelar}
                                className="btn btn-outline-danger"
                            >
                                <i className="fas fa-x me-2" />
                                <b>CANCELAR</b>
                            </button>
                        </>
                }
            </div>

        </form>
    )
}