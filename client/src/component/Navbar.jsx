import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { List, X } from 'react-bootstrap-icons'

const Navbar = () => {
    const navigate = useNavigate()
    const [toggleIcon, setToggleIcon] = useState(false)
    const [logoutConfirm, setLogoutConfirm] = useState(false)
    const logoutHandler = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        setLogoutConfirm(false)
        navigate('/login')
        
    }
    return (
        <>
            <div className='p-2 bg-teal-50 dark:bg-gray-950'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div className="logo">
                            <h1 className='text-2xl dark:text-white'>Hospital</h1>
                        </div>
                        <div className="menu hidden md:block">
                            <ul className='flex gap-4 dark:text-white'>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="" onClick={()=> setLogoutConfirm(true)} className='bg-blue-500 p-2 rounded text-white'>Logout</Link></li>

                            </ul>
                        </div>
                
                    </div>
                </div>

            </div>
            {
                toggleIcon && (
                    <div className='h-[calc(100vh-40px)]  fixed bg-blue-50 dark:bg-gray-900 top-[48px] left-0 right-0 bottom-0'>
                        <div className="search-box flex justify-center mt-3 ">
                            <input type="text" placeholder='Search...' className='p-1 px-3 text-sm border-solid border-blue-400 border-[1px] outline-blue-500 dark:bg-gray-700 dark:border-white dark:outline-none dark:text-white rounded-lg w-3/4' />
                        </div>
                        <div className="menu">
                            <ul className='p-3'>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="">Home</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="playlist">PlayList</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="about">About</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                )
            }
            
            {
                logoutConfirm ? (
                    <div className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center opacity-95 bg-gray-200">
                        <div className="min-w-[300px] md:w-[400px] max-w-[500px]: border-[1px] border-solid border-gray-300 p-5 bg-white rounded-lg">
                            <div className="py-4">
                            <h2 className="text-xl">Confirm Logout</h2>
                            <p>Are you sure want to logout?</p>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <button className='py-1 px-3 bg-gray-200 rounded' onClick={()=>setLogoutConfirm(false)}>Cancel</button>
                                <button className='p-1 px-2 text-white bg-blue-500 rounded' onClick={logoutHandler}>OK</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>

    )
}

export default Navbar