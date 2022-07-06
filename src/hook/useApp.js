import React, { useContext, useEffect, useState } from 'react'

import { ContextMain } from '../context/contextmain'

//keyone: main
//keytwo: id
//keythree: index
//keyone: main

export default function useApp(appmainstatic) {
  const {
    appmainstate,
    ctamainstate,
    genreindexstate, breadmainstate,

  } = useContext(ContextMain)
    const [appstatic, setappstatic] = useState()

    const key = appmainstatic[Object.keys(appmainstatic)[0]]
    // console.log('key', key)

    useEffect(() => {
      if(Object.values(key).every(value => value !== undefined)){
        const filter = Object.values(key)[0].filter(data => Object.keys(data)[0] === Object.keys(key)[1])
        const filtertwo = filter.filter(data => Object.values(data)[0] === Object.values(key)[1]);
        const filterthree = Object.values(filtertwo[0])[1].filter(data => Object.values(data)[0] === Object.values(key)[2])
        // console.log('filter>', filter)
        // console.log('filtertwo>', filtertwo)
        // console.log('filterthree>', filterthree)
        setappstatic(filterthree)

      }
    }, [appmainstate, ctamainstate, genreindexstate, breadmainstate])
    
  return appstatic
}
