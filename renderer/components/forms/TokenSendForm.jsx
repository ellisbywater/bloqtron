import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {ColorButton} from '../buttons/index';

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
    return (
        <>
            <form>
                <FormControl className={clsx(classes.margin, classes.fullTextField)}>
                    <TextField
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
                    <TextField
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
        </>
    )
}