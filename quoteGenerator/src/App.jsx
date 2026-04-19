import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async() => {
    try{
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data.slip.advice);
    }catch (error){
      console.log(error);
    }
  };

  useEffect(() =>{
    fetchAdvice();
  } ,[]);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={fetchAdvice}>Give me advice</button>
    </div>
  )
}
