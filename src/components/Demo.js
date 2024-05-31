import { Card, Image,  CardSection, Title, Box } from '@mantine/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Demo() {
  const url="https://fakestoreapi.com/products"
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(url).then(res=>{console.log(res.data) 
    setData(res.data)})
  },[])
  console.log(data)
return (
    <div>
      {
        data.map(it=>(
          <Card key={it.id}>
            <Box>
            <CardSection className='image-mantine'><Image src={it.image}></Image></CardSection>
            <CardSection>{it.title}</CardSection>
            <CardSection>{it.price}</CardSection>
            <CardSection>{it.description}</CardSection>
            <CardSection>{it.category}</CardSection>
            </Box>
        
            </Card>
        )
        )}
  </div>
  )
  }
export default Demo