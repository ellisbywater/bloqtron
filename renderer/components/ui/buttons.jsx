import React from 'react'
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import { purple } from '@material-ui/core/colors';


export const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700]
        }
    }
}))(Button)

export const DrawerButton = withStyles(theme => ({
    root: {
        color: "#eeeeee",
        backgroundColor: theme.palette.background.default,
        '&:hover': {
            backgroundColor: "#28243d",
        }
    }
}))(ListItem)