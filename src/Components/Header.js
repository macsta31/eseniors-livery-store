import React from 'react'
import styled from 'styled-components';
import { getAuth } from 'firebase/auth';



const Header = ({onClick, userStatus }) => {
    const user = getAuth()

    return (
        <StyledHeader>
            <Styledh1>E-Seniors racing league livery store</Styledh1>
            <StyledSpan>
            {user.currentUser && <p>{user.currentUser.email}</p>}
            <StyledButton onClick={onClick}>Login / Logout</StyledButton>
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
