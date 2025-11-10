import React, { useState } from 'react';
import { createContext } from 'react';


export const myContext=createContext();

const Context = ({children}) => {
    const [search,setSearch]=useState("")
    const [year,setYear]=useState("")
      const [genre,setGenre]=useState("")
      const [rating,setRating]=useState("")


    return (
        <>
        <myContext.Provider value={{search,setSearch,year,setYear,genre,setGenre,rating,setRating}}>

            {children}
        </myContext.Provider>
            
        </>
    );
};

export default Context;