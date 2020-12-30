import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   root: {
    maxWidth: 500,
  },
  media: {
    height: 128,
    width: 128,
  },
}));

export default function WalletCreatorForm() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media}
                    image="/images/logo.png"
                    title="Token Logo"
                />
                <CardContent>
                    <CardActions>
                        <Button variant="outlined" size="medium">
                            Create New Wallet
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    )
}