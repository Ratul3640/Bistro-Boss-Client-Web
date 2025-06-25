import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { FaAd, FaBook, FaBookOpen, FaCalendarAlt, FaEnvelope, FaHome, FaList, FaSearch, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import useCart from '../Hooks/useCart';


const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;

    return (
        <div className='flex'>
            {/* dashbord side bar */}
            <div className="w-64 min-h-screen  bg-orange-400">
                <ul className='menu p-4'>

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> <FaHome className='text-2xl' />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'>
                                    <FaUtensils className='text-2xl' />
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaList className='text-3xl' /> Manage Items</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='/dashboard/bookings'><FaBookOpen className='text-3xl' />Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/users'><FaUsers className='text-3xl' />All Users</NavLink>
                            </li>
                           
                           
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'> <FaHome className='text-2xl' />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'>
                                        <FaCalendarAlt className='text-2xl' />
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><FaAd className='text-3xl' />Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/bookings'><FaList className='text-3xl' />My Bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><IoCart className='text-3xl' /> My Cart ({cart.length})</NavLink>
                                </li>
                            </>
                }


                    {/* shared navLinks */}
                    <div className='divider'></div>
                    <li>
                        <NavLink to='/'> <FaHome className='text-2xl' />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'> <FaSearch className='text-2xl' />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'> <FaEnvelope className='text-2xl' />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard; 