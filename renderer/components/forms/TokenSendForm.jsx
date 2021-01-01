import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {ColorButton} from '../ui/buttons';
import {CustomTextField} from "../ui/inputs";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  fullTextField: {
    width: '50ch',
  },
  halfTextField: {
      width: '30ch',
  }
}));

export default function TokenSendForm() {
    const classes = useStyles();
    const [txValues, setTxValues] = useState();


    return (
        <Grid container spacing={2}>
            <form>
                <FormControl fullWidth={true} className={clsx(classes.margin)}>
                    <CustomTextField
                        label="Sender Wallet"
                        id="standard-adornment-wallet"
                        variant="outlined"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'sender wallet',
                        }}

                    />
                </FormControl>

                <FormControl fullWidth className={clsx(classes.margin)}>
                    <CustomTextField
                        label="Token Recipient Address"
                        id="standard-adornment-rec"
                        variant="outlined"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        'aria-label': 'token recipient address',
                        }}
                    />
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.fullTextField)}>
                    <CustomTextField
                        label="Token Amount"
                        id="standard-adornment-amount"
                        variant="outlined"
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                        'aria-label': 'token amount',
                        }}
                    />
                </FormControl>
                <div>
                    <ColorButton type="submit" variant="contained" color="primary" className={classes.margin} endIcon={<SendOutlinedIcon />}>
                        Send
                    </ColorButton>
                </div>
            </form>
        </Grid>
    )
}
