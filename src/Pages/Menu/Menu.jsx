import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/home/ratul.jpg'
import PopularMenu from '../Home/Home/PopularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;