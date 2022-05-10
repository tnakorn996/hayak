import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { breadmain, categoryul, crummain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'


function BreadMain() {
    const {
        breadmainstate, setbreadmainstate,
        setcategoryindextrigger,


    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [breadmaintitle, setbreadmaintitle] = useState()
    const [breadmainsubtitle, setbreadmainsubtitle] = useState()
    const [breadmainmoretitle, setbreadmainmoretitle] = useState()

    useEffect(() => {
        if(breadmainstate){
            const filter = breadmain.filter(data => data.breadmainid === breadmainstate.breadmainid)
            const filtertwo = crummain.filter(data => data.crummainid === breadmainstate.breadmainidtwo)
            setbreadmaintitle(filter)
            setbreadmainsubtitle(filtertwo)
            setbreadmainmoretitle(breadmainstate.breadmainidthree)
        }
    }, [breadmainstate])

  return (
    <div>
        <main className="grid grid-flow-col items-center gap-3">
            {breadmaintitle?.map(data => (<>
                <article onClick={() => {
                    setbreadmainstate()
                    navigate(`/category/${data?.breadmainid}`)
                }} className="">
                <h1 className="">{data?.breadmaintitle}</h1>
                </article>
                {breadmainsubtitle?.map(dat => (<>
                    <article onClick={() => {
                        setbreadmainstate({
                            breadmainid: data?.breadmainid,
                            breadmainidtwo: dat?.crummainid,
                        })
                        navigate(`/category/${dat?.breadmainid}`)
                    }} className="">
                    <h1 className="">/ {dat?.crummaintitle}</h1>
                    </article>
                </>))}
            <h1 className="truncate">/ {breadmainmoretitle}</h1>
            </>))}
        </main>
    </div>
  )
}

export default BreadMain