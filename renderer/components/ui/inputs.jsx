import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import { TextField } from "@material-ui/core";

export const CustomTextField = withStyles(({
    root: {
        '& label.Mui-focused': {
            color: purple[100],
        },
        '& label' :{
            color: "white",
        },
        '& .MuiInputBase-input' : {
            color: purple[100]
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '& value': {
                color: 'white',
            },
            '& placeholder': {
                color: 'white'
            },
            '&.Mui-focused fieldset': {
                borderColor: purple[100]
            },
            '&:hover fieldset': {
                borderColor: purple[300]
            }
        }
    }
}))(TextField);


