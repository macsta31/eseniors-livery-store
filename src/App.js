import './App.css';
import Header from './Components/Header';
import UploadForm from './Components/UploadForm';
import FileLibrary from './Components/FileLibrary';
import LoginModal from './Components/LoginModal';
import styled from 'styled-components';
import { useState } from 'react';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'



const StyledSection = styled.section`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
    @media (min-width: 2143px) {
      display:flex;
      flex-direction:row;
      align-items:center;
      gap: 100px;
    } 
  
  
  `
  
  

function App() {
  const auth = getAuth()
  const [loginPage, setLoginPage] = useState(false)



  const onClick = async () => {
    if(!auth.currentUser){
      setLoginPage(!loginPage)
      
    }
    else{
      await signOut(auth)
      setLoginPage(!loginPage)

    }
  } 
  const signInhandlerGoogle = async (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider()
    
    
    await signInWithPopup(auth, provider)
    setLoginPage(!loginPage)
    
  }
  const signInhandler = async (e) => {
    e.preventDefault()
    try {
      const email = e.target.form[0].value
      const password = e.target.form[1].value
      await createUserWithEmailAndPassword(auth, email, password)
      setLoginPage(!loginPage)
    }
    catch(err){
      alert(err)
    }
  }
  
  return (
    <div className="App">
      <Header onClick={onClick} />
      
      <StyledSection>

        { loginPage &&  <LoginModal onClickReg={signInhandler} onClickGoogle={signInhandlerGoogle} userStatus={loginPage} />}
        <UploadForm />
        <FileLibrary />
      </StyledSection>
    </div>
  );
}

export default App;
