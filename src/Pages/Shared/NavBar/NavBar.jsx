import Logo from '../../../assets/Logo.png'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Colleges</Link></li>
        <li><Link to="/">Admission</Link></li>
        <li><Link to="/">My College</Link></li>



    </>

    return (
        <>
            <div className=" navbar fixed top-0 left-0 z-10 bg-white text-[#193038]">

                <div className="navbar-start md:mx-10">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-20 text-white bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={Logo} alt="" className=" w-24 " />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}

                    </ul>
                </div>


                <div className="navbar-end md:mx-10">

                    <div className="dropdown dropdown-end">
                        <Link to='/login' className='btn btn-outline border-[#FF42A5] btn-sm btn-out hover:border-[#FF42A5] rounded-md hover:bg-[#FF42A5] hover:text-white '>Login</Link>
                    </div>

                </div>
            </div>
            
        </>

    );
};

export default NavBar;