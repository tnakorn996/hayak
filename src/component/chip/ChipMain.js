import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import { categoryui, genreui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'

function ChipMain() {
    const {
        breadmainstate, setbreadmainstate,

    } = useContext(ContextMain)
    const [chipmainrender, setchipmainrender] = useState()

    const categorythead = [
        {
            chipmainindex: 0,
            chipmainrender: categoryui.filter(data => data.crummainid === breadmainstate?.breadmainidtwo)
        }
    ]

    const genrethead = [
        // {
        //     chipmainindex: 0,
        //     chipmainrender: genreui.filter(data => data.crummainid === breadmainstate?.breadmainidtwo)
        // }
    ]

    const chipmain = [
        {
            chipmainid: 'collectionthead',
            chipref: categorythead,
        },
        {
            chipmainid: 'genrethead',
            chipref: genrethead,
        }
    ]

    useEffect(() => {
        if(breadmainstate){
            setchipmainrender(categorythead[0].chipmainrender)
        }
    }, [breadmainstate])
    
  return (
    <div>
        <main className="">
            <section className="">
                {breadmainstate && chipmainrender?.map(data => (<>
                    <button onClick={() => {
                        setbreadmainstate('')
                        }} className="flex flex-row items-center gap-3  l-button border border-black"> <span className="m-h2">╳</span>{data?.crummaintitle}</button>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default ChipMain