import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { ContextMain } from '../context/contextmain'



export default function useApp(appmain, appmainid, appmainindex, appmainstatic, appmainstatictwo) {
  // const {
  //   appmainstate,
  //   ptamainstate,
  //   breadmainstate,
  //   genreindexstate,

  //   postplaceproduct,

  // } = useContext(ContextMain)

    const [appstatic, setappstatic] = useState()

    // const ref = useRef(appmain)
  
    // const ll = useCallback(
    //   () => {
    //     if(ref.current === appmain){
    //       console.log('ref.currentone, appmainone', ref.current, appmain)
    //     }
    // }, [appmain])

    useEffect(() => {
      if(appmain !== undefined && appmainid !== undefined && appmainindex !== undefined ) {
        // console.log('ref.currenttwo, appmaintwo', ref.current, appmain)
        const filter = appmain.filter(data => Object.values(data)[0] === appmainid)
        if(appmainindex !== null ){
          const filtertwo = Object.values(filter[0])[1].filter(data => Object.values(data)[0] === appmainindex)
          setappstatic(filtertwo)
        }
        if(appmainindex === null ){
          const filtertwo = Object.values(filter[0])[1]
          setappstatic(filtertwo)
        }
      } 
    }, [appmainstatic, appmainstatictwo, appmainid, appmainindex])

  return [appstatic, setappstatic]
    
}
