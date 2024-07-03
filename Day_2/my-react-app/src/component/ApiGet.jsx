import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TableContainer, TableRow, TableBody, TableCell, Table, TableHead } from '@mui/material';

const ApiGet = () => {
  var [data,setData] = useState([]);
  //axios syntax
  // axios.get("url").then().catch()

  // useEffect
  // useEffect(()=>{},[])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      console.log(res)
      setData(res.data)
    })
  .catch((error)=>{
    console.error(error);
  }),[]})
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val,i)=>{
              return(
                <TableRow key = {i}>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.website}</TableCell>
              </TableRow>
              )
              
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ApiGet