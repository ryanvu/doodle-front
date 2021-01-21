import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import Cookie from 'js-cookie';
const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();

 
    const handleLogin = (e) => {
        e.preventDefault();
        const username = userRef.current.value;
        const password = passwordRef.current.value;
        const logInfo = { 
            'username': username, 
            'password': password 
        };

        if (!username || !password) {
            alert('no empty fields')

        }
        axios.post('http://localhost:5000/login', logInfo, { withCredentials: true })
        .then(res => {
            const id = res.data.user.sessionid;
            const cookie = Cookie.get('connect.sid')
            console.log(cookie)
            
        })
        .catch(err => {
            console.log(err);
        })
        // fetch(`http://localhost:5000/login`, {
        //     method: 'post',
        //     body: {"username": username, "password": password}
        // }).then(res => {
        //     return res.json()
        // }).then(data => {
        //     console.log(data);
        // }).catch(err => {
        //     console.log(err)
        // })
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input ref={userRef}type="text"/>
                <label htmlFor="password">Password</label>
                <input ref={passwordRef}type="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
