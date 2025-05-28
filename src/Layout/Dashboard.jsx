import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { FaAd, FaCalendarAlt, FaHome, FaList } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className='flex'>
            {/* dashbord side bar */}
            <div className="w-64 min-h-screen  bg-orange-400">
                <ul className='menu p-4'>

                    <li>
                        <NavLink className='/dashboard/userHome'> <FaHome className='text-2xl' />
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='/dashboard/reservation'>
                            <FaCalendarAlt className='text-2xl' />
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className='/dashboard/review'><FaAd className='text-3xl' />Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink className='/dashboard/bookings'><FaList className='text-3xl' />My Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink className='/dashboard/cart'><IoCart className='text-3xl' /> My Cart</NavLink>
                    </li>

                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard; 