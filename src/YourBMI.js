import React from 'react'
import TextField from '@mui/material/TextField';
import './YourBMI.css'

const YourBMI = ({bmi}) => {
  return (
    <div className='form-display'>
        <label htmlFor="Units" className='label-display'>Your BMI</label>
        <label htmlFor="Units" className='label-display your-bmi'
          style={{backgroundColor:"grey"}}
        >{bmi}</label>
    </div>
  )
}

export default YourBMI