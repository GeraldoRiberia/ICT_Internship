import { Grid, Button, Card, CardContent, Typography, CardActions, Box } from "@mui/material"
import {useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { red } from "@mui/material/colors"
import "./View.css"

const View = () => {
  var navigate = useNavigate();
  var[stdData, setStdData] = useState([])
  useEffect (()=>{
    axios.get('http://localhost:3000/view').then((response)=>{
    console.log(response);
    setStdData(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  },[])  //variable in the dependency array will run the hook everytime the variable changes

  const deleteStudent = (id)=>{
    console.log(id)
    axios.delete('http://localhost:3000/remove/'+id).then((response)=>{
    console.log(response);
    window.location.reload(true);
    }).catch((error)=>{
      console.log(error);
    })
  }

  const clickUpdate = (data)=>{
    navigate('/add', {state :{val : data}})
    console.log(data);
  }
  return (
    <div id="viewBackground">
      <br />
      <Grid justifyContent={"flex-start"} container spacing={2}>
        {stdData.map((data)=>{
          return(
            <Grid key = {data.id} item xs={6} md={3}>
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
                <Button id ="editButton" onClick={()=>{clickUpdate(data)}} variant="contained" size="small">Edit</Button>
                <Button size="small" onClick={()=>{deleteStudent(data._id)}} variant="contained" id="deleteButton">Delete</Button>
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