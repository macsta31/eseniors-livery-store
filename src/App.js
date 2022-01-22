import './App.css';
import Header from './Components/Header';
import UploadForm from './Components/UploadForm';
import FileLibrary from './Components/FileLibrary';
import LoginModal from './Components/LoginModal';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { storage } from '.';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, updateProfile } from 'firebase/auth'
import { ref, list } from 'firebase/storage'




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
  const [files, setFiles] = useState([])

  useEffect(() => {
      getFilesfromStorage()

  }, [])

  const getFilesfromStorage = async () => {
    
    const data = await listdata()
    const actualdata = data.map((item) => {
      return item.fullPath
    })
    setFiles(actualdata)
    
  }

  const listdata = async () => {
    const listRef = ref(storage, 'Users/')


    const UsersArray = await list(listRef)
    const Users = UsersArray.prefixes

    // for(const folder of Users) {
    //   const designFolders = await list(folder)
    //   designFolders.prefixes.forEach((location) => {
    //     folders.push(location)
    //   })
    // }
    return Users
  }
  


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
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
      
    }).catch((err) => {
      console.log(err)
    })
    setLoginPage(!loginPage)
    
  }

  const signUphandler = async (e) => {
    e.preventDefault()
    try {
      const email = e.target.form[2].value
      const password = e.target.form[3].value
      const DisplayName = `${e.target.form[0].value +' '+ e.target.form[1].value}`
      if(e.target.form[0].value  === '' || e.target.form[1].value  === ''){
        throw new Error('PROVIDE FIRST AND LAST NAME') 
      }  
      await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res)
        
      })
      await updateProfile(auth.currentUser, {displayName: DisplayName})
      window.location.reload(true)
      setLoginPage(!loginPage)
    }
    catch(err){
      alert(err)
    }
  }

  const signInhandler = async (e) => {
    e.preventDefault()
    await setPersistence(auth, browserSessionPersistence)
    const email = e.target.form[0].value
    const password = e.target.form[1].value
    await signInWithEmailAndPassword(auth, email, password)
    
    window.sessionStorage.setItem('isUserLogged', true)
    setLoginPage(!loginPage)
  }
  
  return (
    <div className="App">
      <Header onClick={onClick}  />
      
      <StyledSection>

        { loginPage &&  <LoginModal onClickReg={signInhandler} onClickGoogle={signInhandlerGoogle} onClickSignUp={signUphandler}/>}
        <UploadForm />
        <FileLibrary  storagefiles={files} />
      </StyledSection>
    </div>
  );
}

export default App;
