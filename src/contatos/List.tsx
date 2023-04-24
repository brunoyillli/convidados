import React, {FC} from 'react'
import { Contato } from './contato'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';

interface ContatosListProps{
    list: Contato[];
    onDelete: (contato:Contato) => void;
}

export const ContatosList: FC<ContatosListProps> = ({
    list,
    onDelete
}: ContatosListProps) =>{
    return(
        <Grid container>
            <Grid item xs={12}>
                <List>
                    {
                        list.map((contato: Contato) =>{
                            return (
                                <ListItem key={contato.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccountCircleIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={contato.nome} secondary={`Idade: ${contato.idade}`}/>
                                    <ListItemSecondaryAction>
                                        <IconButton edge='end' onClick={ () => onDelete(contato)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ListItemSecondaryAction>

                                </ListItem>
                            )
                        })
                    }
                </List>
            </Grid>
        </Grid>
    )
}