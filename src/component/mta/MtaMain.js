import React, { useContext, useEffect, useState } from 'react'

import { RiCheckboxFill, RiCheckboxLine, RiCloseLine, RiDeleteBin7Fill } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'

export default function MtaMain({mtamainstatic, mtamainstyle}) {
    const {
        parsepost,
        favouritedi,

        setappmainstate,
        settoastermainstate,

    } = useContext(ContextMain)
    const [mtamainindex, setmtamainindex] = useState(0)
    const [mtamainkey, setmtamainkey] = useState()

    const [mtamaindata, setmtamaindata] = useState()
    const [mtamaindatatwo, setmtamaindatatwo] = useState()
    const [mtamainrender, setmtamainrender] = useState()

    const favouritetable = [
        {
            mtamainindex: 0,
            mtamainrender: <RiDeleteBin7Fill onClick={() => kk()}  />,
        },
    ]

    const mtamain = [
        {
            mtamainid: 'favouritetable',
            mtamainref: favouritetable,
            mtamainkey: 'favouriteiframe',
            mtamaindata: parsepost?.favouritemaindata,
            mtamaindatatwo: favouritedi[0]?.sheetmaindata,
        }
    ]

    useEffect(() => {
            const filter = mtamain.filter(data => data.mtamainid === mtamainstatic.mtamainid)
            const filtertwo = filter[0].mtamainref.filter(data => data.mtamainindex === 0)
            setmtamainkey(filter[0].mtamainkey)
            setmtamaindata(filter[0].mtamaindata)
            setmtamaindatatwo(filter[0].mtamaindatatwo)
            setmtamainrender(filtertwo[0].mtamainrender)
    }, [mtamainstatic])

    function kk() {
        if (window.confirm('Are you sure you want to remove these posts?') && mtamaindata && mtamaindatatwo) {
            const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe")).favouritemaindata
            console.log('parsefavourite', parsefavourite)
            // const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe")).favouritemaindata
            const filter = mtamaindata.filter(data => parsefavourite.every(dat => dat.postid !== data.postid))
            // const filter = mtamaindata.filter(data => mtamaindatatwo.some(dat => dat.postid !== data.postid))
            window.localStorage.removeItem("postiframe")
            window.localStorage.setItem("postiframe", JSON.stringify({
                favouritemaindata: filter,
            }))
            window.localStorage.removeItem("favouriteiframe")
            setappmainstate({
                appmainid:'overlay',
                appmainidtwo:'toastermain',
            })
            settoastermainstate({
                toastermainid: 'postheader',
                toastermainindex: 2,
                toastermaindata: parsefavourite,
            })
        } 
    }
    
  return (
    <div>
        <main className="">
            <section className={`w-full flex items-center justify-between  m-h2 ${mtamainstyle && mtamainstyle}`}>
                <h1 className="text-[10px]">{favouritedi[0]?.sheetmaindata.length} selected posts</h1>
                <article className="m-h2">{mtamainrender && mtamainrender}</article>
            </section>
        </main>
    </div>
  )
}
