import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ViewMovie.css'
import { Grid, Card,CardMedia,CardContent, Typography , CardActions, Button} from '@mui/material';
const ViewMovie = () => {
  var[movieData, setMovieData] = useState([]);
  useEffect(()=>{
    axios.get('https://api.andrespecht.dev/movies').then((res)=>{
      console.log(res.data.response)
      setMovieData(res.data.response)
    }).catch((error)=>{
      console.error(error)
    })
  })
  return (
    <div>
      <Grid className='MovieGrid'container spacing={2}>
        {movieData.map((value)=>{
          return(
            // eslint-disable-next-line react/jsx-key
            <Grid item xs={8} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={value.poster}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary"> */}
                    {value.genre.map((genre)=>{
                      return(
                        <Typography  variant="body2">
                          {genre}
                        </Typography>
                      )
                    })}
                  {/* </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ViewMovie