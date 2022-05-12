import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextMain } from '../../context/contextmain'

import HorizonMain from '../post/HorizonMain'


function RtaMain() {
    const {
        rtamainstate,


    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [rtamaindata, setrtamaindata] = useState()

    const postcanvas = [
        {
            rtamaindata: [
                {
                    rtamaintitle: 'Place Location',
                    rtamainrender: rtamainstate?.rtamaindata,
                },
                {
                    rtamaintitle: 'Related Products',
                    rtamainrender: rtamainstate?.rtamaindatatwo,
                }
            ]
        },
        {
            rtamaindata: [
                {
                    rtamaintitle: 'Written By',
                    rtamainrender: rtamainstate?.rtamaindata,
                },
                {
                    rtamaintitle: 'In this article',
                    rtamainrender: rtamainstate?.rtamaindatatwo,
                },
            ]
        },
    ]

    const placecanvas = [
        {
            rtamaindata: [
                {
                    rtamaintitle: 'Place Location',
                    rtamainrender: rtamainstate?.rtamaindata,
                },
                {
                    rtamaintitle: 'Related Products',
                    rtamainrender: rtamainstate?.rtamaindatatwo,
                }
            ]
        },
    ]

    const productcanvas = [
        {
            rtamaindata: [
                {
                    rtamaintitle: 'Place Location',
                    rtamainrender: rtamainstate?.rtamaindata,
                },
                {
                    rtamaintitle: 'Related Products',
                    rtamainrender: rtamainstate?.rtamaindatatwo,
                }
            ]
        },
    ]

    const rtamain = [
        {
            rtamainid: 'post',
            rtamainref: postcanvas,
        },
        {
            rtamainid: 'place',
            rtamainref: placecanvas,
        },
        {
            rtamainid: 'product',
            rtamainref: productcanvas,
        },
    ]

    useEffect(() => {
        if(rtamainstate){
            console.log('rtamainstate :>> ', rtamainstate);
            if(rtamainstate.rtamainidtwo  === true) {
                const filter = rtamain.filter(data => data.rtamainid === rtamainstate.rtamainid)
                const filtertwo = filter[0].rtamainref.filter(data => filter[0].rtamainref.indexOf(data) === 1)
                setrtamaindata(filtertwo[0].rtamaindata)
            } else {
                const filter = rtamain.filter(data => data.rtamainid === rtamainstate.rtamainid)
                const filtertwo = filter[0].rtamainref.filter(data => filter[0].rtamainref.indexOf(data) === 0)
                setrtamaindata(filtertwo[0].rtamaindata)
            }
        }
    }, [rtamainstate])


  return (
    <div>
        <main className="">
            {rtamaindata?.map(dat => (<>
            <section className="">
                    <br />
                    <br />
                    <h1 className="m-h6">{dat?.rtamaintitle}</h1>
                    <br />
                    <div className="flex flex-col gap-2">
                        {dat?.rtamainrender?.map(data => (<>
                        <HorizonMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                        </>))}
                    </div>
            </section>
            </>))}
        </main>
    </div>
  )
}

export default RtaMain