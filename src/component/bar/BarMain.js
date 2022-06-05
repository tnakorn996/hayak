import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiBookOpenLine, RiChat3Line, RiEyeLine, RiH1, RiMore2Fill, RiMore2Line, RiTimeLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import SocialMain from '../../page/social/SocialMain'

function BarMain({
    barmainid,
    barmainindex,
    barmaindata,

}) {
    const {
        barmainstate,

        settabmainstate,
        setappmainstate,
        setsharemainstate,

    } = useContext(ContextMain)
    const [barmainrender, setbarmainrender] = useState()

    const postindextime = [
        {
            barmainindex: 0,
            barmaindata: [
                {
                    barmainindex: 0,
                    barmainicon: <RiEyeLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'viewdi')
                        return filter[0]?.postindexthreerender[0]?.postcount
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 1,
                    barmainicon: <RiBookOpenLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'readdi')
                        return Math.floor(filter[0]?.postindexthreerender[0]?.postblock?.length * 0.3) + ' min'
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 2,
                    barmainicon: <RiTimeLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        return ll(new Date(filter[0]?.postindexthreerender[0]?._createdAt))
                    }, 
                    barmainrendertwo: () => {},
                },
                {
                    barmainindex: 3,
                    barmainrender: () => {},
                    barmainrendertwo: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        return <SocialMain param={`/` + filter[0]?.postindexthreerender[0]?.postid} />
                    }, 
                },
                {
                    barmainindex: 4,
                    barmainrender: () => {},
                    barmainrendertwo: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        const ref = filter[0]?.postindexthreerender[0]
                        return <figure onClick={() => {
                                settabmainstate({
                                    tabmainid: 'postoption',
                                    tabmainparam: ref?.postid,
                                    // tabmainlocation: location.pathname,
                                    tabmainimage: ref?.posthero,
                                    tabmaintitle: ref?.posttitle,
                                })
                                setappmainstate({
                                    appmainid: 'postoption',
                                    appmainidtwo: 'opendeskmain',
                                    appmainparam: ref?.postid,
                                    appmainboolean: true,
                                })
                                setsharemainstate({
                                    sharemainparam: ref?.postid,
                                })
                            }} className="">
                                <article className="">
                                    <RiMore2Fill className='m-h3' />
                                </article>
                        </figure>
                    }, 
                },
            ]
        },
        {
            barmainindex: 1,
            barmaindata: [
                {
                    barmainindex: 0,
                    barmainicon: <RiEyeLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'viewdi')
                        return filter[0]?.postindexthreerender[0]?.postcount
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 1,
                    barmainicon: <RiBookOpenLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'readdi')
                        return Math.floor(filter[0]?.postindexthreerender[0]?.postblock?.length * 0.3) + ' min'
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 2,
                    barmainicon: <RiTimeLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        return ll(new Date(filter[0]?.postindexthreerender[0]?._createdAt))
                    }, 
                    barmainrendertwo: () => {},
                },

                {
                    barmainindex: 4,
                    barmainrender: () => {},
                    barmainrendertwo: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        const ref = filter[0]?.postindexthreerender[0]
                        return <figure onClick={() => {
                                settabmainstate({
                                    tabmainid: 'postoption',
                                    tabmainparam: ref?.postid,
                                    // tabmainlocation: location.pathname,
                                    tabmainimage: ref?.posthero,
                                    tabmaintitle: ref?.posttitle,
                                })
                                setappmainstate({
                                    appmainid: 'postoption',
                                    appmainidtwo: 'opendeskmain',
                                    appmainparam: ref?.postid,
                                    appmainboolean: true,
                                })
                                setsharemainstate({
                                    sharemainparam: ref?.postid,
                                })
                            }} className="">
                                <article className="">
                                    <RiMore2Fill className='m-h3' />
                                </article>
                        </figure>
                    }, 
                },
            ]
        }
    ]


                            

    const barmain = [
        {
            barmainid: 'postindextime',
            barmainref: postindextime,
        }
    ]

    useEffect(() => {
      if(barmaindata){
        const filter = barmain.filter(data => data.barmainid === barmainid)
        const filtertwo = filter[0].barmainref.filter(data => data.barmainindex === barmainindex)
        setbarmainrender(filtertwo[0].barmaindata)
      }
    }, [barmainid, barmaindata])

    function ll(first = this.props.first) {
        var seconds = Math.floor((new Date() - first) / 1000);
        var interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " min";
        }
        return Math.floor(seconds) + " seconds";
    }

  return (
    <div>
        <main className="grid grid-flow-col gap-3 items-center justify-between">
                <section className="flex flex-row gap-3 justify-start items-center">
                {barmainrender?.map(data => (<>
                    <article className="flex flex-row gap-1 items-center  m-h4">
                        <figure className="m-h3">
                            {data?.barmainicon}
                        </figure>
                        <figcaption className="l-h3">
                            <h1 className="">{data?.barmainrender()}</h1>
                        </figcaption>
                    </article>
                </>))}
                </section>

                <section className="flex flex-row gap-3 justify-end items-center">
                {barmainrender?.map(data => (<>
                    {data?.barmainrendertwo()}
                </>))}
                </section>

        </main>

    </div>
  )
}

export default BarMain