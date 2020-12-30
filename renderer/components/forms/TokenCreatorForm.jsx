import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { purple } from '@material-ui/core/colors';

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
const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700]
        }
    }
}))(Button)

export default function TokenCreatorForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    ticker: '',
    decimals: '',
    initialQty: '',
    documentUrl: '',
    documentHash: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
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
      <div>
          <form action="">
                
            <FormControl className={clsx(classes.margin, classes.halfTextField)}>
                <TextField
                    label="Token Name"
                    id="standard-adornment-name"
                    defaultValue="Name"
                    variant="outlined"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'token name',
                    }}
                />
            </FormControl>
                
            <FormControl className={clsx(classes.margin, classes.halfTextField)}>
                <TextField
                    label="Ticker"
                    id="standard-adornment-ticker"
                    variant="outlined"
                    defaultValue="Ticker"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'ticker',
                    }}
                />
            </FormControl>
               
            <FormControl className={clsx(classes.margin,  classes.halfTextField)}>
                <TextField
                    label="Qty"
                    id="standard-adornment-initQty"
                    defaultValue="Quantity"
                    value={values.weight}
                    variant="outlined"
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'Quantity',
                    }}
                />
            </FormControl>
                
            <FormControl className={clsx(classes.margin,  classes.halfTextField)}>
                <TextField
                    label="Decimals"
                    id="standard-adornment-decimals"
                    variant="outlined"
                    defaultValue="Decimals"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'decimals',
                    }}
                />
            </FormControl>

            
            <FormControl className={clsx(classes.margin, classes.fullTextField)}>
                <TextField
                    label="Doc. URL"
                    id="standard-adornment-docUrl"
                    variant="outlined"
                    value={values.weight}
                    defaultValue="Document URL"
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'document url',
                    }}
                />
            </FormControl>
            
            <FormControl className={clsx(classes.margin, classes.fullTextField)}>
                <TextField
                    label="Doc. Hash"
                    id="standard-adornment-docHash"
                    variant="outlined"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                    'aria-label': 'document hash',
                    }}
                />
            </FormControl>
            <div>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Create Token
                </ColorButton>
            </div>
        </form>
      </div>
    </div>
  );
}