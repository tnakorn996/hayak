import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { navmain } from '../../content/contentmain'

function ImpulseMain() {
    const [impulsemainstate, setimpulsemainstate] = useState()

    useEffect(() => {
        if(navmain){
                const filter = navmain.filter(dat => dat.navmainid === 'donate')
                setimpulsemainstate(filter[0])
        }
    }, [])
    
  return (
    <div>
        <main className="p-[30px] flex flex-col-reverse md:grid md:grid-cols-12  bg-orange-700 text-white rounded-md">
            <figcaption className="md:col-span-9 flex flex-col justify-between">
                <h1 className="max-w-[470px] py-[20px]  l-h1 md:m-h6 text-white">{impulsemainstate?.navmainsubtitle}</h1>
                <button className="w-full md:max-w-[200px]  uppercase l-button">{impulsemainstate?.navmaintitle}</button>
            </figcaption>
            <figure className="md:col-span-3">
                <img src={impulsemainstate?.navmainimage} alt="" className="" />
            </figure>
        </main>
    </div>
  )
}

export default ImpulseMain