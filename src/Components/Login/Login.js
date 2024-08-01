import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
function Login() {
    const navigate = useNavigate()
    const nav = () => {
        navigate('/signup')
    }
    let ipval = useRef('')
    let passval = useRef('')
    const sub = async () => {
        // console.log(`Username: ${ipval.current.value}, Password: ${passval.current.value}`)
        let url = "http://localhost:4000/auth/login"
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: ipval.current.value,
                password: passval.current.value
            })
        }
        const fet = await fetch(url, options)
        const data = await fet.json()
        let token = (data["token"])
        ipval.current.value = ''
        passval.current.value = ''
        if (data) {
            navigate('/home')
            Cookies.set('TOKYON', token, { expires: 8 })
        }

    }

    return (
        <div className='bg-black h-screen text-gray-200 flex justify-center items-center'>
            <form onSubmit={(e) => { e.preventDefault() }} className='p-9 w-[40vw] h-[60vh] bg-slate-800'>
                <img className='ml-32' src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='logo' />
                <label htmlFor='email'>Username:</label>
                <input id='email' ref={ipval} type="text" name="username" className='form-control' />

                <label htmlFor='pass' className='my-3'>Password:</label>
                <input id="pass" className='form-control' ref={passval} type="password" name="password" />

                <button className='bg-purple-700 p-2 rounded-xl my-4' onClick={sub}>Submit</button>
                <button className='bg-purple-700 p-2 rounded-xl ml-3' onClick={nav}>Signup</button>
            </form>
        </div>
    )
}

export default Login