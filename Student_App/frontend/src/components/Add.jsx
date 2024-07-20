import { TextField, Grid, Button } from "@mui/material"
import './Add.css'
import { useLocation, useNavigate } from "react-router-dom"
import {  useEffect, useState } from "react"
import axios from "axios"
const Add = (props) => {
    var navigate = useNavigate();
    var location = useLocation();
    var updtBody = location.state.val
    useEffect(()=>{
        if(updtBody != null){
          setStudentData({...studentData,name: updtBody.name, rollno:updtBody.rollno, class : updtBody.class, department: updtBody.department})
        }
    },[])

    var[studentData, setStudentData] = useState({name:"", rollno :"", class :"", department : ""})
    const inputHandler = (r)=>{
        console.log(r)
        setStudentData({...studentData,[r.target.name]:r.target.value})

    }
    const setSubmit = ()=>{
        console.log(studentData);
        if(updtBody != null){
          axios.put('http://localhost:3000/edit/'+updtBody._id,studentData).then((res)=>{
            console.log(res.data)
            
          }).catch((error)=>{
              console.log(error);
          })
        }
        else{
          axios.put('http://localhost:3000/add',studentData).then((res)=>{
            console.log(res.data)
          }).catch((error)=>{
            console.log(error);
          })
        }
        navigate('/view')
        }
    

  return (
    <div>
        <div className="divadd">
        <br />
        <Grid justifyContent={"center"} container spacing={2}>
        <Grid item xs={8} md={4}>
            <TextField required fullWidth variant='outlined' label='Name' 
            onChange={inputHandler} name ='name' value = {(studentData.name)}/> <br /> <br />
            <TextField required fullWidth variant='outlined' label='Rollno'
            onChange={inputHandler} name='rollno' value = {(studentData.rollno)}/> <br /> <br />
            <TextField required fullWidth variant='outlined' label='Class'
            onChange={inputHandler} name='class' value = {(studentData.class)}/><br /> <br />
            <TextField required fullWidth variant='outlined' label='Department'
            onChange={inputHandler} name='department' value = {(studentData.department)}/><br /> <br />
            <Button style={{marginTop:'10%'} }fullWidth className ='submitButton' variant="contained" onClick={setSubmit}>Submit</Button>
        </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Add