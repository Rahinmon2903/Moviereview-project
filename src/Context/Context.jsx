import React, { useState } from 'react';
import { createContext } from 'react';


export const myContext=createContext();

const Context = ({children}) => {
    const [search,setSearch]=useState("")


    return (
        <>
        <myContext.Provider value={[search,setSearch]}>

            {children}
        </myContext.Provider>
            
        </>
    );
};

export default Context;