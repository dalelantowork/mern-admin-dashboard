import React from 'react'
import styled from 'styled-components'

const UnsplashImage = ({url,key}) => {
    const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    `;

    return (
        <Img src={url} key={key} alt="" />
    )
}

export default UnsplashImage