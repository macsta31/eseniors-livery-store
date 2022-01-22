import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { storage } from '../index.js'
import { ref, uploadBytes, listAll, updateMetadata } from 'firebase/storage';
import { getAuth } from 'firebase/auth';






const UploadForm = () => {
    const user = getAuth()
   

    const hiddenFileInput1 = React.useRef(null)
    const hiddenFileInput2 = React.useRef(null)

    const handleClick1 = (e) => {
        try{
            e.preventDefault()
            if(user.currentUser){
                hiddenFileInput1.current.click()
            }
            else{
                alert('Must be logged in to upload and download files')
            }
        }
        catch(err){
            alert(err)
        }
    }

    const [attachedFile1, setAttachedFile1] = useState('')

    const handleAttach1 = (e) => {
        e.preventDefault()
        setAttachedFile1(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!user.currentUser){
            alert('Must be Logged in to submit files')
        }
        else{
            const DesignFolder = e.target.form[1].files[0]
            if(e.target.form[2].value === ''){
                throw new Error('provide design name')
            }
            const designName = e.target.form[2].value


            const DesignStorageRef = ref(storage, `Users/${user.currentUser.displayName}/${designName}.zip`)


            await uploadBytes(DesignStorageRef, DesignStorageRef)

            const fileLocation = ref(storage, DesignStorageRef)

            const newMetaData = {
                    customMetadata : {
                    owner: `${user.currentUser.email}`
                }
            }

            await updateMetadata(fileLocation, newMetaData)

            setAttachedFile1('')

            e.target.form[2].value = ''

        }


    }

    return (
        <StyledContainer>
            <StyledForm>
                <StyledTitle>Upload Zip For Design Here</StyledTitle>
                <StyledFormControl>
                    <StyledLabel >Design Folder Zip</StyledLabel>
                    <StyledFormAttachment>
                        <StyledFileSubmit onClick={handleClick1} >Attach Livery Folder Zip</StyledFileSubmit>
                        <p style={{alignSelf:'center'}} >{attachedFile1}</p>
                    </StyledFormAttachment>
                    <input type="file" ref={hiddenFileInput1} onChange={handleAttach1} hidden />
                </StyledFormControl>
                <StyledFormControl>
                    <StyledLabel >Folder Name</StyledLabel>
                    <StyledInput placeholder='CarDesign1 //nospaces'></StyledInput>
                </StyledFormControl>
                <StyledButton onClick={handleSubmit}>Upload</StyledButton>
            </StyledForm>
        </StyledContainer>
    )
}
const StyledFormAttachment = styled.div`

    display: flex;
    flex-direction:row
    justify-content:center;
    gap: 20px;

`

const StyledInput = styled.input
`
    color: black;
    max-width:200px;
    width:80%;
    padding: 10px;


`
const StyledContainer = styled.section `
    background-color: #11B6DA;
    padding: 20px;
    margin: 100px 0px;
    display: flex;
    align-items: center;
    max-width: 600px;
    justify-content: center;
    border-radius: 8px;
`

const StyledForm = styled.form `
    display:flex;
    flex-direction:column;
    justfiy-content:center;
    align-items:left;
    margin: 50px;
    max-width: 800px;
    width: 700px
`

const StyledFormControl = styled.div `
    display:flex;
    flex-direction:column;
    gap: 10px;
    margin: 20px 0;

`

const StyledFileSubmit = styled.button `
    color: black;
    width:200px;
    width:max;
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

export default UploadForm
