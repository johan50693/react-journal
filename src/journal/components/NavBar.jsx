import { MenuOpenOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { startLogOut } from '../../store/auth/thunks';
import { useDispatch } from 'react-redux';

export const NavBar = ({drawerWidth=240}) => {

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogOut());
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: {sm: `${drawerWidth}px`}
      }}
    >
      <Toolbar>
        <IconButton 
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: {sm: 'none'}}}
        >
          <MenuOpenOutlined />
        </IconButton>

        <Grid container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
          <IconButton 
                      color='error'
                      onClick={onLogout}>
            <LoginIcon/>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
