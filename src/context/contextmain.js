
import React, { createContext, useEffect, useState } from 'react'
import LoadMain from '../component/load/LoadMain'

import { client } from '../lib/sanity'

export const ContextMain = createContext()

export const Provider = ({ children }) => {

    const [appmainstate, setappmainstate] = useState('appmain')
    // const [postindexstate, setpostindexstate] = useState()
    const [searchmainstate, setsearchmainstate] = useState('postupdatedat')
    const [searchinputstate, setsearchinputstate] = useState('')
    const [planformstate, setplanformstate] = useState()
    const [ontromainstate, setontromainstate] = useState()
    const [extromainstate, setextromainstate] = useState()
    const [slidemainpage, setslidemainpage] = useState(Math.random() * (0 - 99 + 1) + 99)
    const [sheetmainpage, setsheetmainpage] = useState(0)
    const [categorypicturestate, setcategorypicturestate] = useState()
    const [categoryindextrigger, setcategoryindextrigger] = useState('')
    const [breadmainstate, setbreadmainstate] = useState()
    const [alertmainstate, setalertmainstate] = useState()
    
    const [userindex, setuserindex] = useState()
    const [postplaceproduct, setpostplaceproduct] = useState()
    console.log('postplaceproduct :>> ', postplaceproduct);
    const [postcreatedat, setpostcreatedat] = useState()
    const [postupdatedat, setpostupdatedat] = useState()
    const [productcreatedat, setproductcreatedat] = useState()
    const [placecreatedat, setplacecreatedat] = useState()
    const [postpostcount, setpostpostcount] = useState()
    const [postcategoryid, setpostcategoryid] = useState()
    const [postpriceid, setpostpriceid] = useState()

    useEffect(() => {
        pp()
    }, [])

    const pp = async () => {
              const query = `*[_type == 'user' && userid == 'hayaker']{
                ...,

                'postplaceproduct': *[_type == 'post' || _type == 'place' || _type == 'product'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc) ,

                'postcreatedat': *[_type == 'post'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc) ,

                'postupdatedat': *[_type == 'post'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,

                'placecreatedat': *[_type == 'place'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),

                'productcreatedat': *[_type == 'product'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),
                
                'postpostcount': *[_type == 'post' && postcount > 0] | order(postcount desc) ,
                'postcategoryid': *[_type == 'post' && categoryid == ^.categoryid] | order(_createdAt desc),
                'postpriceid': *[_type == 'post' && priceid == 'pro'] | order(_createdAt desc),
              }[0]`;
              await client.fetch(query) 
              .then((data) => {
                  setuserindex(data)
                  setpostplaceproduct(data.postplaceproduct)
                  setpostcreatedat(data.postcreatedat);
                  setpostupdatedat(data.postupdatedat);
                  setplacecreatedat(data.placecreatedat);
                  setproductcreatedat(data.productcreatedat);
                  setpostpostcount(data.postpostcount);
                  setpostcategoryid(data.postcategoryid);
                  setpostpriceid(data.postpriceid);
              })
        }
    if(!postupdatedat) return <LoadMain />

    return (
      <ContextMain.Provider value={{
        appmainstate, setappmainstate,
        // postindexstate, setpostindexstate,
        searchmainstate, setsearchmainstate,
        searchinputstate, setsearchinputstate,
        planformstate, setplanformstate,
        ontromainstate, setontromainstate,
        extromainstate, setextromainstate,
        slidemainpage, setslidemainpage,
        sheetmainpage, setsheetmainpage,
        categorypicturestate, setcategorypicturestate,
        categoryindextrigger, setcategoryindextrigger,
        breadmainstate, setbreadmainstate,
        alertmainstate, setalertmainstate,

        userindex,
        postplaceproduct,
        postcreatedat,
        postupdatedat,
        placecreatedat,
        productcreatedat, 
        postpostcount,
        postcategoryid,
        postpriceid,

        }} >
        {children}
      </ContextMain.Provider>
    )
}