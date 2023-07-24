import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import mehedi from '../../../assets/mehedi.jpg'

const Teacher = () => {
    return (
        <>
            <SectionTitle heading={"Our Teacher"} subHeading={"A teacher is responsible for preparing lesson plans and educating students at all levels"}></SectionTitle>
            <div >
                <div className="grid grid-cols-1 md:grid-cols-3 container gap-10 mx-auto text-center ">

                    <div className=" rounded overflow-hidden ">
                        <img src={mehedi} className="" />
                        <div className="p-3 ">
                            <div className="font-bold text-xl ">Md Mehedi Hasan </div>
                            <div className="  text-sm mb-2"> CSE Department</div>
                        </div>
                    </div>

                    {/* 2nd  */}
                    <div className=" rounded overflow-hidden ">
                        <img src={mehedi} className=" " />
                        <div className="p-3 ">
                            <div className="font-bold text-xl ">Md Mehedi Hasan </div>
                            <div className="  text-sm mb-2"> CSE Department</div>
                        </div>
                    </div>
                    {/* 3rd  */}
                    <div className="rounded overflow-hidden ">
                        <img src={mehedi} className=" " />
                        <div className="p-3 ">
                            <div className="font-bold text-xl ">Md Mehedi Hasan </div>
                            <div className="  text-sm mb-2"> CSE Department</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teacher;