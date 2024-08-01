import React from 'react'

function Noroute() {
    return (
        <div className='text-center' >
            <div className='flex justify-center'>
                <img className=" h-[70vh] w-[70vw]" src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png" alt="found" />
            </div>
            <h4>Page Not Found</h4>
            <p>We are Sorry </p>
        </div>
    )
}

export default Noroute