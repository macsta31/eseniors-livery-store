import React from 'react'
import styled from 'styled-components'
import GoogleIcon from '@mui/icons-material/Google';





const LoginModal = ({ onClickReg, onClickGoogle}) => {
    

    return (
        <StyledModal>
            <StyledForm>
                <label htmlFor="">Email</label>
                <StyledInput name='email' placeholder='email'/>
                <label htmlFor="">Password</label>
                <StyledInput name='password' type="password" placeholder='password'/>
                    <StyledButton onClick={onClickReg} >Sign In</StyledButton>
                    <StyledButton onClick={onClickGoogle} style={{backgroundColor: 'white', color: 'black'}}><GoogleIcon style={{fill: 'black'}} /> Sign In with Google</StyledButton>
            </StyledForm>
        </StyledModal>
    )
}

const StyledInput = styled.input`
    padding:10px;
    margin:30px 0;
    border:1px solid black;
    border-radius: 10px;
    font-size:16px;
    color:black;
    

`

const StyledModal = styled.div
`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #11B6DA;
    width: 55%;
    max-width: 600px;




`
const StyledForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items:left
    gap: 30px;
    padding: 30px;
    width:100%;

`

const StyledButton = styled.button `
    padding: 10px 20px;
    background-color: transparent;
    border:none;
    font-size: 1.25em;
    margin: 10px;
    width: 75%;
    align-self:center;
    border-radius: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 20px;
    background-color: #43423D;

`
export default LoginModal
