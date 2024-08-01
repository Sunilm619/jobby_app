import React from 'react'
import Navbar from '../Navbar/Navbar'
import './index2.css'
import { useNavigate } from 'react-router-dom'
function Home() {
    let navigate = useNavigate()
    return (
        <>
            <div><Navbar /></div>
            <div className='bg p-8 pt-20'>
                <h1>Welcome to Home Page & Find the Job that Fits YOu</h1>
                <p className='my-20'>Milliond of llknknbjbj nknk Home Page & Find the Job </p>
                <button className='bg-purple-500 p-2' onClick={() => { navigate('/Sidebar') }}>Find Jobs</button>
            </div>
        </>

    )
}

export default Home