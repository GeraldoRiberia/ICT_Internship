import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid,Card, CardMedia, CardContent , Typography} from '@mui/material';
const Jewelery = () => {
    var[data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/category/jewelery").then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((error)=>{
            console.error(error)
        }),[]})
  return (
    <div>
    <Grid container spacing={2}>
        {data.map((value)=>{
            return(
                // eslint-disable-next-line react/jsx-key
                <Grid item xs={12} md={4}>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia sx={{ height: 140 }}
                         image={value.image}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {value.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {value.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })}
    </Grid>
    </div>
  )
}

export default Jewelery