import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
        <AppBar>
            <Toolbar>
                <Button style={{fontFamily:'monospace', fontWeight:'bolder'}}textAlign={'left'} 
                variant='h4' component='div'>
                    <Link style={{textDecoration:'none', color:'white'}} 
                    to={'/'}><Typography variant='h4'>Movies</Typography>
                    </Link>
                </Button>
                <Typography sx={{flexGrow:1}}/>
                <Button>
                    <Link style={{textDecoration:'none', color:'white'}} 
                    to={'/view'}>View Movie
                    </Link>
                </Button>
                <Button>
                    <Link style={{textDecoration:'none', color:'white'}} 
                    to={'/add'}>Add Movie
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
    
  )
}

export default Navbar