import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.section `
    background-color: #11B6DA;
    padding: 20px;
    margin: 75px 200px;

`

const StyledForm = styled.form `
    display:flex;
    flex-direction:column;
    justfiy-content:center;
    align-items:left;
    margin: 50px;

`

const StyledFormControl = styled.div `
    display:flex;
    flex-direction:column;
    gap: 10px;
    margin: 20px 0;

`

const StyledFileSubmit = styled.button `
    color: black;
    width:max-content;
    padding: 10px;
    
    

`
const StyledButton = styled.button `
    margin-top: 20px;
    background-color: #43423D;
    border:none;
    padding: 8px;
    font-size: 20px;


`
const StyledTitle = styled.h1 `
    align-self:center;
    margin-bottom: 10px;
    font-weight: 400;

`
const StyledLabel = styled.label `
    font-size: 1.25em;

`


const UploadForm = () => {

    const hiddenFileInput1 = React.useRef(null)
    const hiddenFileInput2 = React.useRef(null)

    const handleClick1 = (e) => {
        hiddenFileInput1.current.click()
    }
    const handleClick2 = (e) => {
        hiddenFileInput2.current.click()
    }


    return (
        <StyledContainer>
            <StyledForm>
                <StyledTitle>Upload Files For Livery Here</StyledTitle>
                <StyledFormControl>
                    <StyledLabel >Livery Folder Zip</StyledLabel>
                    <StyledFileSubmit onClick={handleClick1}>Attach Livery Folder Zip</StyledFileSubmit>
                    <input type="file" ref={hiddenFileInput1} hidden />
                </StyledFormControl>
                <StyledFormControl>
                    <StyledLabel >Car Folder Zip</StyledLabel>
                    <input type="file" ref={hiddenFileInput2}  hidden/>
                    <StyledFileSubmit onClick={handleClick1}>Attach Car Folder Zip</StyledFileSubmit>
                </StyledFormControl>
                <StyledButton>Upload</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}

export default UploadForm
