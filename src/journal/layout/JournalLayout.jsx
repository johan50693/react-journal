import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { SideBar } from '../components';
import { NavBar } from '../components/NavBar';

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box 
    className="animate__animated animate__fadeIn animate_faster"
      sx={{display: 'flex'}}
    >

      <NavBar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box
        component='main'
        sx={{flexGrow:1, p:3}}
      >
        <Toolbar/>

        {children}

      </Box>
    </Box>
  )
}
