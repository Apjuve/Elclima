import { useState } from "react";
import {RiSearchLine} from 'react-icons/ri'

const Search = () => {
    return (
        <div className="search">
            <form action="submit" className="search-form">
                <label htmlFor="">
                    <input type="text" className="search" id="search" placeholder="Search here" />
                    <RiSearchLine className="Search-icon"/>
                </label>
                    
            </form>
        </div>
    )
}

export default Search