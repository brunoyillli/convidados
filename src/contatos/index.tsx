import React, { FC } from 'react'
import { ContatosForm } from './Form'
import { ContatosList } from './List'
import { useContatosLogic } from './useContatosLogic'
import { Contato } from './contato'

export const Contatos: FC = () => {

    const logic = useContatosLogic();
    const handleFormSubmit = (contato: Contato) => {
        console.log("submetendo formulario", contato)
    }


    return (
        <>
            <ContatosForm contato={logic.contato} submeterFormulario={handleFormSubmit}  />
            <ContatosList />
        </>
    )
} 