import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Avatar, Table } from '@mantine/core'
function TableForm() {
  const url="https://api.escuelajs.co/api/v1/users"
const[data,setData]=useState([])
useEffect(()=>{
  axios.get(url).then(res=>{
    console.log(res.data)
    setData(res.data)
  })
},[])
console.log(data);

  return (
    <div>
      <Table className='table-mantine'>
        <thead>
          <tr>
            <td>id</td>
            <td>email</td>
            <td>password</td>
            <td>name</td>
            <td>role</td>
            <td>avatar</td>
            <td>creationAt</td>
            <td>updatedAt</td>
          </tr>
        </thead>
        <tbody>{
          data.map(item=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td><Avatar src={item.avatar}></Avatar></td>
              <td>{item.creationAt}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))
          }          
        </tbody>
      </Table>
      
    </div>
  )
}

export default TableForm
