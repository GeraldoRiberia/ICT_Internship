import { TextField} from '@mui/material'
import { useState } from 'react';

const AddMovie = () => {
  var[movieData, setMovieData] = useState({movieName :'',movieGenre : '', movieImg:''});
  const movieInput = (v)=>{
    console.log(v)
    setMovieData({...movieData,[v.target.name]:v.target.value})
  }
  return (
    <div>
        <div className='AddMovie'>
        <TextField required variant='outlined' label='Movie Name' 
        onChange={movieInput} name ='movieName' value = {(movieData.movieName)}/> <br /> <br />
        <TextField required variant='outlined' label='Genre'
        onChange={movieInput} name='movieGenre' value = {(movieData.movieGenre)}/> <br /> <br />
        <TextField required variant='outlined' label='Image Link'
        onChange={movieInput} name='movieImg' value = {(movieData.movieImg)}/>
    </div>
    </div>
  )
}

export default AddMovie