import { TextField, Grid, Button } from "@mui/material"
import './Add.css'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
const Update = () => {
    var[studentData, setStudentData] = useState({name:"", rollno :"", class :"", department : ""})
    const inputHandler = (r)=>{
        console.log(r)
        setStudentData({...studentData,[r.target.name]:r.target.value})

    }
    const setSubmit = (filter)=>{
        console.log(studentData);
        axios.put('http://localhost:3000/edit/'+filter,studentData).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log(error);
        })
      }
    
  return (
    <div>
        <div className="divadd">
        <br />
        <Grid justifyContent={"center"} container spacing={2}>
        <Grid item xs={8} md={4}>
            <TextField required fullWidth variant='outlined' label="Name"
            onChange={inputHandler} name ='name' value = {(studentData.name)}/> <br /> <br />
            <TextField required fullWidth variant='outlined' label='Rollno'
            onChange={inputHandler} name='rollno' value = {(studentData.rollno)}/> <br /> <br />
            <TextField required fullWidth variant='outlined' label='Class'
            onChange={inputHandler} name='class' value = {(studentData.class)}/><br /> <br />
            <TextField required fullWidth variant='outlined' label='Department'
            onChange={inputHandler} name='department' value = {(studentData.department)}/><br /> <br />
            <Button style={{marginTop:'10%'} }fullWidth className ='submitButton' variant="contained" onClick={()=>{setSubmit(studentData._id)}}>Submit</Button>
        </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Update