import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import { categoryui, genreui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'

function ChipMain({
    chipmainstatic,

}) {
    const {
        breadmainstate, setbreadmainstate,
        genreindexstate, setgenreindexstate,

    } = useContext(ContextMain)
    const [chipmainrender, setchipmainrender] = useState()
    const [chipmainrendertwo, setchipmainrendertwo] = useState()

    const categorythead = [
        {
            chipmainindex: 0,
            chipmainrender: categoryui.filter(data => data.crummainid === breadmainstate?.breadmainidtwo),
        },
        {
            chipmainindex: 1,
            chipmainrender: genreui.filter(data => data.crummainid === genreindexstate?.genreindexid),
        },
    ]

    const chipmain = [
        {
            chipmainid: 'categorythead',
            chipmainref: categorythead,
        },
    ]

    const [appstatic, setappstatic] = useApp(chipmain, chipmainstatic.chipmainid, chipmainstatic.chipmainindex, genreindexstate, breadmainstate)

    useEffect(() => {
        // if(breadmainstate){
        //     setchipmainrender(categorythead[0].chipmainrender)
        // }
        // if(genreindexstate){
        //     setchipmainrendertwo(genrethead[0].chipmainrender)
        // }

        if(appstatic) {
            setchipmainrender(appstatic[0].chipmainrender)
            setchipmainrendertwo(appstatic[1].chipmainrender)
        }
    }, [appstatic])
    
  return (
    <div>
        <main className="">
            <section className="flex flex-row gap-1">
                {chipmainrender && chipmainrender?.map(data => (<>
                    <button onClick={() => {
                        setbreadmainstate('')
                    }} className="flex flex-row items-center gap-3  l-button border border-black"> <span className="m-h2">╳</span>{data?.crummaintitle}</button>
                </>))}
                {chipmainrendertwo && chipmainrendertwo?.map(data => (<>
                    <button onClick={() => {
                        setgenreindexstate('')
                        }} className="flex flex-row items-center gap-3  l-button border border-black"> <span className="m-h2">╳</span>{data?.crummaintitle}</button>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default ChipMain