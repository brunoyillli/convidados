import React, { FC } from "react";
import { Contato, validationScheme } from "./contato";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useFormik, FormikHelpers } from "formik";
import './index.css'

interface ContatosFormPros {
    contato: Contato;
    submeterFormulario: (contato: Contato) => void;
}

export const ContatosForm: FC<ContatosFormPros> = ({
    contato,
    submeterFormulario 
}: ContatosFormPros) => {
    const onSubmit = (contato: Contato,helper: FormikHelpers<Contato>) => {
        submeterFormulario(contato)
        helper.resetForm();
    }
    const formik = useFormik<Contato>({
        onSubmit,
        initialValues:{...contato},
        validationSchema: validationScheme,
        validateOnChange: false
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
                    <span className="error-msg">{formik.errors.nome}</span>
                </Grid>
                <br/>
                <Grid item xs={12}>
                    <TextField variant="outlined"
                        label="Idade"
                        value={formik.values.idade}
                        name="idade"
                        id="inputIdade"
                        onChange={formik.handleChange}
                        className="full-width">
                    </TextField>
                    <span className="error-msg">{formik.errors.idade}</span>
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