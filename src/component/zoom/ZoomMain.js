import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { MdShowChart } from 'react-icons/md'
import { RiChat4Fill, RiChat4Line, RiHeartFill, RiHistoryFill, RiLayoutGridFill, RiMapPin3Fill, RiMapPin3Line, RiNewspaperFill, RiNewspaperLine, RiSearch2Line, RiShoppingBag2Fill, RiShoppingBag2Line } from 'react-icons/ri'
import { VscSearch } from 'react-icons/vsc'
import { useLocation } from 'react-router-dom'
import { userui } from '../../content/contentmantwo'
// import { useNavigate } from 'react-router-dom'
// import { categoryul } from '../../content/contentmantwo'

import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'
// import { client } from '../../lib/sanity'
import MtaMain from '../mta/MtaMain'
import PtaMain from '../pta/PtaMain'

function ZoomMain({
    zoommainid, 
    zoommainslice,

    favouritemainstate,
}) {
    const {
        localpost, parsepost,
        feedbacklink,
        searchdl,
        postdi,
        rtadi,

        searchinputstate,
        // searchmainstate,

    } = useContext(ContextMain)
    // const navigate = useNavigate()
    // const location = useLocation()
    const [zoommainkey, setzoommainkey] = useState('')
    const [zoommainindex, setzoommainindex] = useState(0)
    const [zoommainalert, setzoommainalert] = useState()

    const [zoommainplaceholder, setzoommainplaceholder] = useState()
    const [zoommaindata, setzoommaindata] = useState()

    const searchinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Recent searches',
                    zoommainrender: searchdl[3].spreadmaindata,
                    zoommainicon: <RiHistoryFill />,

                },
                {
                    zoommaintitle: 'Trending blog',
                    zoommainrender: searchdl[0].spreadmaindata,
                    zoommainicon: <MdShowChart />,
                },
                {
                    zoommaintitle: 'Trending places',
                    zoommainrender: searchdl[1].spreadmaindata,
                    zoommainicon: <MdShowChart />,

                },
                {
                    zoommaintitle: 'Trending products',
                    zoommainrender: searchdl[2].spreadmaindata,
                    zoommainicon: <MdShowChart />,

                },
            ],
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Blog',
                    zoommainrender: (searchdl[0].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiNewspaperFill />,
                    // .filter(data => data._type === breadmainstate.breadmainidtwo),

                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: (searchdl[1].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: (searchdl[2].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiShoppingBag2Fill />,

                },
               
            ],
        },
    ]

    // const feedbackinput = [
    //     {
    //         zoommainindex: 0,
    //         zoommaindata: [
    //             {
    //                 zoommaintitle: 'Give us feedback',
    //                 zoommainrender: feedbacklink,
    //                 zoommainicon: <RiChat4Fill />,
    //             },
    //         ]
    //     },
    //     {
    //         zoommainindex: 1,
    //         zoommaindata: [
    //             {
    //                 zoommaintitle: 'Give us feedback',
    //                 zoommainrender: (feedbacklink.filter(data => data.blemaintitle.toLowerCase().includes(zoommainkey) || data.blemainid.toLowerCase().includes(zoommainkey))),
    //                 zoommainicon: <RiChat4Fill />,
    //             },
    //         ]
    //     },
    // ]

    const favouriteinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Blog',
                    zoommainrender: postdi[0]?.sheetmaindata,
                    zoommainicon: <RiNewspaperFill />,
                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: postdi[1]?.sheetmaindata,
                    zoommainicon: <RiMapPin3Fill />,
                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: postdi[2]?.sheetmaindata,
                    zoommainicon: <RiShoppingBag2Fill />,
                },
            ],
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Blog',
                    zoommainrender: postdi[0]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiNewspaperFill />,

                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: postdi[1]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: postdi[2]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiShoppingBag2Fill />,

                },
            ]
        },
    ]

    const rtainput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Place Location',
                    zoommainrender: rtadi[0]?.sheetmaindata?.concat([])?.sort((a, b) => b.postcount - a.postcount),
                    zoommainicon: <RiMapPin3Fill />,
                },
                {
                    zoommaintitle: `What You'll Need`,
                    zoommainrender: rtadi[3]?.sheetmaindata?.concat([])?.sort((a, b) => b.postcount - a.postcount),
                    zoommainicon: <RiShoppingBag2Fill />,
                },
                {
                    zoommaintitle: 'Related Blogs',
                    zoommainrender: rtadi[1]?.sheetmaindata?.concat([])?.sort((a, b) => b.postcount - a.postcount),
                    zoommainicon: <RiNewspaperFill />,
                },
                {
                    zoommaintitle: 'Related Products',
                    zoommainrender: rtadi[2]?.sheetmaindata?.concat([])?.sort((a, b) => b.postcount - a.postcount),
                    zoommainicon: <RiShoppingBag2Fill />,
                },

            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Place Location',
                    zoommainrender: rtadi[0]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: `What You'll Need`,
                    zoommainrender: rtadi[3]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiShoppingBag2Fill />,
                },
                {
                    zoommaintitle: 'Related Blogs',
                    zoommainrender: rtadi[1]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiNewspaperFill />,

                },
                {
                    zoommaintitle: 'Related Products',
                    zoommainrender: rtadi[2]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiShoppingBag2Fill />,

                },

            ]
        },
    ]


    const rtainputtwo = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Place Location',
                    zoommainrender: rtadi[0]?.sheetmaindata?.concat([])?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
                    zoommainicon: <RiMapPin3Fill />,
                },
                {
                    zoommaintitle: `What You'll Need`,
                    zoommainrender: rtadi[3]?.sheetmaindata?.concat([])?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
                    zoommainicon: <RiShoppingBag2Fill />,
                },
                {
                    zoommaintitle: 'Related Blogs',
                    zoommainrender: rtadi[1]?.sheetmaindata?.concat([])?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
                    zoommainicon: <RiNewspaperFill />,
                },
                {
                    zoommaintitle: 'Related Products',
                    zoommainrender: rtadi[2]?.sheetmaindata?.concat([])?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
                    zoommainicon: <RiShoppingBag2Fill />,
                },

            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Place Location',
                    zoommainrender: rtadi[0]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: `What You'll Need`,
                    zoommainrender: rtadi[3]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiShoppingBag2Fill />,
                },
                {
                    zoommaintitle: 'Related Blogs',
                    zoommainrender: rtadi[1]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiNewspaperFill />,

                },
                {
                    zoommaintitle: 'Related Products',
                    zoommainrender: rtadi[2]?.sheetmaindata?.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey)),
                    zoommainicon: <RiShoppingBag2Fill />,

                },

            ]
        },
    ]

    const feedbackinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: '',
                    zoommainrender: [],
                    zoommainicon: '',
                },
            ],
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Blog',
                    zoommainrender: (searchdl[0].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiNewspaperFill />,
                    // .filter(data => data._type === breadmainstate.breadmainidtwo),

                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: (searchdl[1].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: (searchdl[2].spreadmaindata.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiShoppingBag2Fill />,

                },
               
            ],
        },
    ]

    const contactinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: '',
                    zoommainrender: [],
                    zoommainicon: '',
                },
            ],
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'City or Region',
                    zoommainrender: (userui[3].crummaindata.filter(data => data.crummainsubtitle.toLowerCase().includes(zoommainkey) || data.crummainid.toLowerCase().includes(zoommainkey) )),
                    zoommainicon: <RiMapPin3Fill />,
                },
            ],
        },
    ]

    const zoommain = [
        {
            zoommainid: 'searchinput',
            zoommainref: searchinput,
            zoommainplaceholder: `eg. coffee, lamb, red rabbit`,
        },
        // {
        //     zoommainid: 'feedbackinput',
        //     zoommainref: feedbackinput,
        // },
        {
            zoommainid: 'favouriteinput',
            zoommainref: favouriteinput,
            zoommainplaceholder: `find your saved posts`,
        },
        {
            zoommainid: 'rtainput',
            zoommainref: rtainput,
            zoommainplaceholder: `find posts, places or products`,
        },
        {
            zoommainid: 'rtainputtwo',
            zoommainref: rtainputtwo,
            zoommainplaceholder: `find posts, places or products`,
        },
        {
            zoommainid: 'feedbackinput',
            zoommainref: feedbackinput,
            zoommainplaceholder: `eg. coffee, lamb, red rabbit`,
        },
        {
            zoommainid: 'contactinput',
            zoommainref: contactinput,
            zoommainplaceholder: `eg. Auckland, Wellington, Waikato`,
        },
    ]

    useEffect(() => {
        if(zoommainkey !== ''){setzoommainindex(1)} 
        if(zoommainkey === ''){setzoommainindex(0)}
    }, [zoommainkey])

    const [appstatic, setappstatic] = useApp(zoommain, zoommainid, zoommainindex, zoommainkey)

    useEffect(() => {
        if(appstatic){
            const empty = []
            for(const data of appstatic[0].zoommaindata){
                if(data?.zoommainrender && data.zoommainrender.length !== 0){
                    empty.push(data)
                    setzoommaindata(empty)
                }
            }

            const filter = zoommain.filter(data => data.zoommainid === zoommainid)
            setzoommainplaceholder(filter[0].zoommainplaceholder)
        }
    }, [appstatic])

    // useEffect(() => {
    //     if(zoommainid){
    //         const filter = zoommain.filter(data => data.zoommainid === zoommainid)
    //         const filtertwo = filter[0].zoommainref.filter(data => data.zoommainindex === zoommainindex)
    //         const empty = []
    //         for(const data of filtertwo[0].zoommaindata){
    //             if(data?.zoommainrender && data.zoommainrender.length !== 0){
    //                 empty.push(data)
    //                 setzoommaindata(empty)
    //             }
    //         }
    //         setzoommainplaceholder(filter[0].zoommainplaceholder)
    //     }
    // }, [zoommainid, zoommainindex, zoommainkey])

  return (
    <div>
        <main className="px-[20px] w-full">
            <section autoFocus className="max-h-[20vh]">
                <br />
                <div className="w-full relative flex items-center">
                    <VscSearch className='absolute left-4  l-h6' />
                    <input autoFocus onChange={(p) => setzoommainkey(p.target.value)} value={zoommainkey?.toLocaleLowerCase()} className="w-full pl-[50px]  l-input" placeholder={zoommainplaceholder} />
                </div>
            </section>
            <section className="">
            <br />
            {(zoommainid === 'favouriteinput') && <MtaMain mtamainstatic={{mtamainid: 'favouritetable'}} mtamainstyle={'!text-xl'} />}
            {(zoommainid === 'feedbackinput') && <MtaMain mtamainstatic={{mtamainid: 'feedbacktable'}} mtamainstyle={'!text-xl'} />}
            {(zoommainid === 'contactinput') && <MtaMain mtamainstatic={{mtamainid: 'contacttable'}} mtamainstyle={'!text-xl'} />}
            </section>

            <section className="">
                {zoommaindata?.map(data => (<>
                {data?.zoommainrender?.length > 0 && (<>
                <figcaption className="">
                <br /><br />
                <h1 className="m-h1">{data?.zoommaintitle} ({data?.zoommainrender?.length})</h1>
                <br />
                    {data?.zoommainrender?.length !== 0 && data?.zoommainrender?.slice(0, zoommainslice)?.map(dat => (<>
                        <motion.figure initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative w-full py-[10px] flex flex-row items-center justify-between  group">
                            <div className="grid grid-flow-col items-center justify-start gap-3">
                            <span className="l-h2 h-[30px] w-[30px] flex justify-center items-center  bg-gray-700 rounded-full text-white ">{data.zoommainicon}</span>
                            <figcaption className="flex flex-row items-center gap-1  truncate">
                                {/* <PtaMain ptamainstatic={{ptamainid:'searchiframe', ptamaindata: dat}} >
                                </PtaMain> */}
                                <a href={`/${dat?.postid}`} className=" leading-loose !text-gray-700 font-serif truncate">{dat?.posttitle}</a>
                                <p onClick={dat?.blemainaction} className=" leading-loose !text-gray-700 font-serif truncate">{dat?.blemaintitle}</p>
                                <a href={`${dat?.breadmainaction}`}  className=" leading-loose !text-gray-700 font-serif truncate">{dat?.breadmaintitle}</a>
                                <p className=" leading-loose !text-gray-700 font-serif truncate">{dat?.crummainsubtitle}</p>
                                {/* <p className="l-h1 truncate">{dat?.postsubtitle}</p> */}
                            </figcaption>
                            </div>

                            <div className="flex flex-row items-center justify-end gap-3">
                            {/* <motion.div className="opacity-0 group-hover:opacity-100  duration-100"> */}
                            {/* {(zoommainid === 'searchinput') && <PtaMain ptamainstatic={{ptamainid: 'searchiframe', ptamaindata: dat}} ptamainstyle={'!text-sm'} />} */}
                            {(zoommainid === 'contactinput') && <PtaMain ptamainstatic={{ptamainid: 'contactiframe', ptamaindata: dat}} ptamainstyle={'!text-sm'} />}
                            {(zoommainid === 'feedbackinput') && <PtaMain ptamainstatic={{ptamainid: 'feedbackiframe', ptamaindata: dat}} ptamainstyle={'!text-sm'} />}
                            {(zoommainid === 'favouriteinput') && <PtaMain ptamainstatic={{ptamainid: 'favouriteiframe', ptamaindata: dat}} ptamainstyle={'!text-sm'} />}
                            {(zoommainid !== 'feedbackinput' && zoommainid !== 'favouriteinput' && zoommainid !== 'contactinput') && <PtaMain ptamainstatic={{ptamainid: 'postiframe', ptamaindata: dat}} ptamainstyle={'!text-sm'} />}
                            {/* </motion.div> */}
                            </div>

                        </motion.figure>
                        {/* <div className="w-full  border-b border-gray-200" /> */}
                    </>))}
                </figcaption>
                </>)}
                </>))}
                <br />


            </section>
        </main>
    </div>
  )
}

export default ZoomMain