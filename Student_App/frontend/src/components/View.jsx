import { TextField, Grid, Button, Card, CardContent, Typography, CardActions } from "@mui/material"
import {useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const View = () => {
  var[stdData, setStdData] = useState([])
   
  useState (()=>{
    axios.get('http://localhost:3000/view').then((response)=>{
    console.log(response);
    setStdData(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  const deleteStudent = (id)=>{
    console.log(id)
    axios.delete("http://localhost:3000/remove"+id).then((response)=>{
    console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div>
      <br />
      <Grid justifyContent={"center"} container spacing={2}>
        {stdData.map((data)=>{
          return(
            <Grid key = {data.id} item xs={6} md={8}>
              <Card sx={{flexGrow:1}}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {data.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data.department}
                </Typography>
                <Typography variant="body2">
                  class : {data.class}<br/>
                  roll no : {data.rollno}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"><Link style={{textDecoration:'none', color:'teal'}} to={'/add'}>Edit</Link></Button>
                <Button size="small" onClick={()=>{deleteStudent(data.rollno)}}>Delete</Button>
              </CardActions>
            </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default View