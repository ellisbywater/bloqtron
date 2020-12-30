import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import WalletCreatorForm from '../../components/forms/WalletCreatorForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const walletBalances = [
    {
        address: "je03r203jf228rjfeuhdngjralq038n",
        balance: "01.0020334"
    },
    {
        address: "je000plxx228rjfw12kdxw3mmv0573",
        balance: "01.022222"
    },
    {
        address: "je03wY52okkeu1xsed677sgjr12t1t",
        balance: "00.0008116"
    }
]

export default function Balances() {
    const classes = useStyles();
    const balances = walletBalances
    return (
        <>
            <WalletCreatorForm />
            <List className={classes.root}>
                {
                    balances.map(wallet => {
                        <ListItem button key={wallet.address}>
                            <ListItemIcon><LocalAtmOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={wallet.balance} secondary={wallet.address}/>
                        </ListItem>
                    })
                } 
            </List>
        </>
    )
}