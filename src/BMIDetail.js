import React from 'react'
import './BMIDetail.css'

const BMIDetail = () => {
  return (
    <div className='form-display'>
        <label htmlFor="Units" className='label-display underweight-bmi'>{`Underweight: < 18.5`}</label>
        <label htmlFor="Units" className='label-display normal-bmi'>Normal weight: 18.5-25</label>
        <label htmlFor="Units" className='label-display overweight-bmi'>Overweight: 25-30</label>
        <label htmlFor="Units" className='label-display obese-bmi'>{`Obese: > 30`}</label>
    </div>
  )
}

export default BMIDetail