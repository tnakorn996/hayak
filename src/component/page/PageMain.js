import React, { useContext, useEffect, useState } from 'react'

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'

function PageMain({
    pagemainstatic,

}) {
    const {
        appmainstate,

    } = useContext(ContextMain)
    const [pagemainindex, setpagemainindex] = useState(0)
    const [pagemainslice, setpagemainslice] = useState(0)
    const [pagemainslicetwo, setpagemainslicetwo] = useState(2)
    const [pagemainpage, setpagemainpage] = useState([])

    const [pagemainrender, setpagemainrender] = useState()

    const rtadataset = [
        {
            pagemainindex: 0,
            pagemainrender: appmainstate?.appmaindata
        }
    ]

    const pagemain = [
        {
            pagemainid: 'rtadataset',
            pagemainref: rtadataset,
        }
    ]

    useEffect(() => {
        if(pagemainstatic){
            const filter = pagemain.filter(data => data.pagemainid === pagemainstatic.pagemainid)
            const filtertwo = filter[0].pagemainref.filter(data => data.pagemainindex === pagemainstatic.pagemainindex)

            setpagemainrender(filtertwo[0].pagemainrender)
        }
    }, [])

    useEffect(() => {
        if(pagemainrender) {
            const empty = []
            var math = Math.floor(pagemainrender.length / 3) + 1
            if(math > 0){
                empty.push({page:math})
                kk(empty)
            }
        }
    }, [pagemainrender])

    function kk(first= this.props.first) {
        const ref = first[0].page
        const empty = []
        if(ref < 6){
            for(let i = 0; i < 6; i++){
                if(i > 0){
                    empty.push({page: i})
                }
            }
        }
        if(ref > 6){
            for(let i = 0;(i < ref + 6) ; i++){
                if(i > ref){
                    empty.push({page: i})
                }
            }
        }
        setpagemainpage(empty)
    }

    // function ll(first= this.props.first, second= this.props.second) {
    //     var ref = Math.floor(first / 3) + 1
    //     return setpagemainpage(ref)
    // }

  return (
    <div>
        <main className="">
            <section className="flex flex-col gap-3">
                {pagemainrender?.slice(pagemainslice, pagemainslicetwo)?.map(data => (<>
                <HorizonMain key={data?.postid} postid={data?.postid} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
                </>))}
            </section>
            <br />
            <section className="grid grid-flow-col">
                <button onClick={() => {
                    kk(pagemainpage[4])
                }} className="l-button">←</button>
                {pagemainpage && pagemainpage?.map((data, index) => (<>
                    <button onClick={() => {
                        setpagemainindex(index)
                        setpagemainslice(0)
                        setpagemainslicetwo((index + 5))
                    }} className={`l-button ${pagemainindex === index && 'border'}  ${Math.floor(pagemainrender?.length / 5) + 2 < data.page && 'text-gray-300'}`}>{data?.page}</button>
                </>))}
                <button onClick={() => {
                    kk(pagemainpage[4])
                }} className="l-button">→</button>

            </section>
        </main>
    </div>
  )
}

export default PageMain