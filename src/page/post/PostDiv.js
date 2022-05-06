import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../../component/post/HorizonMain'

function PostDiv() {
    const {
        appmainstate, setappmainstate,
        slidemainpage,

        postupdatedat, 

    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [postdivrender, setpostdivrender] = useState()

    const postdiv = [
        {
            postdivid: 0,
            postdivrender: postupdatedat,
        }
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainid === 'postdiv' && slidemainpage !== null){
            const filter = postdiv.filter(data => data.postdivid === 0)
            const ref = filter[0].postdivrender
            if(slidemainpage >= ref.length){
                const math = Math.floor(Math.random() * (0 - ref.length) + ref.length)
                const filtertwo = ref.filter(data => ref.indexOf(data) >= math && ref.indexOf(data) < math + 4)
                setpostdivrender(filtertwo)
            }
            else {
                const filtertwo = ref.filter(data => ref.indexOf(data) >= slidemainpage && ref.indexOf(data) < slidemainpage + 4)
                setpostdivrender(filtertwo)
            }

        }
    }, [appmainstate, slidemainpage])

    // useEffect(() => {
    //     console.log('postdivrender', postdivrender)
    // }, [postdivrender])

  return (
    <div>
        <main className="">
            {postdivrender && (<>
            <section className="min-h-[70vh]">
                <figcaption className="">
                    <br /><br /><br />
                    <h1 className="text-5xl  m-h6 font-serif">Today's Read</h1>
                    <br /><br />
                </figcaption>
                <article className="grid grid-cols-12 items-start">
                    <figure className="relative col-span-7 h-[180px] flex items-center justify-center  overflow-hidden">
                        <img src={postdivrender[0]?.posthero} alt="" className="absolute" />
                    </figure>
                    <figcaption className="col-span-5 p-[20px]">
                        <h1 className="m-h5">{postdivrender[0]?.posttitle}</h1>
                        <br />
                        <h1 className="l-h2  truncate">{postdivrender[0]?.postsubtitle}</h1>
                        <br />
                    </figcaption>
                </article>
            </section>
            <section className="">
                {postdivrender?.slice(1, 4)?.map(data => (<>
                <HorizonMain onlick={() => {
                    navigate(`/${data?.postid}`)
                    setappmainstate({
                            appmainredirect: 'appmain'
                        })
                    }} key={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                </>))}
            </section>
            </>)}
        </main>
    </div>
  )
}

export default PostDiv