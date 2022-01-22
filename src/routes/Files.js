import React from 'react';
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { ref, list, getDownloadURL } from "firebase/storage";
import { storage } from '../index';

const Files = () => {
    const getAccount = () => {
        const url = window.location.href
        return url.split("/")[4]
    }

    const [files, setFiles] = useState([])
    const [urls, seturls] = useState([])
    const account = getAccount()
    const location = `Users/${account}`

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
        const downloadURL = await getDownloadURL(ref(storage, url))
        seturls([downloadURL])

    }




  return (
    <StyledBox>
          <StyledTable>
          <StyledTitle>{account}'s Design Library</StyledTitle>
          <StyledUl>
            {goodFiles.map((file) => (      
            <StyledTableCell key={file} >
                <StyledFileName>
                    {file.split("/")[2]}
                </StyledFileName>
                <div>
                    <StyledButton onClick={downloadFile} >Get Links</StyledButton>
                </div>
            </StyledTableCell>
            ))}
            </StyledUl>
            {urls.map((url) => (
                <StyledA key={urls} href={`${urls}`} target="_blank" >{urls[0].split("?")[0].split("0")[3]}</StyledA>
            ))}
          </StyledTable>
    </StyledBox>
  )
};
const StyledButton = styled.button `
    background-color:#43423D;
    border:none;
    padding: 10px;

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
