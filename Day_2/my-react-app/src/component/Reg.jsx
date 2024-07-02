import React from 'react'
import { Typography ,TextField, Button} from '@mui/material'
import './Reg.css'

const Reg = () => {
  return (
    <div>
        <Typography id ='formheading'align='left' variant='h4'>Form</Typography><br />
        <TextField className='name' label='Name'></TextField><br /><br />
        <TextField id='age' label='Age'></TextField><br /><br />
        <TextField id = 'email' label='Email'></TextField><br /><br />
        <TextField id='fatherName' label="Father's Name"></TextField><br /><br />
        <TextField id = 'motherName' label="Mother's Name"></TextField><br /><br />
        <TextField id = 'password' label='Password'></TextField><br /><br />
        <TextField id = 'confirm password' label='Confirm Password'></TextField><br /><br />
        <Button id ='submitbt' variant='contained' >Submit</Button>
    </div>
  )
}

export default Reg