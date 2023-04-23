import React, { FC } from "react";
import { Contato } from "./contato";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


interface ContatosFormPros {
    contato?: Contato;
}

export const ContatosForm: FC<ContatosFormPros> = ({ contato }: ContatosFormPros) => {
    return (
        <form>
            <Grid container>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Nome"></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" label="Idade"></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                        Adicionar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}