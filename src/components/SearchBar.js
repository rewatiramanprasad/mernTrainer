
import React, { useEffect, useState } from 'react';
import './SearchBar.css'; 
import search from "../assets/search.png";

const SearchBar = ({data,setData}) => {
    const [query, setQuery] = useState("");
    const [temp,setTemp]=useState(data);
    useEffect(()=>{
        const handleInputChange = () => {
            // console.log("its me calling",temp)
          let  hello=data.filter((item)=>item.title.toLowerCase().includes(query.toLowerCase()))
            if(query===""){
                setData(temp)
            }
            setData(hello)
    
        };
        handleInputChange()
    },[query])

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                placeholder="Search"
                className="search-input"
            />
            <span className="search-icon"><img src={search}/></span>
        </div>
    );
};

export default SearchBar;
