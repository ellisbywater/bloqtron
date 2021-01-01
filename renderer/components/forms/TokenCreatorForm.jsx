import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
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
      width: '35ch',
  }
}));

export default function TokenCreatorForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    ticker: '',
    decimals: '',
    initialQty: '',
    documentUrl: '',
    documentHash: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container>
          <form>

            <FormControl className={clsx(classes.margin, classes.halfTextField)}>
                <CustomTextField
                    label="Token Name"
                    id="standard-adornment-name"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'token name',
                    }}
                />
            </FormControl>

            <FormControl className={clsx(classes.margin, classes.halfTextField)}>
                <CustomTextField
                    label="Ticker"
                    id="standard-adornment-ticker"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'ticker',
                    }}
                />
            </FormControl>

            <FormControl className={clsx(classes.margin,  classes.halfTextField)}>
                <CustomTextField
                    label="Qty"
                    id="standard-adornment-initQty"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'Quantity',
                    }}
                />
            </FormControl>

            <FormControl className={clsx(classes.margin,  classes.halfTextField)}>
                <CustomTextField
                    label="Decimals"
                    id="standard-adornment-decimals"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'decimals',
                    }}
                />
            </FormControl>


            <FormControl fullWidth className={clsx(classes.margin)}>
                <CustomTextField
                    required
                    label="Doc. URL"
                    id="standard-adornment-docUrl"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'document url',
                    }}
                />
            </FormControl>

            <FormControl fullWidth className={clsx(classes.margin)}>
                <CustomTextField
                    label="Doc. Hash"
                    id="standard-adornment-docHash"
                    variant="outlined"
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'document hash',
                    }}
                />
            </FormControl>
            <div>
                <ColorButton type="submit" variant="contained" color="primary" className={classes.margin}>
                    Create Token
                </ColorButton>
            </div>
        </form>
      </Grid>
    </div>
  );
}
