import { useState } from 'react'
import './First.css'
import { Typography ,TextField, Button} from '@mui/material'
const first = (props) => {
  var [person, setPerson] = useState({name:props.data.name, age : props.data.age, cls: props.data.cls})
  return (
    <div>
        <Typography variant='h2'>Login</Typography>
        <Typography variant='h4'>I am {person.name}</Typography>
        <Typography variant='h4'>I am {person.age}</Typography>
        <Typography variant='h4'>class {person.cls}</Typography>
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