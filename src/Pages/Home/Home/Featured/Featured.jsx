import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'
import '../Featured/Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-10 my-12'>
            <SectionTitle
                subHeading="Check is Out"
                heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center bg-black/60 items-center py-20 pt-12 px-36 gap-8'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-20'>
                    <p className='text-2xl font-bold mb-2'>May 07,2030</p>
                    <p className='uppercase'> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid voluptatem adipisci consectetur earum magni necessitatibus molestias iste ullam corporis hic iusto dolor porro modi quam, exercitationem quidem quisquam debitis.</p>

                    <button className='my-4 btn btn-outline border-0 border-b-4  mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;