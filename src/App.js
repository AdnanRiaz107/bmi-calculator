import { useState } from 'react';
import './App.css';
import BMIForm from './BMIForm';
import YourBMI from './YourBMI'
import BMIDetail from './BMIDetail';

function App() {
  const [data, setData] = useState({
    pounds:"",
    feet:"",
    inches:""
  })

  const [response, setResponse] = useState("")

  const [bmi, setBmi] = useState(0)

  return (
    <>
      <h1 className='bmi-heading'>BMI Calculator</h1>
      <div className='main-div'>
        <BMIForm data={data} setData={setData} response={response} setResponse={setResponse} setBmi={setBmi}/>
      </div>
      <div className='main-div'>
        <YourBMI bmi={bmi}/>
      </div>
      <div className='main-div'>
        <BMIDetail/>
      </div>
    </>
  );
}

export default App;
