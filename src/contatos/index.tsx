import React, { FC } from 'react'
import { ContatosForm } from './Form'
import { ContatosList } from './List'
import { useContatosLogic } from './useContatosLogic'
import { Contato } from './contato'

export const Contatos: FC = () => {

    const {addContato, contato, contatosList, removeContato} = useContatosLogic();
    const handleFormSubmit = (contato: Contato) => {
        addContato(contato)
        
    }


    return (
        <>
            <ContatosForm contato={contato} submeterFormulario={handleFormSubmit}  />
            <ContatosList list={contatosList} onDelete={removeContato}/>
        </>
    )
} 