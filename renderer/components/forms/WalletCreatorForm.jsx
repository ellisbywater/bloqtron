import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ColorButton} from "../ui/buttons";
import FormControl from "@material-ui/core/FormControl"
import {CustomTextField} from "../ui/inputs";
import { useForm } from 'react-hook-form';
import electron from "electron";

const useStyles = makeStyles((theme) => ({
   root: {
       maxWidth: 500,
       backgroundColor: theme.palette.background.default,
       textAlign: "center",
  },
    margin: {
        margin: theme.spacing(2),
    },
  media: {
    height: 128,
    width: 128,
  },
}));

const ipcRenderer = electron.ipcRenderer || false;

export default function WalletCreatorForm() {
    const classes = useStyles();
    const [walletName, setWalletName] = useState('')

    const setWalletValue = (data) => {
        setWalletName((prevName) => prevName = data)
        console.log(walletName)
    }


    const onSubmit = () => {
        if(ipcRenderer){
            if(walletName === undefined){
                console.log('walletName is undefined')
                return
            }
            ipcRenderer.invoke('create-wallet', walletName).then(response =>
                console.log(response)
            )
        }
    }

    return (
        <>
            <div className={classes.root}>
                <form>
                    <FormControl fullWidth className={classes.margin}>
                        <CustomTextField
                            onChange={(event) => setWalletValue(event.target.value)}
                            value={walletName}
                            label="Wallet Name"
                            id="standard-adornment-walletName"
                            variant="outlined"
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'token amount',
                            }}
                        />
                    </FormControl>
                    <ColorButton type="submit" size="medium" onClick={onSubmit}>
                        Create New Wallet
                    </ColorButton>
                </form>
            </div>
        </>
    )
}
