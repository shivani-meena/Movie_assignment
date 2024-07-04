"use client";
import './page.css';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    function handleSignup () {

    const data = {
      email: email,
      password: password
    };

    fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network was not ok ' + response.statusText)
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          console.log('Success:', data.message);
        } else {
          console.log('Error:', data.message);
        }
        setResponse(data.message);
      })
      .catch(error => {
        setResponse(data.message);
        console.error('Error:', data.message);
      });
  };

    return (
        <>
            <div className='image-signup'>
                <img className='vector-image' src="Vector.png" alt="Vector" />
                Movie Catalog
            </div>
            <div className="row sign-up page">
                <div className='register'>Register</div>
                <div>
                    <div className='email'>Enter Your Email</div>
                    <input className='sign-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='email'>Enter Your Password</div>
                    <input className='sign-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='button' onClick={handleSignup}>Register</button>
                    <div className='response'>{response}</div>
                    <a href="/register" className='click-to-login'>Click To Login</a>
                </div>
            </div>
        </>
    );
}
export default Register;
