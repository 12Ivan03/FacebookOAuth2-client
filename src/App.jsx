import axios from 'axios'
import './App.css'
import { useState } from 'react';


function App() {

  const [ openForm, setOpenForm ] = useState(false)
  const [ username, setUsername ] = useState('')

  const handleOpenForm = () => setOpenForm(!openForm)
  const handleUsername = (e) => setUsername(e.target.value)
 
  
  const handleFbLogin = async () => {
    // console.log('button clicked')
    try{
      const response = await axios.get('http://localhost:5005/auth/facebook-login');
      const url = response.data.ApiResponse;

      console.log(url)

      window.location.href = url;

    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <div className='main flexbox'>

      <div className='login-register-container'>
          <div className='login-form flexbox'>

              <h1>Login</h1>

              <form>

                  <div className='field-holder'>
                    <input type='text' id='username' placeholder=' ' value={username} onChange={handleUsername}/>
                    <label htmlFor="username">Username:</label>
                  </div>

                  <div className='field-holder'>
                    <input type='text' id='password' placeholder=' '/>
                    <label htmlFor="password">Password:</label>
                  </div>

                  <button>login</button>
              </form>

              <button className='face-button' onClick={handleFbLogin}>Login with Facebook</button>
          </div>

          <div className={`register-form flexbox ${openForm ? 'register-form-active' : ''}`}>

              <div onClick={handleOpenForm} className='open-form-div'></div>
              <h1>Register</h1>

              <form>
              <div className='field-holder'>
                    <input type='text' id='register-username' placeholder=' '/>
                    <label htmlFor="register-username">Username:</label>
                  </div>

                  <div className='field-holder'>
                    <input type='text' id='register-password' placeholder=' '/>
                    <label htmlFor="register-password">Password:</label>
                  </div>

                  <div className='field-holder'>
                    <input type='text' id='register-password-confirm' placeholder=' '/>
                    <label htmlFor="pregister-password-confirm">Password:</label>
                  </div>

                  <button>Register</button>
              </form>

              <button className='face-button' onClick={handleFbLogin}>Login with Facebook</button>
          </div>
      </div>
    </div>
  )
}

export default App
