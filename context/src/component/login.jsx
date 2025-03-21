
import { useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

             
           const [userName, setUserName] = useState('');
           const [password, setPassword] = useState('');


           const {setUser} = useContext(UserContext);


              const handleSubmit= (e) =>{
                e.preventDefault();
                setUser({userName, password});
              }
  return (



    <div>
        <h2>Login</h2>
        <input type='text' placeholder='Enter Name' value={userName} onChange={(e) => setUserName(e.target.value)}/>
        {" "}
        <input type='password' placeholder='Enter password' value={password} onChange={(e) =>setPassword(e.target.value)}/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login