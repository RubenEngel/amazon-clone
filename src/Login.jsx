import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'


const Login = () => {

    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn(e) {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            if (auth) history.push('/')
        })
        .catch(error => alert(error.message));
    }

    function register(e) {
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            console.log(auth)
            if (auth) history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt=""/>
            </Link>
            
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">

                    <h5>Email</h5>
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"/>

                    <h5>Password</h5>
                    <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button onClick={signIn} className='login__signInButton'>Sign in</button>
                    <button onClick={register} className='login__registerButton' >Create Account</button>

                    <p></p>

                </form>
            </div>

        </div>
    )
}

export default Login
