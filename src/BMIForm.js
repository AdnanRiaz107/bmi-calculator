import React from 'react'
import TextField from '@mui/material/TextField';
import './BMIForm.css'

import Button from '@mui/material/Button';

const BMIForm = ({data, setData, response, setResponse, setBmi}) => {
    const {pounds, feet, inches} = data

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData({
          ...data,//spread operator 
          [name]:value
          })
          e.preventDefault()
    }

    const submitData = () =>{

      setBmi((parseFloat(pounds) / parseFloat((parseFloat(feet * 12) + parseFloat(inches))*(parseFloat(feet * 12) + parseFloat(inches))))*703);

        // fetch("/bmicalculator",{
        //   method:"post",
        //   headers:{
        //     "Content-Type":"application/json"
        //   },
        //   body:JSON.stringify({
        //     pounds,
        //     feet,
        //     inches
        //   })
        // }).then(res=>res.json())
        // .then(data=>{
        //   if(data.error){
        //     setResponse(data.error);
        //   }
        //   else{
        //     setResponse(data.message);
        //   }
        // })
      }
  return (
    <form>
        <div className='form-display'>
            <label htmlFor="Units" className='label-display'>Units</label>
            <TextField id="standard-basic" label="Standard" disabled={true} variant="standard"/>
        </div>
        <div className='form-display'>
            <label htmlFor="Weight" className='label-display'>Weight</label>
            <TextField id="standard-basic" label="pounds" variant="standard" name='pounds' value={pounds} onChange={handleChange}/>
        </div>
        <div className='form-display'>
            <label htmlFor="Units" className='label-display'>Height</label>
            <TextField id="standard-basic" label="feet" variant="standard"  name='feet' value={feet} onChange={handleChange}/>
        </div>
        <div className='form-display'>
            <label htmlFor="Units" className='label-display height-display'>Height</label>
            <TextField id="standard-basic" label="inches" variant="standard" name='inches' value={inches} onChange={handleChange}/>
        </div>
        <div className='form-display'>
        <Button variant='contained' onClick={submitData}>Calculate BMI</Button>
        </div>
    </form>
  )
}

export default BMIForm