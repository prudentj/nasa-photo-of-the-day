import React from 'react'
import styled from 'styled-components'

const NavBar = (props) => {
    console.log(`Nav bar`)
    console.log(props)

    const Navigator = styled.nav`

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 3 rem;
        padding-top: 1%;
        
    `
//Need to add the buttons to change photo of the day when I get a chance

    return(
        <Navigator> 
            <h1>Photo of the Day: {props.photoOfTheDay.title}</h1>
        </Navigator>
    )
}
export default NavBar