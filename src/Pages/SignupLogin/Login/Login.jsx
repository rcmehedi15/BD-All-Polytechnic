import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import loginImage from '../../../assets/login.gif'

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    // toggle password visibility 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full mt-12'>
                <div className='hidden sm:block md:mt-28 '>
                    <img className='w-full h-96 object-cover' src={loginImage} alt="" />
                </div>

                <div className=' flex flex-col justify-center '>
                    <div className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-200 p-8 shadow-2xl px-8'>
                        <form >
                            <h2 className='text-4xl text-gray-800 font-bold text-center'>Log In</h2>
                            <div className='flex flex-col black py-2'>
                                <label>Email</label>
                                <input
                                    className='rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                    type="email"
                                    {...register('email', { required: true })}
                                    placeholder='Enter email address'
                                />
                                {errors.email?.type === 'required' && <p className="text-red-600 text-sm">Email field is required</p>}
                            </div>
                            <div className='flex flex-col text-gray-800 py-2'>
                                <label>Password</label>
                                <div className='relative'>
                                    <input
                                        className='w-full rounded-lg text-black bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password', { required: true })}
                                        placeholder='Enter password'
                                    />
                                    <button
                                        type='button'
                                        className='absolute top-5 right-2'
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password field is required</p>}
                            </div>



                            <button className='w-full my-5 py-2 bg-[#FF42A5] shadow-lg  text-white font-semibold rounded-lg'>Log In</button>


                        </form>
                        {/* <p className='text-center'>Forget password? Please<Link to="/reset" className='btn btn-link'>Reset</Link></p> */}

                        <p className='text-gray-800 text-center'>Don't have an account? Please
                            <Link to="/signup" className='text-[#FF42A5]'> Register</Link> </p>
                        <div className="divider">OR</div>

                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Login with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div className='flex justify-center items-center space-x-2 border m-3 p-2 hover:bg-[#FF42A5] hover:text-white border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                    </div>


                </div>
            </div>


        </>
    );
};

export default Login;