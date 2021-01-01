import electron from 'electron';
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import WalletCreatorForm from '../../components/forms/WalletCreatorForm';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
      root: {
        width: '100%',
        backgroundColor: theme.palette.background.default,
          padding: "10px"
      },
    centerText: {
          textAlign: "center"
    },
    margin: {
        margin: theme.spacing(2),
    },
    listItem: {
        '& .MuiListItemText-primary' : {
            color: purple[100],
        },
        '& .MuiListItemText-secondary': {
            color: "white",
        }
    },
    listGroup: {
          marginTop: "50px"
    }

}));



const ipcRenderer = electron.ipcRenderer || false;

export default function Balances() {
    const classes = useStyles();
    const [balances, setBalances] = useState([])

    useEffect(() => {
        if(ipcRenderer) {
            setBalances(ipcRenderer.sendSync('get-balances'))
        }
    }, [])

    return (
            <Box className={clsx(classes.centerText)}>
                <Grid>
                    <Grid item>
                        <WalletCreatorForm  />
                    </Grid>

                    <Grid item className={classes.listGroup}>
                        <Box className={clsx(classes.margin)}>
                            <h1>Wallets</h1>
                        </Box>
                        <List className={clsx(classes.root, classes.margin)}>
                            {balances.map(wallet =>(
                                <ListItem key={wallet.address}>
                                    <Paper className={classes.root}>
                                        <ListItemText className={classes.listItem} primary={wallet.balance} secondary={wallet.address} />
                                    </Paper>
                                </ListItem>
                            ) )}
                        </List>
                    </Grid>

                </Grid>
            </Box>
    )
}
