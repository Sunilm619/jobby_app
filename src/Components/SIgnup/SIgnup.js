import React, { useRef } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
function SIgnup() {
    let navigate = useNavigate()
    let name = useRef("")
    let email = useRef("")
    let password = useRef("")
    let confirmPassword = useRef("")
    const sigup = async () => {
        console.log(name.current.value, email.current.value, password.current.value, confirmPassword.current.value)
        let url = "http://localhost:4000/auth/signup"
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                confirmPassword: confirmPassword.current.value
            })

        }
        const fet = await fetch(url, options)
        const data = await fet.json()
        console.log(data)
        if (data.message) {
            alert(data.message)
        }
        else {
            alert("User already exists")
        }

    }
    return (
        <div className='bg-black h-screen text-slate-200 flex justify-center items-center'>
            <form onSubmit={(e) => { e.preventDefault() }} className='w-[50vw] h-[70vh] bg-slate-800 p-6'>
                <label htmlFor='name'>name</label>
                <input id='name' className='form-control' ref={name} type="text" name="username" />

                <br />
                <label htmlFor='email'>Email</label>
                <input id='email' className='form-control' ref={email} type="email" name="email" />

                <br />
                <label htmlFor='pass'>Password</label>
                <input id='pass' className='form-control' ref={password} type="password" name="password" />

                <br />
                <label htmlFor='cnf'>confirmPassword</label>
                <input id='cnf' className='form-control' ref={confirmPassword} type="password" name="confirmPassword" />

                <br />
                <div className='flex justify-center '>
                    <button onClick={() => { navigate('/login') }} className='mr-3 p-2 bg-purple-600'>Login</button>

                    <button className='bg-purple-600 p-2' onClick={sigup}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default SIgnup