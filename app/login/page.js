"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './page.css';

function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    function handleLogin() {

        const data = {
            email: email,
            password: password
        };

        fetch('http://localhost:4000/login', {
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
                    document.cookie = "logged_in=true; path=/";
                    console.log('Success:', data.message);
                    router.push('/');
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
                <img className='vector-image' src="Vector.png" alt="Vector" />Movie Catalog
            </div>
            <div className="row sign-up page">
                <div className='register'>Login</div>
                <div>
                    <div className='email'>Enter Your Email</div>
                    <input className='sign-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='password'>Enter Your Password</div>
                    <input className='sign-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='button' onClick={handleLogin}>Login</button>
                    <div className='response'>{response}</div>
                    <a className='click-to-signup'>Click To Signup</a>
                </div>
            </div>
        </>
    );
}
export default Login;
