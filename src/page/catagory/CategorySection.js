import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { breadmain, collectionmain, crummain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'

function CategorySection() {
    const {
        appmainstate,
        breadmainstate, setbreadmainstate,

    } = useContext(ContextMain)
    const [categorysectiontitle, setcategorysectiontitle] = useState()
    const [categorysectionrender, setcategorysectionrender] = useState()

    useEffect(() => {
        if(appmainstate && appmainstate.appmainid === 'categorysection'){
            const empty = []
            const filter = breadmain.filter(data => data.breadmainid === appmainstate.appmainparam)
            crummain.forEach(data => {
                if(data.breadmainid === appmainstate.appmainparam){
                    empty.push(data)
                } 
                return setcategorysectionrender(empty)
            })
            setcategorysectiontitle(filter[0].breadmaintitle)
        }
    }, [appmainstate])
    
  return (
    <div>
        <main className="">
            <section className="">
                <h1 className="l-h1">Filter {categorysectiontitle && categorysectiontitle} collection by:</h1>
                <br />
                {categorysectionrender?.map(data => (<>
                    <article onClick={() => {
                        // setcategoryindextrigger(data?.crummainid)
                        setbreadmainstate({
                            // breadmainid: param?.id,
                            breadmainidtwo: data?.crummainid,
                        })
                    }} className={`p-[30px]  border ${breadmainstate?.breadmainidtwo === data?.crummainid && 'bg-gray-900 text-white'}`}>
                        <h1 className="m-h3">{data?.crummaintitle}</h1>
                    </article>
                </>))}
            </section>


        </main>
    </div>
  )
}

export default CategorySection