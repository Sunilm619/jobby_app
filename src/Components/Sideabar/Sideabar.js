import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/Navbar';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { BsFillBagDashFill } from "react-icons/bs";
import './index.css'
function Sidebar() {
    const [empval, setEmpval] = useState("");
    const [user, setUser] = useState({});
    const [packval, setPackval] = useState("");
    const [lis, setLis] = useState([]);
    const ipval = useRef("");
    const navigate = useNavigate();
    const cookie = Cookies.get("TOKYON");

    const fetchJobs = async () => {
        const url = "http://localhost:4000/api/jobs";
        const options = {
            headers: {
                'Authorization': `Bearer ${cookie}`,
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setLis(data.jobDetailslist);
        const url2 = "http://localhost:4000/api/profile"
        const options2 = {
            headers: {
                'Authorization': `Bearer ${cookie}`,
            }
        };
        const response2 = await fetch(url2, options2);
        const data2 = await response2.json();
        setUser(data2.answe[0])
    };
    console.log(user);


    const submit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:4000/api/filterjobs?search=${ipval.current.value}&minimum_package=${packval}&employment_type=${empval}`;
        const options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cookie}`,
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        setLis(data);
    };

    useEffect(() => {
        if (!cookie) {
            navigate('/login');
        } else {
            fetchJobs();
        }
    }, [cookie]);

    return (
        cookie ? (
            <div>
                <Navbar />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='flex bg-black text-slate-300'>
                            <div className="col-3 mr-5">
                                <div className='flex flex-col'>
                                    <div className='bg-gray-300 bg3'>
                                        <h1>{user.name}</h1>
                                        <p>{user.email}</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p>Type of Employment</p>
                                        <ul>
                                            <li>
                                                <input type='radio' name='emp' value="Full Time" onChange={(e) => setEmpval(e.target.value)} />
                                                <label className='ml-3'>Full Time</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='emp' value="Part Time" onChange={(e) => setEmpval(e.target.value)} />
                                                <label className='ml-3'>Part Time</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='emp' value="Freelance" onChange={(e) => setEmpval(e.target.value)} />
                                                <label className='ml-3'>Freelance</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='emp' value="Internship" onChange={(e) => setEmpval(e.target.value)} />
                                                <label className='ml-3'>Internship</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div>
                                        <p>Minimum Package</p>
                                        <ul>
                                            <li>
                                                <input type='radio' name='pack' value="1000000" onChange={(e) => setPackval(e.target.value)} />
                                                <label className='ml-3'>10Lpa and above</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='pack' value="2000000" onChange={(e) => setPackval(e.target.value)} />
                                                <label className='ml-3'>20Lpa and above</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='pack' value="3000000" onChange={(e) => setPackval(e.target.value)} />
                                                <label className='ml-3'>30Lpa and above</label>
                                            </li>
                                            <li>
                                                <input type='radio' name='pack' value="4000000" onChange={(e) => setPackval(e.target.value)} />
                                                <label className='ml-3'>40Lpa and above</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8 mt-[30px]'>
                                <form onSubmit={submit}>
                                    <input ref={ipval} type='search' className='border-2 bg-slate-500' />
                                    <button type='submit' className='bg-amber-500 p-[2px]'>Submit</button>
                                </form>
                                {lis.length > 0 ? (
                                    lis.map(e => (
                                        <div key={e._id} onClick={() => { navigate(`/details/${e._id}`) }} className='bg-slate-800 rounded-3xl p-4 my-3'>
                                            <div className='flex items-center'>
                                                <img className='w-[80px] h-[80px]' src={e.companyLogoUrl} />
                                                <div className='ml-4'>
                                                    <p>{e.title}</p>
                                                    <div className='flex items-center'>
                                                        <FaStar /><span>{e.rating}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex justify-between items-center mt-6'>
                                                <div className='flex'>
                                                    <div className='flex self-center'>
                                                        <CiLocationOn />
                                                        <p>{e.location}</p>
                                                    </div>
                                                    <div className='ml-5 flex self-center'>
                                                        <BsFillBagDashFill />
                                                        <p>{e.employmentType}</p>
                                                    </div>
                                                </div>
                                                <p>{e.packagePerAnnum}</p>
                                            </div>
                                            <hr />
                                            <h4>Description</h4>
                                            <p>{e.jobDescription}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div className='text-center'>
                                        <img className='ml-5' src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" alt="jobs" />
                                        <h4>No Jobs Found</h4>
                                        <p>We couldn't find jobs for you</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            navigate('/login')
        )
    );
}

export default Sidebar;
