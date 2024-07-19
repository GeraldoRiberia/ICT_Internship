import { TextField, Grid, Button } from "@mui/material"
import './Add.css'
import { useState } from "react"
const Add = () => {
    var [studentData, setStudentData] = useState({name : "", rollno : "", class: "", department : ""})
    const inputHandler = (data)=>{
        console.log(data)
        setStudentData({...Add,[data.target.name]:data.target.department})
    }
  return (
    <div>
        <div className="divadd">
        <br />
        <Grid justifyContent={"center"} container spacing={2}>
        <Grid item xs={8} md={4}>
            <TextField required type="text" fullWidth label='Name' onChange={inputHandler}/><br /><br />
            <TextField required type="text" fullWidth label='Rollno' onChange={inputHandler}/><br /><br />
            <TextField required type="text" fullWidth label='Class'onChange={inputHandler}/><br /><br />
            <TextField required type="text" fullWidth label='Department' onChange={inputHandler}/>
            <Button style={{marginTop:'10%'} }fullWidth class ='submitButton'variant="outlined">Submit</Button>
        </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Add