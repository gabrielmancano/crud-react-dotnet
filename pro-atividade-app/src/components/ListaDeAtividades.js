import React from 'react';
import { Atividade } from './Atividade';

export function ListaDeAtividades(props) {
    return (
        <div className="mt-3">
            {
                props.atividades.map((ativ) => (
                    <Atividade
                        key={ativ.id}
                        removerAtividade={props.removerAtividade}
                        pegarAtividade={props.pegarAtividade}
                        ativ={ativ}
                    />
                ))
            }
        </div>
    );
}