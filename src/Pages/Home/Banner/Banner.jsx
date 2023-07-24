import React from 'react';
import { Link } from 'react-router-dom';
import Infra from '../../../assets/infra.jpg'
import InfraNight from '../../../assets/infraNight.jpg'

const Banner = () => {
    return (
        <>
            <div className="hero  min-h-screen bg-base-200 mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Infra} className='w-80 rounded-lg rotate-3	'/>
                    <img src={InfraNight} className='w-80 rounded-lg rotate-3	'/>
                    <div>
                        <h1 className="text-5xl font-bold text-[#FF42A5] mb-2">Welcome to our </h1> <span className="text-4xl font-bold text-[#272626] " >Bangladeshi Polytechnic Admission Zone </span>
                        <p className="py-6">Diploma is committed to providing a dynamic and interesting learning experience with small class sizes and affordable high-quality programs</p>
                        <Link to="/signup" className="btn bg-[#FF42A5] text-white border-none">Get Started </Link> 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Banner;