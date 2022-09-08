import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiBookOpenLine, RiChat3Line, RiEyeLine, RiH1, RiHeartFill, RiMore2Fill, RiMore2Line, RiMoreLine, RiTimeLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import SocialMain from '../../page/social/SocialMain'

function BarMain({
    barmainid,
    barmainindex,
    barmaindata,

}) {
    const {
        // barmainstate,
        settabmainstate,
        setappmainstate,
        setsharemainstate,
        settoastermainstate,

        parsepost,
        favouritedi,

    } = useContext(ContextMain)
    const [barmainrender, setbarmainrender] = useState()

    const postindextime = [
        {
            barmainindex: 0,
            barmaindata: [
                {
                    barmainindex: 0,
                    barmainicon: <RiEyeLine />,
                    barmaindescription: 'views',
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'viewdi')
                        return kk(filter[0]?.postindexthreerender?.postcount, 1)
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 1,
                    barmainicon: <RiBookOpenLine />,
                    barmaindescription: 'read',
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'readdi')
                        return Math.floor(filter[0]?.postindexthreerender?.postblock?.length * 0.3) + ' min'
                    }, 
                    barmainrendertwo: () => {},

                },
                {
                    barmainindex: 2,
                    barmainicon: <RiTimeLine />,
                    barmaindescription: 'ago',
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        return ll(new Date(filter[0]?.postindexthreerender?._createdAt))
                    }, 
                    barmainrendertwo: () => {},
                },
                
                {
                    barmainindex: 4,
                    barmainrender: () => {},
                    barmaindescription: 'More',
                    barmainrendertwo: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'moredi')
                        const ref = filter[0]?.postindexthreerender
                        return <figure onClick={() => {
                                jj(ref)
                            }} className="">
                                <article className="">
                                    <RiMoreLine className='m-h3' />
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
                        return kk(filter[0]?.postindexthreerender?.postcount, 1)
                    }, 
                    barmainrendertwo: () => {},

                },
                // {
                //     barmainindex: 1,
                //     barmainicon: <RiBookOpenLine />,
                //     barmainrender: () => {
                //         const filter = barmaindata?.filter(data => data.postindexthreeid === 'readdi')
                //         return Math.floor(filter[0]?.postindexthreerender?.postblock?.length * 0.3) + ' min'
                //     }, 
                //     barmainrendertwo: () => {},

                // },
                {
                    barmainindex: 2,
                    barmainicon: <RiTimeLine />,
                    barmainrender: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'timedi')
                        return ll(new Date(filter[0]?.postindexthreerender?._createdAt))
                    }, 
                    barmainrendertwo: () => {},
                },
            
            ]
        },
        {
            barmainindex: 2,
            barmaindata: [
                {
                    barmainindex: 4,
                    barmainrender: () => {},
                    barmainrendertwo: () => {
                        const filter = barmaindata?.filter(data => data.postindexthreeid === 'moredi')
                        const ref = filter[0]?.postindexthreerender
                        return <figure onClick={() => {
                                jj(ref)
                            }} className="">
                                <article className="">
                                    <RiMoreLine className='m-h3' />
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
        },
        // {
        //     barmainid: 'favouritetime',
        //     barmainref: favouritetime,
        // },
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

    function kk(num, digits) {
      const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
      });
      return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
    }

    function jj(first= this.props.first) {
        settabmainstate({
            tabmainid: 'postoption',
            tabmaindata: first,
            tabmainparam: first?.postid,
            // tabmainlocation: location.pathname,
            tabmainimage: first?.posthero,
            tabmaintitle: first?.posttitle,
        })
        setappmainstate({
            appmainid: 'postoption',
            appmainidtwo: 'opendeskmain',
            appmainparam: first?.postid,
            appmainboolean: true,
        })
        setsharemainstate({
            sharemainparam: first?.postid,
        })
    }

  return (
    <div>
        <main className="w-full grid grid-cols-12 gap-3 items-center">
                <section className="col-span-9 flex flex-row gap-3 justify-start items-center">
                {barmainrender?.map((data, index) => (<>
                    <article key={index} className="flex flex-row gap-1 items-center  l-h4">
                        {data?.barmainicon}
                        {data?.barmainrender()}
                    </article>
                </>))}
                </section>

                <section className="col-span-3 flex flex-row gap-2 justify-end items-center  l-h4">
                {barmainrender?.map((data, index) => (<>
                <article key={index} onClick={() => {
                    data?.barmainaction()
                }} className="">
                    {data?.barmainrendertwo()}
                </article>
                </>))}
                </section>

        </main>

    </div>
  )
}

export default BarMain