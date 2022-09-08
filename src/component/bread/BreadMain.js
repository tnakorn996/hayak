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
        setgenreindexstate,
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
            {breadmaintitle?.map((data, index) => (<>
                <article key={index} onClick={() => {
                    setgenreindexstate('')
                    setbreadmainstate('')
                    navigate(`/category/${data?.breadmainid}`)
                }} className="">
                <h1 className="truncate">{data?.breadmaintitle}</h1>
                </article>
                {/* {breadmainsubtitle?.map((dat, inde) => (<>
                    <div className="">
                        <h1 className="">→</h1>
                    </div>
                    <article onClick={() => {
                        setgenreindexstate('')
                        setbreadmainstate({
                            breadmainid: data?.breadmainid,
                            breadmainidtwo: dat?.crummainid,
                        })
                        navigate(`/category/${dat?.breadmainid}`)
                    }} className="">
                    <h1 className="truncate">{dat?.crummaintitle}</h1>
                    </article>
                    <div className="">
                        <h1 className="">→</h1>
                    </div>
                </>))} */}
            <h1 className="truncate">{breadmainmoretitle}</h1>
            </>))}
        </main>
    </div>
  )
}

export default BreadMain