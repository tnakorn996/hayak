
import React, { createContext, useEffect, useState } from 'react'

// import { client } from '../sanity'

export const ContextMain = createContext()

export const Provider = ({ children }) => {
    const [appmainstate, setappmainstate] = useState('appmain')
    // const [userindex, setuserindex] = useState()

    // useEffect(() => {
    //     pp()
    // }, [])

    // const pp = async (p) => {
    //         const appLocal = window.localStorage.getItem('user') !== 'undefined' ? JSON.parse(window.localStorage.getItem('user')) : window.localStorage.clear();
    //           const query = `*[_type == 'user' && userid == '${appLocal.googleId}']`;
    //           client.fetch(query) 
    //           .then((data) => {
    //               setuserindex(data[0]);
    //           })
    //     }

    return (
      <ContextMain.Provider value={{
appmainstate, setappmainstate

}} >
        {children}
      </ContextMain.Provider>
    )
}