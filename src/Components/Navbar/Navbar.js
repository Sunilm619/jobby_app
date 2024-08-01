import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sideabar from '../Sideabar/Sideabar'


function Navbar() {
    let navigate = useNavigate()
    return (
        <div className='h-[12vh] w-screen flex justify-around bg-slate-700 items-center text-zinc-300'>
            <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="slogo" className='h-4/6' />
            <div className='flex justify-around'>
                <button onClick={() => { navigate('/home') }}>Home</button>
                <button onClick={() => { navigate('/Sidebar') }} className='ml-3'>Jobs</button>
            </div>
            <button onClick={() => { navigate('/login') }} className='bg-purple-500 p-2 rounded-xl'>Logout</button>
        </div>
    )
}

export default Navbar