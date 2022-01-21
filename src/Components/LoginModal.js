import React from 'react'
import styled from 'styled-components'
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';





const LoginModal = ({ onClickReg, onClickGoogle, onClickSignUp}) => {

    const [signIn, setSignUp] = useState('signIn')
    

    return (
        <StyledModal>
            <StyledForm>

                {signIn === 'signIn' ? 
                <div>
                    <StyledFormControl style={{width:'100%'}}>
                        <label htmlFor="">Email</label>
                        <StyledInput name='email' placeholder='email'/>
                        <label htmlFor="">Password</label>
                        <StyledInput name='password' type="password" placeholder='password'/>
                    </StyledFormControl>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <StyledButton onClick={onClickReg} >Sign In</StyledButton>
                        <StyledButton onClick={onClickGoogle} style={{backgroundColor: 'white', color: 'black'}}><GoogleIcon style={{fill: 'black'}} /> Sign In with Google</StyledButton>
                        <SignUpButton onClick={() => setSignUp('signUp')}>Don't have an account? Sign Up </SignUpButton>



                    </div>
                </div>
                : 
                <div>
                    <StyledFormControl>
                        <label htmlFor="firstName">First Name</label>
                        <StyledInput name='firstName' ></StyledInput>
                    </StyledFormControl>
                    <StyledFormControl>
                            <label htmlFor="lastName">LastName</label>
                            <StyledInput name='lastName' ></StyledInput>
                    </StyledFormControl>
                    <StyledFormControl>
                        <label htmlFor="email">Email</label>
                        <StyledInput name='email' placeholder='name@provider.com'></StyledInput>
                    </StyledFormControl>
                    <StyledFormControl>
                        <label htmlFor="password">Password</label>
                        <StyledInput name='password' type='password'></StyledInput>
                    </StyledFormControl>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <StyledButton onClick={onClickSignUp} >Sign Up</StyledButton>
                        <SignInButton onClick={() => setSignUp('signIn')}>Have an Account? Sign In</SignInButton>
                    </div>
                    
                </div>
                
                }
                
                
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
const SignUpButton = styled.button `
    border:none;
    background-color: transparent;
    margin-top: 5px;
    &:hover{
        border-bottom: 1px solid black;
    }

`


const SignInButton = styled.button`
    border:none;
    background-color: transparent;
    margin-top: 5px;
    &:hover{
        border-bottom: 1px solid black;
    }

`

const StyledModal = styled.div
`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #11B6DA;
    width: 55%;
    max-width: 600px;
    @media (max-width: 2143px) {
        margin-top: 40px
    } 
    border-radius: 8px;




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
const StyledFormControl = styled.div `
display:flex;
flex-direction:column;
width: 60%
`


export default LoginModal
