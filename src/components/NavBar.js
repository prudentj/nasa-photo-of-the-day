import React from 'react'

const NavBar = (props) => {
    console.log(props)
    return(
        <nav> 
            <h1>Photo of the Day {props.photoOfTheDay.title}</h1>
        </nav>
    )
}
export default NavBar