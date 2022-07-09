import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiExternalLinkLine, RiShareLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'

function CtaMain() {
    const {
        setappmainstate,
        ctamainstate,
        settabmainstate,
        setsharemainstate,

    } = useContext(ContextMain)

    const [ctamainrender, setctamainrender] = useState()

    const postembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Share post',
            ctamainentitletwo: 'Give your comment',
            ctamainaction: ll,
            ctamainactiontwo: kk,
        },
        {
            ctamainindex: 1,
            ctamainentitle: 'Share recipes',
            ctamainentitletwo: 'Give your comment',
            ctamainaction: ll,
            ctamainactiontwo: kk,
        },
    ]

    const placeembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Owner website',
            ctamainentitletwo: 'Give your comment',
            ctamainaction: () =>  {window.open(ctamainstate?.ctamainrender?.postplaceurl, '_blank').focus()},
            ctamainactiontwo: kk,
        },
    ]

    const productembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Seller website',
            ctamainentitletwo: 'Check avability product',
            ctamainaction: () =>  {window.open(ctamainstate?.ctamainrender?.placeplaceid[1]?.postplaceurl || ctamainstate?.ctamainrender?.placeplaceid[0]?.postplaceurl, '_blank').focus()},
            ctamainactiontwo: () => { window.open(ctamainstate?.ctamainrender?.postproducturl, '_blank').focus()},
        },
    ]

    const ctamain = [
        {
            ctamainid: 'post',
            ctamainref: postembed,
        },
        {
            ctamainid: 'place',
            ctamainref: placeembed,
        },
        {
            ctamainid: 'product',
            ctamainref: productembed,
        },
    ]

    const [appstatic, setappstatic] = useApp(ctamain, ctamainstate?.ctamainid, ctamainstate?.ctamainidtwo ? 1 : 0)

    useEffect(() => {
        if(appstatic && ctamainstate) {
            setctamainrender(appstatic)
        }
    }, [appstatic, ctamainstate])

    function ll() {
        settabmainstate({
          tabmainid: 'postoption',
          tabmainparam: ctamainstate?.ctamainrender?.postid,
          // tabmainlocation: location.pathname,
          tabmainimage: ctamainstate?.ctamainrender?.posthero,
          tabmaintitle: ctamainstate?.ctamainrender?.posttitle,
        })
        setappmainstate({
          appmainid: 'postoption',
          appmainidtwo: 'opendeskmain',
          appmainindex: 1,
          appmainparam: ctamainstate?.ctamainrender?.postid,
          appmainboolean: true,
        })
        setsharemainstate({
          sharemainparam: ctamainstate?.ctamainrender?.postid,
        })
    }

    function kk() {
        setappmainstate({
            appmainid: 'commentdialog',
            appmainidtwo: 'sideboardmain',
            appmainboolean: true,
        })
    }

    // function jj() {
    //     window.open(ctamainstate?.ctamainrender?.postplaceurl, '_blank').focus();
    // }

  return (
    <div>
        <main className="">
            <section className="flex justify-center items-center gap-1 flex-col md:flex-row ">
                {/* {ctamainrender && ctamainrender}
                {ctamainrendertwo && ctamainrendertwo} */}

                {ctamainrender && ctamainrender?.map(data => (<>
                    <button onClick={() => {
                        data?.ctamainaction()
                    }} className="m-h3 w-full m-button border-[1.5px] border-black">{data?.ctamainentitle}</button>
                    <button onClick={() => {
                        data?.ctamainactiontwo()
                    }} className="m-h3 w-full l-button  border-[1.5px] border-black">{data?.ctamainentitletwo}</button>
                </>))}

            </section>
        </main>
    </div>
  )
}

export default CtaMain