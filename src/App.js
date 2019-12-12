import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./App.css"
import Photo from "./components/Photo"
import NavBar from "./components/NavBar"

function App() {

  const[photoOfTheDay, setPhotoOfTheDay] = useState('')

  useEffect(()=>{
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=q1G4vDCuPuuyAUVa2Z7EfNmRd7I6Lgrqs5qJj9nB")
      .then(res =>{
        console.log(res.data)
        setPhotoOfTheDay(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <NavBar 
      photoOfTheDay={photoOfTheDay}
      />
      <div className="frame">
        <Photo photoOfTheDay={photoOfTheDay}/>
      </div>
    </div>
  );
}

export default App;
