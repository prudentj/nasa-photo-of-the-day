import React, { useEffect, useState } from "react"
import axios from 'axios'
import styled from 'styled-components'
import "./App.css"
import Photo from "./components/Photo"
import NavBar from "./components/NavBar"

function App() {

  const[photoOfTheDay, setPhotoOfTheDay] = useState('')
  const[year,setYear] = useState(2019)
  const[month, setMonth]= useState(11)
  const [day, setDay] =useState(11)

  const Frame = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top:1rem;
  `

  const App = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
  `
 const clickHandler = (buttonName) => {
    switch(buttonName){
      case 'Yplus':
        setYear(year + 1)
        break;
      case 'Yminus':
        setYear(year - 1)
        break;
      case 'Mplus':
        setMonth(month + 1)
        break;
      case 'Mminus':
        setMonth(month - 1)
        break;
      case 'Dplus':
        setDay(day + 1)
        break;
      case 'Dminus':
        setDay(day - 1)
        break;
      default:
    }
  }

  useEffect(()=>{
    
    axios.get("https://api.nasa.gov/planetary/apod?api_key=q1G4vDCuPuuyAUVa2Z7EfNmRd7I6Lgrqs5qJj9nB")
      .then(res =>{
        console.log(res.data)
        setPhotoOfTheDay(res.data)
      })
      .catch(err => {
        console.log(err)
        setPhotoOfTheDay({
          copyright: "opensource",
          date:"",
          explanation: "You have selected an invalid date.",
          hdurl: "https://images.unsplash.com/photo-1572280135715-edc1567580aa",
          media_type: "image",
          service_version: "yes",
          title: "Error Photo Not Found",
          url:"https://images.unsplash.com/photo-1572280135715-edc1567580aa"
        })
      })
  }, [year, month, day])
  return (
    <App>
      <NavBar photoOfTheDay={photoOfTheDay}
        year = {year}
        month = {month}
        day = {day}
        title = {photoOfTheDay}
        clickHandler = {clickHandler}
      />
      <Frame>
        <Photo photoOfTheDay={photoOfTheDay}/>
      </Frame>
    </App>
  );
}

export default App;
