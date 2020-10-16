import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = (props) => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const history = useHistory()

    const changeHandler = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const loginPlease = (event) => {
        event.preventDefault()
        // /post/api/login
        console.log(login)
        axiosWithAuth()
            .post('/api/login', login)
            .then((response) => {
                window.localStorage.setItem('token', response.data.payload);
                })
            .catch(err => console.log(err))
            .finally(history.push('/colors'))
        // push to Friends List
        
    }
    return (
        <div>
          <h1>Welcome to the Bubble App!</h1>
            <h1>Please Log In:</h1>
            <form onSubmit={loginPlease}>
                <input 
                    name="username" 
                    type="text" 
                    value={login.username} 
                    onChange={changeHandler} 
                    placeholder="enter username" 
                />
                <input 
                    name="password" 
                    type="password" 
                    value={login.password} 
                    onChange={changeHandler} 
                    placeholder="enter password" 
                />
                <button onClick={loginPlease}>log in</button>
            </form>
        </div>
    )
}

export default Login
