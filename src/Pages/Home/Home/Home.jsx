import React from 'react';
import Banner from '../Banner/Banner';
import LatestNotice from '../LatestNotice/LatestNotice';
import RecentNotice from '../RecentNotice/RecentNotice';
import Teacher from '../Teacher/Teacher';
import Search from '../Search/Search';

const Home = () => {
    return (
        <>
            <Banner />
            <Search />

            {/* <LatestNotice /> */}
            {/* <RecentNotice /> */}
            {/* <Teacher /> */}
        </>
    );
};

export default Home;