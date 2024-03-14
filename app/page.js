"use client"
import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  const [dogsList , setNumberOfDogs]=useState([])
  const [inputText, setInputText] = useState('');

  // And you will fetch the data with useEffect
  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random/' + inputText)
    .then((res)=> res.json())
    .then((data)=>setNumberOfDogs(data.message))

  }, [inputText])

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={setNumberOfDogs} setInputText={setInputText} inputText={inputText} /> 
      {/* This page should receive the images array */}
      <DogList dogsList={dogsList} />
    </div>
  );
}

