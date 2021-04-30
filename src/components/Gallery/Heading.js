import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    max-width: 70rem;
    margin: 2rem auto;
    margin-bottom: 0rem;
    text-align: center;
`;

const H1 = styled.h1`
    font-family: 'Oswald', sans-serif;
    margin-top: 2em;
    margin-bottom: 1em;
    
`;

const H3 = styled.h3`
    font-family: 'Oswald', sans-serif;
    margin-bottom: 1em;
    
`;

const P1 = styled.p`
    padding:0px 15px;
    margin-bottom: 0em;
`;

const Heading = () => {
    return (
        <Header>
            <H3>Scroll to your hearts content</H3>
            <P1>A source of freely usable images, powered by ReactJS and styled-components using infinite-scroll.</P1>
        </Header>
    )
}

export default Heading
