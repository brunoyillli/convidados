import React, { FC } from "react";
import { Contato } from "./contato";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik, FormikHelpers } from "formik";
import './index.css'
interface ContatosFormPros {
    contato?: Contato;
}

export const ContatosForm: FC<ContatosFormPros> = ({ contato }: ContatosFormPros) => {
    const formik = useFormik<Contato>({
        onSubmit: (contato:Contato) => console.log(contato),
        initialValues:{nome: '', idade: ''}
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField variant="outlined"
                        label="Nome"
                        value={formik.values.nome}
                        name="nome"
                        id="inputNome"
                        onChange={formik.handleChange}
                        className="full-width">
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined"
                        label="Idade"
                        value={formik.values.idade}
                        name="idade"
                        id="inputIdade"
                        onChange={formik.handleChange}
                        className="full-width">
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button className="full-width" variant="contained" color="primary" type="submit">
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}