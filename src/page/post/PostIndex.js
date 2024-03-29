import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiChat3Line, RiEyeLine, RiMore2Fill, RiInformationLine, RiContrastDropLine } from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {PortableText, PortableTextComponentsProvider} from '@portabletext/react'
import { useRef } from 'react'
// import {Helmet} from 'react-helmet'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'
import '../post/postindex.css'
import CtaMain from '../../component/ctamain/CtaMain'
import RtaMain from '../../component/rta/RtaMain'
import SpreadMain from '../../component/spread/SpreadMain'
// import CardMain from '../../component/card/CardMain'
// import LoadMain from '../../layout/load/LoadMain'
import { genreui } from '../../content/contentmantwo'
import SlideMain from '../../component/slide/SlideMain'
import BarMain from '../../component/bar/BarMain'
import GuideMain from '../../component/guide/GuideMain'
import PtaMain from '../../component/pta/PtaMain'
import JointMain from '../../component/joint/JointMain'
import ListMain from '../../component/list/ListMain'
import useClient from '../../hook/useClient'
import TipMain from '../../layout/tip/TipMain'
// import SnackbarMain from '../../component/snackbar/SnackbarMain'
// import FabMain from '../../component/fab/FabMain'
// import HorizonMain from '../../component/post/HorizonMain'

function PostIndex() {
    const {
        setappmainstate, appmainstate,
        // setpostindexstate,
        setwiremainstate,
        setctamainstate,
        setrtamainstate,
        setbreadmainstate,
        setportmainstate,
        setspreadmainstate,
        settabmainstate,
        setstepmainstate,
        setsharemainstate,
        setfavouritemainstate, favouritemainstate,

        // parsepost,
        // postplaceproduct,
        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const param = useParams()
    // const navigate = useNavigate()
    const ref = useRef(null)
    // const reftwo = useRef(null)

    const [postindexrender, setpostindexrender] = useState()
    // const [postindexrendertwo, setpostindexrendertwo] = useState()
    // const [postindexrenderthree, setpostindexrenderthree] = useState()
    const [postindexrenderfour, setpostindexrenderfour] = useState()
    const [postindexmessage, setpostindexmessage] = useState()
    const [postindexaction, setpostindexaction] = useState(false)
    const [postindexstyle, setpostindexstyle] = useState('')
    // const [snackbarmainstatic, setsnackbarmainstatic] = useState()

    const [postpostid, setpostpostid] = useState()
    const [postplaceid, setpostplaceid] = useState()
    const [placeplaceid, setplaceplaceid] = useState()
    const [productplaceid, setproductplaceid] = useState()
    const [productpostid, setproductpostid] = useState()
    const [commentpostid, setcommentpostid] = useState()

    const postindex = [
        {
            postindexid: 'post',
            postindexrenderfour: postupdatedat,
        },
        {
            postindexid: 'place',
            postindexrenderfour: placeupdatedat,
        },
        {
            postindexid: 'product',
            postindexrenderfour: productupdatedat,
        }
    ]

    const postindextwo = [
        {
            postindextwoid: 'postdi',
            postindextworender: postplaceid,
        },
        {
            postindextwoid: 'placedi',
            postindextworender: placeplaceid,
        },
        {
            postindextwoid: 'productdi',
            postindextworender: productplaceid,
        },
        {
            postindextwoid: 'pickdi',
            postindextworender: productpostid,
        },
       
    ]

    const postindexthree = [
        {
            postindexthreeid: 'readdi',
            postindexthreerender: postpostid
        },
        {
            postindexthreeid: 'viewdi',
            postindexthreerender: postpostid
        },
        {
            postindexthreeid: 'commentdi',
            postindexthreerender: postpostid
        },
        {
            postindexthreeid: 'timedi',
            postindexthreerender: postpostid
        },
        {
            postindexthreeid: 'socialdi',
            postindexthreerender: postpostid
        },
        {
            postindexthreeid: 'moredi',
            postindexthreerender: postpostid
        },
    ]

    const postdi = [
        {
            sheetindex: 0,
            sheetrender: postplaceid,
        },
        {
            sheetindex: 1,
            sheetrender: placeplaceid,
        },
        {
            sheetindex: 2,
            sheetrender: productplaceid,
        },
        {
            sheetindex: 3,
            sheetrender: productpostid,
        },
    ]

    // const postindexfour = [
    //     {
    //         postindexfourid: 'postdl',
    //         postindexfourrender: postpostid,
    //     },
    //     {
    //         postindexfourid: 'placedl',
    //         postindexfourrender: postpostid,
    //     },
    //     {
    //         postindexfourid: 'productdl',
    //         postindexfourrender: postpostid,
    //     },
    // ]

    const clientquery = `*[_type != 'comment' && _type != 'feedback' && postpublish != false && postid == '${appmainstate?.appmainparam || param.id}']{
          ...,
          'placeplaceid': *[_type == 'place' && postid match ^.placeid || _type == 'place' && postid match ^.placeidtwo] | order(_createdAt desc),
          'postplaceid': *[_type == 'post' && postpublish != false && postid != ^.postid && placeid match ^.placeid || _type == 'post' && postpublish != false && postid != ^.postid && placeid match ^.placeidtwo || _type == 'post' && postpublish != false && postid != ^.postid && productid match ^.postid || _type == 'post' && postpublish != false && postid != ^.postid && productidtwo match ^.postid || _type == 'post' && postpublish != false && postid != ^.postid && productidthree match ^.postid] | order(_createdAt desc) ,
          'productplaceid': *[_type == 'product' && postid != ^.postid && placeid match ^.placeid || _type == 'product' && postid != ^.postid && placeid match ^.placeidtwo || _type == 'product' && postid != ^.postid && placeidtwo match ^.placeid ] | order(_createdAt desc) ,
          'productpostid': *[_type == 'product' && postid match ^.productid || _type == 'product' && postid match ^.productidtwo || _type == 'product' && postid match ^.productidthree ] | order(_createdAt desc) ,
          'commentpostid': *[_type == 'comment' && postid == ^.postid ] | order(_createdAt desc) ,
      }[0]`;

    const [clientstatic, setclientstatic] = useClient(clientquery)

    useEffect(() => {
        // window.addEventListener('load', ll())
        // ll()
        if(clientstatic) {
            setpostpostid(clientstatic);
            setpostplaceid(clientstatic.postplaceid)
            setplaceplaceid(clientstatic.placeplaceid)
            setproductplaceid(clientstatic.productplaceid)
            setproductpostid(clientstatic.productpostid)
            setcommentpostid(clientstatic.commentpostid)
        }
    }, [clientstatic])

    useEffect(() => {
        if(postpostid){
            // kk()
            jj()
            // setbreadmainstate({
            //     breadmainid: postpostid?._type,
            //     breadmainidtwo: postpostid?.categoryid,
            //     breadmainidthree: postpostid?.posttitle,
            // })
            setwiremainstate({
                wiremainid: 'blocktr',
                wiremainindex: 0,
            })
            setportmainstate({
                portmainid: 'posttfoot',
                portmainidtwo: 'breadmain',
                portmainidthree: postpostid?._type,
            })
            setstepmainstate({
                stepmainid: 'postdatalist',
                stepmainrender: postpostid,
                stepmainindex: 0,
            })

            
        } 
    }, [postpostid])

    useEffect(() => {
      if(postpostid && genreui){
        const filter = genreui?.filter(data => data.crummainid === postpostid?.genreid)
        setpostindexrender(filter[0]?.crummaintitle)
      }
    }, [postpostid, genreui])

    useEffect(() => {
        if(placeplaceid || productplaceid || productpostid){
                if(placeplaceid && productplaceid && productpostid && postpostid.categoryid === 'recipe'){
                    setctamainstate({
                        ctamainid: postpostid?._type,
                        ctamainidtwo: true,
                        ctamainrender: postpostid,
                    })
                }

                if(placeplaceid && productplaceid && postpostid.categoryid !== 'recipe'){
                    setctamainstate({
                        ctamainid: postpostid?._type,
                        ctamainrender: postpostid,
                    })
                }     

        }
    },[ placeplaceid, productplaceid, productpostid])

    useEffect(() => {
      if(postupdatedat || placeupdatedat || productupdatedat) {
            const filterthree = postindex?.filter(data => data.postindexid === postpostid?._type)
            const filterfour = filterthree[0]?.postindexrenderfour?.filter(data => data?._id !== postpostid?._id)
            setpostindexrenderfour(filterfour)
      }
    }, [postpostid, postupdatedat, placeupdatedat, productupdatedat])


    const component = {
        text: {
            undefined: <br></br>
        },

        block: {
            normal: ({children}) => <h1 className="leading-relaxed">{children}</h1>,
            h1: ({children}) => <h1 className='!text-base'>{children}</h1>,
            h2: ({children}) => <h1 className='text-4xl  !m-h1' >{children}</h1>,
            h3: ({children}) => <h1 className='text-3xl  !m-h2' >{children}</h1>,
            h4: ({children}) => <h1 className='text-xl !m-h4' >{children}</h1>,
            h5: ({children}) => <h1 className='text-lg  !m-h5' >{children}</h1>,
            h6: ({children}) => <h1 className='text-md  !m-h6' >{children}</h1>,
            blockquote: ({children}) => <h1 className='!pl-[20px]  border-l border-gray-600 italic' >{children}</h1>,
        },

        listitem: {
            bullet: ({children}) => <h1 className='' >✔️ {children}</h1>,
            number: ({children}) => <h1 className='' >✔️ {children}</h1>,
        },

        marks: {
            strong: ({children}) => <h1 className="inline-block font-bold">{children}</h1>,
            em: ({children}) => <h1 className="inline-block italic">{children}</h1>,
            underline: ({children}) => <h1 className="inline-block underline">{children}</h1>,
            strikeThrought: ({children}) => <h1 className="inline-block line-through">{children}</h1>,

            link: ({value, children}) => {
                const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                return (
                    <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className='inline-block  text-blue-700'>
                    {children}
                    </a>
                )}
        },

    }

    const  jj = async () => {
            await client  
            .patch(postpostid._id)
            .set({postcount: postpostid.postcount + 1 || 0}) 
            .commit()
    }

    window.onscroll = function (){
        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 1.1)) && window.screen.width > 1000) {
            setpostindexstyle('!w-screen !min-h-[15vh] !grid-flow-col !bg-white !border-b !shadow-xl')
            
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.7)) && window.screen.width > 1000) {
            setpostindexstyle('')
        }

        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 0.9)) && window.screen.width <= 1000) {
            setpostindexstyle('!w-screen !min-h-[10vh] !grid-flow-row !bg-white !border-b !shadow-xl')
            
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.6)) && window.screen.width <= 1000) {
            setpostindexstyle('')
        }
    }

    // if(!postpostid) return <LoadMain />
    // if(!postpostid) return null
    if(!postpostid) return <JointMain jointmainid={'posttemplate'} jointmainindex={0} />

  return (
    <div>
        <main className="">
                {/* <Helmet>
                    <meta charSet="utf-8" />
                    <title>TOI FOOD NZ | {postpostid?.posttitle?.toUpperCase()}</title>
                    <meta name="description" content={postpostid?.postsubtitle} />
                    <meta name="image" property="og:image" content={postpostid?.posthero} />
                </Helmet> */}
                {/* <title>TOI NZ | {postpostid?.posttitle?.toUpperCase()}</title> */}
                {/* <meta property="og:type" content="article" />
                <meta property="og:url" content="http://www.example.com/link" />
                <meta property="og:image" content="" />
                <meta property="og:image:alt" content="Alt Text for Image" />
                <meta property="og:site_name" content="YourSite" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:contentnid" content="214" />
                <meta property="og:contenttype" content="article_listing" />
                <meta property="og:publishdt" content="Oct 5 , 2018" />
                <meta property="og:uploadedby" content="" />
                <meta property="fb:app_id" content="your app id" />   */}

        </main>
        <main className="flex flex-col md:grid md:grid-cols-12   duration-100">
            <figure className="col-span-12 relative">
                <section className="min-h-[75vh]  overflow-hidden">
                    <SlideMain 
                    slidemainid={'postindexth'} 
                    slidemainindex={0} 
                    slidemaindata={postpostid} 
                    slidemainref={ref}
                    slidemainscroll={1000}
                    slidemainstyle={'!p-0'}
                    slidemaintransform={0.5} />
                </section>
                <div className="absolute top-60 right-[15%] z-20 flex justify-center items-center">
                    {postpostid?.categoryid === 'recipe' && <GuideMain guidemainid={'posttbody'} guidemainindex={0} guidemaindata={postindextwo} />}
                </div>
                {/* <div className="hidden absolute top-[10vh] right-5 z-20 md:flex justify-center items-center">
                    {<PtaMain ptamainstatic={ptamainstatic} />}
                </div> */}
            </figure>
            <figcaption className="hidden md:block min-h-[30vh] col-span-12">
                <section className="grid grid-flow-col">
                    {(placeplaceid && productplaceid && productpostid) && (<>
                    {(postpostid.categoryid === 'recipe') && <SpreadMain sheetmainid={'categoryindexdi'} sheetmainindex={0} sheetmaindata={postindextwo}  />}
                    {(postpostid.categoryid !== 'recipe') && <SpreadMain sheetmainid={'categoryindexdi'} sheetmainindex={1} sheetmaindata={postindextwo}  />}
                    {(postpostid.categoryid === 'recipe') && <RtaMain rtamainid={'categorycanvas'} rtamainindex={1} rtamaindata={postdi}  />}
                    {(postpostid.categoryid !== 'recipe') && <RtaMain rtamainid={'categorycanvas'} rtamainindex={0} rtamaindata={postdi}  />}
                    </>)}
                </section>
            </figcaption>
            <div className={`relative col-span-12 flex flex-col-reverse`}>
            <figcaption className="col-span-12 md:col-span-7">
                <section className={`relative px-[20px] md:px-[60px] max-w-[750px] mx-auto h-[50vh] md:h-fit overflow-hidden ${!postindexaction && '!h-fit'}`}>
                    {/* {postindexstyle !== '' && (<><br /><br /><br /><br /><br /><br /><br /><br /><br /></>)} */}
                    <br />
                    <br />
                    <figcaption className="">
                        <h1 className={`text-base  italic  text-black font-serif`}>{ postpostid?._updatedAt && `This article was last updated on ` + postpostid?._updatedAt?.slice(0, 10)}</h1>
                    </figcaption>
                    <br />
                    <figcaption className="text-lg md:text-xl relative  md:font-light font-serif">
                        <PortableTextComponentsProvider components={component}  >
                            {postpostid?.postblock?.map((data, index) => (<>
                            <PortableText key={index} value={data} />
                            <br />
                            </>))}
                        </PortableTextComponentsProvider>
                        <br />
                    </figcaption>
                    <button onClick={() => {
                        setpostindexaction(!postindexaction)
                    }} className='absolute md:hidden z-10 right-0 md:right-[70px] bottom-0  md:m-[10px] l-button '>{postindexaction ? 'Show more' : 'Show less'}</button>
                    <figure className={`p-[10px] absolute md:hidden w-full h-[80%] bottom-0 left-0 flex items-end justify-end   bg-gradient-to-b from-transparent to-white ${!postindexaction && '!hidden'}`} />
                </section>
                <section layout className="px-[20px] md:px-[60px] max-w-[750px] mx-auto">
                    <br />
                    <figure className="">
                        {postpostid && <BarMain barmainid={'postindextime'} barmainindex={0} barmaindata={postindexthree} />}
                    </figure>
                    <br />   
                </section>
                {/* <section className="px-[20px] md:px-[60px] max-w-[750px] mx-auto">
                    {commentpostid?.map(data => (<>
                    <article className="border-b-[1.5px] border-gray-200">
                        <br />
                        <h1 className="m-h3 font-serif">{data?.commentsubtitle}</h1>
                        <div className="flex flex-row justify-start items-center gap-1">
                        <h1 className="m-h1  uppercase">{data?.commenttitle}</h1>
                        <h1 className="">·</h1>
                        <h1 className="m-h1  uppercase">{data?._createdAt?.slice(0, 10)}</h1>
                        </div>
                        <br />
                    </article>
                    </>))}
                </section> */}
            </figcaption>
            <figcaption className={`w-full md:w-[750px] mx-auto col-span-12 sticky z-10 top-0 left-0 min-h-[35vh] grid grid-flow-row  duration-1000  ${postindexstyle}`}>
                <section className="w-full px-[20px] md:px-[60px] max-w-[800px] mx-auto">
                    <br />
                    {postindexstyle === '' && (<><br /></>)}
                    <div className="flex flex-row justify-between">
                        <TipMain tipmainstatic={{tipmaindata: `Genre: ${postindexrender ? postindexrender : 'ORIGINAL'}`}}>
                            <h1 className={`flex flex-row items-center gap-1  l-h2 uppercase tracking-[0.2em]  ${postindexstyle !== '' && '!text-[12px]'}`}><RiContrastDropLine /> {postindexrender ? postindexrender : 'ORIGINAL'}</h1>
                        </TipMain>
                        <TipMain tipmainstatic={{tipmaindata: `Favourite`}}>
                        {<PtaMain ptamainstatic={{ptamainid: 'postiframe', ptamainindex: 0, ptamaindata: postpostid}} ptamainstyle={'text-xl'} />}
                        </TipMain>
                    </div>
                    <h1 className={`md:max-w-[80%] text-3xl md:text-5xl m-h6 py-[10px] font-serif leading-normal  ${postindexstyle !== '' && '!text-xl !leading-none'}`}>{postpostid?.posttitle}</h1>
                    {postindexstyle === '' && (<>
                    <h1 className={`first-letter:uppercase  l-h6`}>{postpostid?.postsubtitle}</h1>
                    </>)}
                    <br />
                </section>
                <section className={`w-full px-[20px] md:px-[60px] max-w-[800px] mx-auto md:h-full grid grid-flow-col items-center ${postindexstyle !== '' && 'hidden md:grid'}`}>
                    <CtaMain />
                    {/* {postindexstyle === '' && <br />} */}
                </section>
            </figcaption>
            </div>
            <figcaption className="block md:hidden col-span-12">
                <section className="px-[20px] md:p-0 md:grid md:grid-flow-col">
                    {(postpostid.categoryid === 'recipe') && <RtaMain rtamainid={'categorycanvas'} rtamainindex={1} rtamaindata={postdi}  />}
                    {(postpostid.categoryid !== 'recipe') && <RtaMain rtamainid={'categorycanvas'} rtamainindex={0} rtamaindata={postdi}  />}
                    {(placeplaceid && productplaceid && productpostid && postpostid.categoryid === 'recipe') && <SpreadMain sheetmainid={'categoryindexdi'} sheetmainindex={0} sheetmaindata={postindextwo}  />}
                    {(placeplaceid && productplaceid && postpostid.categoryid !== 'recipe') && <SpreadMain sheetmainid={'categoryindexdi'} sheetmainindex={1} sheetmaindata={postindextwo}  />}
                </section>
                <br />
            </figcaption>

            {/* <figure layout className="col-span-12">
                <br />
                <br />
                <hr />
                <br />
                <h1 className="px-[20px] md:px-[60px]  m-h5 md:m-h6 font-serif"> You may also like</h1>
                <br />
                <section className="overflow-hidden">
                    <SlideMain 
                    slidemainid={'categoryindexth'} 
                    slidemainindex={0} 
                    slidemaindata={postindexrenderfour} 
                    slidemainref={reftwo}
                    slidemainscroll={400} 
                    slidemainslice={12}
                    />
                </section>
            </figure> */}
            {/* <figure layout className="col-span-12">
                <br />
                <br />
                <hr />
                <br />
                <h1 className="px-[20px] md:px-[60px]  m-h5 md:m-h6 font-serif">Recommended from TOI</h1>
                <br />
                <section className="px-[20px] md:px-[60px] flex flex-col md:grid md:grid-cols-3 gap-5 overflow-hidden">
                    {postplaceproduct && postplaceproduct?.slice(0, 9)?.map(data => (<>
                    <HorizonMain key={data?.postid} postid={data?.postid} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
                    </>))}
                </section>
                <br /><br />
            </figure> */}
            {/* <figcaption className="max-w-[700px] mx-auto  col-span-12">
                <ListMain listmainid={'faqsummary'} listmainindex={0} />
            </figcaption> */}
            {/* <figure className="z-20 fixed bottom-5 right-5 flex flex-col items-end gap-3  duration-100">
                {(postindexstyle || !postindexaction) && (<>
                <FabMain fabmainid={'posttfoot'} fabmainindex={0} />
                </>)}
            </figure> */}
        </main>
    </div>
  )
}

export default PostIndex