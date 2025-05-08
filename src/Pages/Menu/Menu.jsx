import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/home/ratul.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import ratulImg from '../../assets/menu/ratull.jpg'



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'desserts');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Todays Offer"
            ></SectionTitle>
            {/* offered menu items */}
            {/* <MenuCategory
                items={offered}
            ></MenuCategory> */}
            {/* desserts menu items */}
            <MenuCategory items={desserts} title={"desserts"} img={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"} ></MenuCategory>
            {/* Salad menu items */}
            <MenuCategory items={salad} img={saladImg} title={"salad"}
            ></MenuCategory>
            {/* Soup menu items */}
            <MenuCategory items={soup} img={soupImg} title={"soup"}
            ></MenuCategory>
            <MenuCategory items={offered} img={ratulImg} title={"offered"}
            ></MenuCategory>
        </div>
    );
};

export default Menu;