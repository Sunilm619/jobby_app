import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from '../Navbar/Navbar'
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BsFillBagDashFill } from "react-icons/bs";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

function Detailedjobs() {
    const [compltdlis, setCompltdlis] = useState([])
    const [skills, setSkills] = useState([])
    const [lifeat, setLifeat] = useState({})
    // console.log(useParams())
    const { id } = useParams()

    const api = async () => {
        const fet = await fetch(`http://localhost:4000/api/jobs/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('TOKYON')}`,
                },
            }
        )
        const data = await fet.json()
        setCompltdlis(data.completejobs)
        setSkills(data.completejobs.skills)
        setLifeat(data.completejobs.lifeAtCompany)
        console.log(data.completejobs)
    }
    useEffect(() => {
        api()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='bg-black text-gray-200'>
                <div className=' flex justify-center '>
                    <div className='w-[80vw] bg-gray-900 p-10'>
                        <div className='flex items-center'>
                            <img className='w-[80px] h-[80px]' src={compltdlis.companyLogoUrl} />
                            <div className='ml-4'>
                                <p>{compltdlis.title}</p>
                                <div className='flex items-center'>
                                    <FaStar /><span>{compltdlis.rating}</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-6'>
                            <div className='flex'>
                                <div className='flex self-center'>
                                    <CiLocationOn />
                                    <p>{compltdlis.location}</p>
                                </div>
                                <div className='ml-5 flex self-center'>
                                    <BsFillBagDashFill />
                                    <p>{compltdlis.employmentType}</p>
                                </div>
                            </div>
                            <p>{compltdlis.packagePerAnnum}</p>
                        </div>
                        <hr />
                        <h4>Description</h4>
                        <p>{compltdlis.jobDescription}</p>
                        <h4>Skills</h4>
                        <div className='container'>
                            <div className='row'>
                                {skills.map(e =>
                                    <div className='col-4 my-3'>
                                        <div className='flex items-center'>
                                            <img className='h-[40px]' src={e.imageUrl} />
                                            <p className='ml-2'>{e.name}</p>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        <h4>Life at Company</h4>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-8'>
                                    <p>{lifeat.description}</p>
                                </div>
                                <div className='col-4'>
                                    <img src={lifeat.imageUrl} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='cotainer'>
                        <div className='row ml-32'>
                            <h4 className='ml-32'>Similar Jobs</h4>

                            <div className='bg-gray-900 p-10  ml-32 col-5 mb-4'>
                                <div className='flex items-center'>
                                    <img className='w-[80px] h-[80px]' src={compltdlis.companyLogoUrl} />
                                    <div className='ml-4'>
                                        <p>Backend Engineer</p>
                                        <div className='flex items-center'>
                                            <FaStar /><span>3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center mt-6'>
                                    <div className='flex'>
                                        <div className='flex self-center'>
                                            <CiLocationOn />
                                            <p>Hyderabad</p>
                                        </div>
                                        <div className='ml-5 flex  self-center'>
                                            <BsFillBagDashFill />
                                            <p>Full Time</p>
                                        </div>
                                    </div>
                                    <p>20LPA</p>
                                </div>
                                <hr />
                                <h4>Description</h4>
                                <p>{compltdlis.jobDescription}</p>
                            </div>

                            <div className='bg-gray-900 p-10  ml-3 col-5 mb-4 '>
                                <div className='flex items-center'>
                                    <img className='w-[80px] h-[80px]' src={compltdlis.companyLogoUrl} />
                                    <div className='ml-4'>
                                        <p>Backend Engineer</p>
                                        <div className='flex items-center'>
                                            <FaStar /><span>3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center mt-6'>
                                    <div className='flex'>
                                        <div className='flex self-center'>
                                            <CiLocationOn />
                                            <p>Hyderabad</p>
                                        </div>
                                        <div className='ml-5 flex  self-center'>
                                            <BsFillBagDashFill />
                                            <p>Full Time</p>
                                        </div>
                                    </div>
                                    <p>20LPA</p>
                                </div>
                                <hr />
                                <h4>Description</h4>
                                <p>{compltdlis.jobDescription}</p>
                            </div>

                            <div className='bg-gray-900 p-10  ml-32 col-5 '>
                                <div className='flex items-center'>
                                    <img className='w-[80px] h-[80px]' src={compltdlis.companyLogoUrl} />
                                    <div className='ml-4'>
                                        <p>Backend Engineer</p>
                                        <div className='flex items-center'>
                                            <FaStar /><span>3</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center mt-6'>
                                    <div className='flex'>
                                        <div className='flex self-center'>
                                            <CiLocationOn />
                                            <p>Hyderabad</p>
                                        </div>
                                        <div className='ml-5 flex  self-center'>
                                            <BsFillBagDashFill />
                                            <p>Full Time</p>
                                        </div>
                                    </div>
                                    <p>20LPA</p>
                                </div>
                                <hr />
                                <h4>Description</h4>
                                <p>{compltdlis.jobDescription}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detailedjobs