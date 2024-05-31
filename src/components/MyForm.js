import React, { useState } from 'react'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import{useForm} from "@mantine/form"
const MyForm=()=>{
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phnNo,setPhnNo]=useState('')
  const[address,setAdress]=useState('')
  const[password,setPassword]=useState('')
  const submitHandler=(e)=>{
    e.preventDefualt();
    console.log("Data",name,email,phnNo,address,password)
  }
  const obj={
    name:name,
    email:email,
    phnNo:phnNo,
    address:address,
    password:password
  }
 
console.log(obj,'name');

  return (
    <div className='form-mantine'>
      <form onSubmit={submitHandler}>
<TextInput   type='text'placeholder='enter the name' value={name} onChange={(e)=>setName(e.target.value)} label='Name' name='name'/>

<TextInput  type='email'placeholder='enter the EMail' value={email} onChange={(e)=>setEmail(e.target.value)} label='Email' name='name'/>

<TextInput type='number' placeholder='enter the mobile number' value={phnNo} onChange={(e)=>setPhnNo(e.target.value)} label='Mobile Number' name='name'/>
     
<TextInput type='text'placeholder='enter the Address' value={address} onChange={(e)=>setAdress(e.target.value)} label='Address' name='name'/>

<PasswordInput type='password'placeholder='enter the Password' value={password} onChange={(e)=>setPassword(e.target.value)} label='Password' name='name'/>

<Button>submit</Button>
      </form>
      
    </div>
  )
}

export default MyForm
