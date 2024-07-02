import { TextField, Typography , Button} from '@mui/material'
import React from 'react'
import { useState } from 'react'

const StateBasic = () => {
  var[temp,setTemp] = useState("Adi");
  var[name, setName] = useState();
  // const changeName = ()=>{
  //   console.log('Button pressed')
  //   setName(temp)
  // }
  // const inputHandler = (e)=>{
  //   console.log(e)
  //   setTemp(e.target.value)
  // }
  return (
    <div style={{marginLeft:'50%', marginTop:'10%'}}>
      <Typography variant='h5'>
          Hello {name}
      </Typography>
      <TextField onChange={(e)=>{
        setTemp(e.target.value)
      }}></TextField><br /> <br />
      <Button onClick={()=>{
        setName(temp)
      }} variant='contained'>Enter</Button>
    </div>
  )
}

export default StateBasic