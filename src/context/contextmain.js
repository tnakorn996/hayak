
import React, { createContext, useEffect, useState } from 'react'
import LoadMain from '../component/load/LoadMain'

import { client } from '../lib/sanity'

export const ContextMain = createContext()

export const Provider = ({ children }) => {

    const [appmainstate, setappmainstate] = useState('appmain')
    const [postindexstate, setpostindexstate] = useState()
    const [searchmainstate, setsearchmainstate] = useState('postupdatedat')
    const [searchinputstate, setsearchinputstate] = useState('')
    const [planformstate, setplanformstate] = useState()
    const [ontromainstate, setontromainstate] = useState()
    
    const [userindex, setuserindex] = useState()
    const [postcreatedat, setpostcreatedat] = useState()
    const [postupdatedat, setpostupdatedat] = useState()
    const [postpostcount, setpostpostcount] = useState()
    const [postcategoryid, setpostcategoryid] = useState()

    useEffect(() => {
        pp()
    }, [])

    const pp = async () => {
              const query = `*[_type == 'user' && userid == 'hayaker']{
                ...,

                'postcreatedat': *[_type == 'post'] | order(_createdAt desc) ,
                'postupdatedat': *[_type == 'post'] | order(_updatedAt desc) ,
                
                'postpostcount': *[_type == 'post'] | order(postcount desc) ,
                'postcategoryid': *[_type == 'post' && categoryid == ^.categoryid] | order(_createdAt desc),
              }[0]`;
              client.fetch(query) 
              .then((data) => {
                  setuserindex(data)
                  setpostcreatedat(data.postcreatedat);
                  setpostupdatedat(data.postupdatedat);
                  setpostpostcount(data.postpostcount);
                  setpostcategoryid(data.postcategoryid);
              })
        }

    if(!postupdatedat) return <LoadMain />

    return (
      <ContextMain.Provider value={{
        appmainstate, setappmainstate,
        postindexstate, setpostindexstate,
        searchmainstate, setsearchmainstate,
        searchinputstate, setsearchinputstate,
        planformstate, setplanformstate,
        ontromainstate, setontromainstate,

        userindex,
        postcreatedat,
        postupdatedat,
        postpostcount,
        postcategoryid,

        }} >
        {children}
      </ContextMain.Provider>
    )
}