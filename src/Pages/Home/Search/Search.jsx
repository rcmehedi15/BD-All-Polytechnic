import React, { useEffect, useState } from 'react';

const Search = () => {
    const [allColleges, setAllColleges] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState(false);


    useEffect(() => {
        const fetchColleges = async () => {
            try {
                // for auto search with typing 
                if(searchText){
                    setSearch(true);
                }

                const response = await fetch(`$/allColleges?limit=1&collegeName=${searchText}`);
                const data = await response.json();
                setAllColleges(data);
                setLoader(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchColleges();
    }, [searchText]);

    return (
        <div className="w-10/12 md:w-3/12 md:ml-auto mx-auto my-4">

            <div className="input-group">
                <input  type="text" placeholder="Search a polytechnic" name="search" className="input input-bordered" />
                <button type="submit" className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
           

        </div>
    );
};

export default Search;