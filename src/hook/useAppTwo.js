import React, { useContext, useState } from 'react'
import { ContextMain } from '../context/contextmain'

export default function useAppTwo(appmainaction) {
    const {
        setappmainstate, appmainstate,

    } = useContext(ContextMain)
    const [first, setfirst] = useState()

    setappmainstate('')
    if(appmainstate === ''){
       return appmainaction()
    }

   
}
