import React from 'react'
import styled from 'styled-components'

const AstralPhoto = styled.img`

    width: 100%;
    max-height: 80vh;
    max-width: 900px;

`
const Frame = styled.div`

    display-flex: column;
    justify-content: center;
    align-content: center;

`

const Photo = (props) => {
    console.log(props)
    return(
        <Frame>
            <AstralPhoto
                src ={props.photoOfTheDay.url} alt={props.photoOfTheDay.title}
            />
            {props.photoOfTheDay.copyright ? (
                <p className= "photoCopyright">
                {`Copyright: ${props.photoOfTheDay.copyright}`}
            </p>
        ):(
            <></>
        )}
        </Frame>
    )
}

export default Photo