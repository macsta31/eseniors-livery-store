import styled from 'styled-components'
import {DataGrid} from '@mui/x-data-grid'

import { useEffect, useState } from 'react'
import { ref, listAll } from 'firebase/storage'
import { storage } from '..'
import TableCell from './TableCell'
import { Link } from 'react-router-dom'
import JSZip from 'jszip'







const FileLibrary = ({storagefiles}) => {


  var jszip = new JSZip()
  console.log(jszip)


  return (
      <StyledContainer>
          {/* <DataGrid 
              rows={rows} 
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[30]}
              checkboxSelection

          /> */}
          <StyledTitle >User List</StyledTitle>
          {storagefiles.map((file) => (
          <TableCell key={file} text={file.split("/")[1]} />
          ))}

      </StyledContainer>
  )
}

const StyledTitle = styled.h1`
background-color: #43423D;
color: white;
padding: 10px 20px;
border-radius: 8px;
margin-bottom: 30px;


`

export default FileLibrary

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.getValue(params.id, 'firstName') || ''} ${
//           params.getValue(params.id, 'lastName') || ''
//         }`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];

const StyledContainer = styled.section `
    border-radius: 8px;
    background-color: #11B6DA;
    padding: 25px;
    margin: 50px 0;
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center;
    min-width: 700px;
    flex-direction:column;
    // max-width: 600px;
`

