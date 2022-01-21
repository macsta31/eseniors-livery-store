import styled from 'styled-components'
import { Link } from 'react-router-dom';



const TableCell = ({text}) => {

    
  return (
    <StyledContainer>
        <Link to={`Files/${text}`} ><p>{text}</p></Link>
        <StyledButton>Download</StyledButton>
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
    width:100%;
    background-color:#43423D;
    color: black;
    padding: 15px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius: 8px;
    

`
const StyledButton = styled.button`
    background-color:#11B6DA;
    border:none;
    padding:10px;
    border-radius: 8px;



`

export default TableCell;
