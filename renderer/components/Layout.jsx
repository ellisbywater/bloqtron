import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import {DrawerButton} from './ui/buttons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: "#fff",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.default,
    boxShadow: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: theme.palette.background.default,
    color: 'white',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    color: 'white',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Layout({children}) {
    const router = useRouter();
  const classes = useStyles();
  const [tokenName, setTokenName] = useState("BloqTron")



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            {tokenName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
            <DrawerButton button>
            <ListItemText primary={'Send Token'} onClick={() => router.push('/token/send')} />
          </DrawerButton>
          <DrawerButton button>
            <ListItemText primary={'Create Token'} onClick={() => router.push('/token/create')} />
          </DrawerButton>
        </List>
        <Divider />
        <List>
          <DrawerButton button>
            <ListItemText primary={'Balances'} onClick={() => router.push('/wallet/balances')} />
          </DrawerButton>
        </List>
        <Divider />
        <List>
            <DrawerButton button>
                <ListItemText primary={'Account'} />
            </DrawerButton>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid alignContent="center">
            <Container>
                {children}
            </Container>
        </Grid>
      </main>
    </div>
  );
}
