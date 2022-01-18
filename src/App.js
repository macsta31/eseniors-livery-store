import './App.css';
import Header from './Components/Header';
import UploadForm from './Components/UploadForm';
import FileLibrary from './Components/FileLibrary';
import styled from 'styled-components';

const StyledSection = styled.section`

  flex-direction: column;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (min-width: 2000px) {
    flex-direction: row;
  }
  
  
  `

function App() {
  
  return (
    <div className="App">
      <Header />
      <StyledSection>
        <UploadForm />
        <FileLibrary />
      </StyledSection>
    </div>
  );
}

export default App;
