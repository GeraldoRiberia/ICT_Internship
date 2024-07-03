import React from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Box sx={{flexGrow : 1}}>
            <AppBar>
                <Toolbar>
                <Typography variant='h4'component='div' sx={{flexGrow:1}}>
                    MyApp
                </Typography>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/'}>
                    Home
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/l'}>
                    Login
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/r'}>
                    Registration
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/t'}>
                    Table
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/n'}>
                    StateBasic
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/f'}>
                    FormBasics
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/a'}>
                    ApiGet
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none',color:'white'}} to={'/j'}>
                    Jewelery
                    </Link>
                </Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Navbar