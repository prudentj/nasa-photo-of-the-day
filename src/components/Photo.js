import React from 'react'

const Photo = (props) => {
    console.log(props)
    return(
         <img 
            src ={props.photoOfTheDay.url} alt={props.photoOfTheDay.title}
        />
    )
}

export default Photo