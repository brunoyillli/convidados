import React, { FC } from 'react'
import { ContatosForm } from './Form'
import { ContatosList } from './List'
export const Contatos: FC = () => {
    return (
        <>
            <ContatosForm />
            <ContatosList />
        </>
    )
} 