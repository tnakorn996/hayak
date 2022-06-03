import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiBookOpenLine, RiChat3Line, RiEyeLine, RiH1, RiMore2Line, RiTimeLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'

function BarMain({
    barmainid,

}) {
    const {
        barmainstate,

    } = useContext(ContextMain)
    const [barmainrender, setbarmainrender] = useState()

    const postindextime = [
        {
            barmainindex: 0,
            barmainicon: <RiEyeLine />,
            barmainrender: barmainstate?.filter(data => data.spreadmainidthree === 'viewdi'),
            barmainaction: () => {},
        },
        {
            barmainindex: 1,
            barmainicon: <RiChat3Line />,
            barmainrender: barmainstate?.filter(data => data.spreadmainidthree === 'commentdi'),
            barmainaction: () => {
                // setappmainstate({
                //     appmainid: 'commentdialog',
                //     appmainidtwo: 'sideboardmain',
                //     appmainboolean: true,
                // })
            },
        },
        {
            barmainindex: 2,
            barmainicon: <RiBookOpenLine />,
            barmainrender: barmainstate?.filter(data => data.spreadmainidthree === 'readdi'),
            barmainaction: () => {},
        },
        {
            barmainindex: 3,
            barmainicon: <RiTimeLine />,
            barmainrender: barmainstate?.filter(data => data.spreadmainidthree === 'timedi'),
            barmainaction: () => {},
        },

    ]

    const barmain = [
        {
            barmainid: 'postindextime',
            barmainref: postindextime,
        }
    ]

    useEffect(() => {
      if(barmainstate){
        const filter = barmain.filter(data => data.barmainid === barmainid)
        setbarmainrender(filter[0].barmainref)
      }
    }, [barmainstate])

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
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

  return (
    <div>
        <main className="flex flex-row gap-3">
                {barmainrender?.map(data => (<>
                <div className="flex flex-row gap-3">
                    <article className="flex flex-row gap-1 items-center  m-h4">
                        <figure className="">
                            {data?.barmainicon}
                        </figure>
                        <figcaption className="l-h3">
                            {data?.barmainrender?.map(dat => (<>
                                {dat?.spreadmainrender?.map(da => (<>
                                    {data?.barmainindex === 0 && <h1 className="">{da?.postcount || 0}</h1>}
                                    {data?.barmainindex === 1 && <h1 className="">{da?.postcount || 0}</h1>}
                                    {data?.barmainindex === 2 && <h1 className="">{Math.floor(da?.postblock?.length * 0.2) || 0} min</h1>}
                                    {data?.barmainindex === 3 && <h1 className="">{ll(new Date(da?._createdAt)) || 0}</h1>}
                                </>))}
                            </>))}
                        </figcaption>
                    </article>
                </div>

                {/* <div className="flex flex-row justify-between gap-3">
                    <article onClick={() => {
                    }} className="flex flex-row gap-1 items-center  m-h4">
                        <figure className="">
                            {data?.barmainicon}
                        </figure>
                        <figcaption className="l-h3">
                            {data?.barmainrendertwo?.map(dat => (<>
                                {dat?.spreadmainrender?.map(da => (<>
                                    {data?.barmainindex === 3 && <h1 className="">{da?.postcount || 0}</h1>}
                                </>))}
                            </>))}
                        </figcaption>
                    </article>
                </div> */}
                </>))}
        </main>

    </div>
  )
}

export default BarMain