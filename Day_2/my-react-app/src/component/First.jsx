import './First.css'
import { Typography ,TextField, Button} from '@mui/material'
const first = () => {
  return (
    <div>
        <Typography variant='h2'>Login</Typography>
        <br />
        <TextField id ='us1' required label="Username" variant="outlined" />
        <br /><br />
        <TextField id = 'ps1'required type='password' label='Password'></TextField>
        <br /><br />
        <Button id = 'bt1'variant='contained'>Login</Button>
    </div>
  )
}

first.propTypes = {}

export default first