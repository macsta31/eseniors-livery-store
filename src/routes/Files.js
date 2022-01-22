import React from 'react';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { ref, list, getDownloadURL, deleteObject, getMetadata } from "firebase/storage";
import { storage } from '../index';
import { getAuth } from 'firebase/auth'


const Files = () => {
    const auth = getAuth()
    const getAccount = () => {
        const url = window.location.href
        return url.split("/")[4]
    }

    const [files, setFiles] = useState([])
    const [urls, seturls] = useState([])
    const account = getAccount().replace('%20', ' ')
    const location = `Users/${account.replace('%20', ' ')}`


    useEffect(() => {
        async function getFiles(account) {
            const listRef = ref(storage, location)
            const folders = await list(listRef)
            setFiles(folders.items)

        }
        getFiles()
    }, [])
    const goodFiles = files.map((file) => {
        return file.fullPath
    })

    // const loop = async (items) => {
    //     const URLS = []
    //     for(const item of items) {
    //         await getDownloadURL(ref(storage, item))
    //         .then((url) => {
    //             URLS.push(url)
    //         })   
    //     }
    //     return URLS
    // }

    // const getUrls = async (data) => {
    //     const items = data.items
    //     const goodURLS = await loop(items)
    //     return goodURLS
    // }

    const downloadFile = async (e) => {
        e.preventDefault()
        const urlEnding = e.target.form.children[0].innerText
        const url = `Users/${account}/${urlEnding}`
        console.log(url)
        const downloadURL = await getDownloadURL(ref(storage, url))
        console.log(downloadURL)
        seturls([downloadURL])

    }

    const deleteFile = async (e) => {
        e.preventDefault();
        const location = e.target.id
        const fileRef = ref(storage, location)

        const metaData = await getMetadata(fileRef)
        if(metaData.customMetadata.owner !== auth.currentUser.email){
            throw new Error('You do not own this file')
        }
        else{
            await deleteObject(fileRef)
        }
        window.location.reload(true)
    }




  return (
    <StyledBox>
          <StyledTable>
          <StyledTitle>{account.replace('%20', ' ')} Design Library</StyledTitle>
          <StyledUl>
            {goodFiles.map((file) => (      
            <StyledTableCell key={file} >
                <StyledFileName>
                    {file.split("/")[2]}
                </StyledFileName>
                <div style={{display: 'flex', gap: '20px'}}>
                    <StyledButton onClick={downloadFile} >Get Links</StyledButton>
                    <StyledButton onClick={deleteFile} id={`${file}`} keyprop={file} style={{backgroundColor: 'red'}} >Delete</StyledButton>
                </div>
            </StyledTableCell>
            ))}
            </StyledUl>
            {urls.map((url) => (
                <StyledA key={urls} href={`${urls}`} target="_blank" >{url.split('2F')[2].split('?')[0]} Download</StyledA>
            ))}
          </StyledTable>
    </StyledBox>
  )
};
const StyledButton = styled.button `
    background-color:#43423D;
    border:none;
    padding: 10px;
    border-radius: 8px;

`
const StyledFileName = styled.div`

    color: black;

`
const StyledA = styled.a`
    color:white;
    margin: 15px;
    background-color: #43423D;
    border:none;
    padding: 10px;
    text-decoration: none;

`

const StyledTitle = styled.h1`
    color:white;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color:#43423D;



`
const StyledUl = styled.ul`
    width: 75%;
    margin-bottom: 30px;
    background-color: white;
    list-style-type: none;
`

const StyledBox = styled.div`
    width:100vw;
    height:100vh;
    min-height:100vh;
    background-color: #43423D;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`



const StyledTable = styled.div `
width: 85%;
min-height: 85%;
background-color:#11B6DA;
color: black;
border-radius: 30px;
padding: 40px;
padding: 75px;
display:flex;
flex-direction:column;
align-items:center;

`
const StyledTableCell = styled.form`
    display:flex;
    align-items:center;
    justify-content:space-between;

    color:black;
    padding: 12px 30px;



`

export default Files;
