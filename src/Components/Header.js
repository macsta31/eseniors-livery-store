import React from 'react'
import styled from 'styled-components';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const StyledHeader = styled.div `

    display:flex;
    font-family: 'Robot Mono';
    align-items:center;
    justify-content:space-between;
    gap: 3em;
    padding: 40px 110px ;
    background-color: #11B6DA;
`
const Styledh1 = styled.h1 `


`
const StyledButton = styled.button `
    padding: 10px 20px;
    background-color: #43423D;
    border:none;
    font-size: 1.25em;

`

  



const Header = () => {
    const auth = getAuth()
    const signInhandler = () => {
        const provider = new GoogleAuthProvider()
        
        signInWithPopup(auth, provider)
      
    }
    
    return (
        <StyledHeader>
            <Styledh1>E-Seniors racing league livery store</Styledh1>
            <StyledButton onClick={signInhandler} >Login</StyledButton>
        </StyledHeader>
    )
}

export default Header
