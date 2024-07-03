import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import './New.css'

const New = () => {
    var [Data, setData] = useState('Click the Button');

  return (
    <div>
        <Typography align='center' id='headingwelcome' variant='h4'>Welcome To {Data}</Typography><br /><br />
        <Button onClick={()=>{
            setData('Home')
        }} id='HomeButton' variant='contained'>Home</Button>&nbsp;&nbsp;
        <Button onClick={()=>{
            setData('Gallery')
        }} id = 'GalleryButton'variant='contained' color='secondary'>Gallery</Button>&nbsp;&nbsp;
        <Button onClick={()=>{
            setData('Contact')
        }} id='ContactButton' variant='contained' color='error'>Contact</Button>
    </div>
  )
}

export default New