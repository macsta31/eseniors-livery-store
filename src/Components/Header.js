import React from 'react'
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';



const Header = ({onClick}) => {
    const auth = getAuth()


    const [uid, setuid] = useState(0)
    


    onAuthStateChanged(auth, (user) => {
        if(user){
            setuid(user.uid)
        }
        else{
            setuid(0)
        }
    })
    
    


    return (
        <StyledHeader>
            <Styledh1>E-Seniors racing league livery store</Styledh1>
            <StyledSpan>
                {uid !== 0 && <p>{auth.currentUser.displayName}</p>}
            <StyledButton onClick={onClick}>{uid === 0 ? 'Login' : 'Logout'}</StyledButton>
            </StyledSpan>
        </StyledHeader>
    )
}
const StyledSpan = styled.span`
display:flex;
align-items: center;
justify-content: center;
gap: 45px;



`

const StyledHeader = styled.div `
    width:100vw;
    display:flex;
    font-family: 'Robot Mono';
    align-items:center;
    justify-content:space-between;
    gap: 3em;
    padding: 40px 110px ;
    background-color: #11B6DA;
    z-index: 1;
`
const Styledh1 = styled.h1 `


`
const StyledButton = styled.button `
    padding: 10px 20px;
    background-color: #43423D;
    border:none;
    font-size: 1.25em;

`

export default Header
