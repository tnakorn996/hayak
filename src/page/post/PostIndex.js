import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiChat3Line, RiEyeLine, RiMore2Fill, RiInformationLine } from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {PortableText, PortableTextComponentsProvider} from '@portabletext/react'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'
import BreadMain from '../../component/bread/BreadMain'
import VerticleMain from '../../component/post/VerticleMain'
import LoadingMain from '../../component/load/LoadingMain'
import CtaMain from '../../component/ctamain/CtaMain'
import RtaMain from '../../component/rta/RtaMain'
import SpreadMain from '../../component/spread/SpreadMain'
import SocialMain from '../social/SocialMain'
import CardMain from '../../component/card/CardMain'
import LoadMain from '../../component/load/LoadMain'
import { genreui } from '../../content/contentmantwo'
import AlertMain from '../../component/alert/AlertMain'

function PostIndex() {
    const {
        setappmainstate,
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

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const param = useParams()
    const navigate = useNavigate()

    const [postindexrender, setpostindexrender] = useState()
    const [postindexrendertwo, setpostindexrendertwo] = useState()
    const [postindexrenderthree, setpostindexrenderthree] = useState()
    const [postindexrenderfour, setpostindexrenderfour] = useState()
    const [postindexmessage, setpostindexmessage] = useState()
    const [postindexaction, setpostindexaction] = useState(true)

    const [postpostid, setpostpostid] = useState()
    const [postplaceid, setpostplaceid] = useState()
    const [placeplaceid, setplaceplaceid] = useState()
    const [productplaceid, setproductplaceid] = useState()
    const [productpostid, setproductpostid] = useState()

    const postfigcaption = [
        {
            postfigcaptionid: 'normal',
            postfigcaptiontitle: '!text-base',

        },
        {
            postfigcaptionid: 'h1',
            postfigcaptiontitle: 'py-[20px] text-4xl  !m-h1',
        },
        {
            postfigcaptionid: 'h2',
            postfigcaptiontitle: 'py-[20px] text-3xl  !m-h2',
        },
        {
            postfigcaptionid: 'h3',
            postfigcaptiontitle: 'py-[20px] text-2xl  !m-h3',
        },
        {
            postfigcaptionid: 'h4',
            postfigcaptiontitle: 'text-xl !m-h4',
        },
        {
            postfigcaptionid: 'h5',
            postfigcaptiontitle: 'text-lg  !m-h5',
        },
        {
            postfigcaptionid: 'h6',
            postfigcaptiontitle: 'text-md  !m-h6',
        },
        {
            postfigcaptionid: 'blockquote',
            postfigcaptiontitle: '!pl-[20px]  border-l-2 border-gray-600 italic',

        },
    ]

    const postdiv = [
        {
            postdivid: 'bullet',
            postdivtitle: '✔️'
        },
        {
            postdivid: 'number',
            postdivtitle: '.'
        }
    ]

    const posth1 = [
        {
            posth1id: 'strong',
            posth1title: 'font-bold',
        },
        {
            posth1id: 'em',
            posth1title: 'italic',
        },
        {
            posth1id: 'underline',
            posth1title: 'underline',
        },
        {
            posth1id: 'strike-through',
            posth1title: 'line-through',
        }
    ]

    const postindex = [
        {
            postindexid: 'post',
            // postindexrender: <CtaMain />,
            // postindexrendertwo: ,
            // postindexrenderthree:'',
            postindexrenderfour: postupdatedat,
        },
        {
            postindexid: 'place',
            // postindexrender: <CtaMain />,
            // postindexrendertwo: ,
            // postindexrenderthree: '',
            postindexrenderfour: placeupdatedat,
        },
        {
            postindexid: 'product',
            // postindexrender: <CtaMain />,
            // postindexrendertwo: ,
            // postindexrenderthree: '',
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
        }
    ]

    useEffect(() => {
        ll()
    }, [])

    useEffect(() => {
      if(postpostid){
            // kk()
            // jj()
            setbreadmainstate({
                breadmainid: postpostid?._type,
                breadmainidtwo: postpostid?.categoryid,
                breadmainidthree: postpostid?.posttitle,
            })
            setwiremainstate({
                wiremainid: 'blocktr',
                wiremainindex: 0,
            })
            setportmainstate({
                portmainid: 'posttfoot',
                portmainidtwo: 'breadmain',
                portmainidthree: postpostid?._type,
            })
            // settabmainstate({
            //     tabmainid: 'blockselect',
            //     tabmainidtwo: 'blocklink',
            //     tabmainidthree: 'description',
            //     tabmainparam: param.id,
            // })
            setstepmainstate({
                stepmainid: 'postdatalist',
                stepmainrender: postpostid,
                stepmainindex: 0,
            })

            const filterfour = postindex?.filter(data => data.postindexid === postpostid?._type)
            setpostindexrenderfour(filterfour[0]?.postindexrenderfour)
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
                    const empty = []
                    postindextwo?.forEach(data => {
                        if (data?.postindextworender?.length <= 0){
                            empty.push({
                                spreadmainid: 'break',
                                spreadmainidtwo: data.postindextwoid,
                                spreadmainrender: data.postindextworender,
                            })
                            setspreadmainstate(empty)
                        }
                        if (data?.postindextworender?.length > 0) {
                            empty.push({
                                spreadmainid: 'success',
                                spreadmainidtwo: data.postindextwoid,
                                spreadmainrender: data.postindextworender,
                            })
                            setspreadmainstate(empty)
                        }
                    })

                }

                if(placeplaceid && productplaceid && postpostid.categoryid !== 'recipe'){
                    setctamainstate({
                        ctamainid: postpostid?._type,
                        ctamainrender: postpostid,
                    })
                    const empty = []
                    const filter = postindextwo.filter(data => data.postindextwoid !== 'pickdi')
                    filter?.forEach(data => {
                        if (data?.postindextworender?.length <= 0){
                            empty.push({
                                spreadmainid: 'break',
                                spreadmainidtwo: data.postindextwoid,
                                spreadmainrender: data.postindextworender,
                            })
                            setspreadmainstate(empty)
                        }
                        if (data?.postindextworender?.length > 0) {
                            empty.push({
                                spreadmainid: 'success',
                                spreadmainidtwo: data.postindextwoid,
                                spreadmainrender: data.postindextworender,
                            })
                            setspreadmainstate(empty)
                        }
                    })
                    
                }     

        }
    },[ placeplaceid, productplaceid, productpostid])
    
    // useEffect(() => {
    //   if(postpostid && userindex){
    //         hh()
    //   }
    // }, [userindex, postpostid])
    
    const ll = async () => {
              const query = `*[_type != 'comment' && _type != 'feedback' && postid == '${param.id}']{
                  ...,
                  'postplaceid': *[_type == 'post' && postid != ^.postid && placeid == ^.placeid ] | order(_createdAt desc) ,
                  'placeplaceid': *[_type == 'place' && postid == ^.placeid] | order(_createdAt desc),
                  'productplaceid': *[_type == 'product' && postid != ^.postid && placeid == ^.placeid ] | order(_createdAt desc) ,

                  'productpostid': *[_type == 'product' && postid match ^.productid || postid match ^.productidtwo || postid match ^.productidthree ] | order(_createdAt desc) ,
              }[0]`;
              await client.fetch(query)
              .then((data) => {
                    setpostpostid(data);

                    setpostplaceid(data.postplaceid)
                    setplaceplaceid(data.placeplaceid)
                    setproductplaceid(data.productplaceid)
                    setproductpostid(data.productpostid)
                }).catch((data) => {
                    setpostindexmessage(data.message)
                })
            }
    

    // function kk() {
    //     if(postpostid && postpostid.postblock){
            
    //         const ref = postpostid.postblock.map((data, dataindex) => {
    //             const find = postfigcaption.find(dat => dat.postfigcaptionid === data.style)
    //             const findfour = postdiv.find(dat => dat.postdivid === data.listItem)
    //             return data.children.map((dat, datindex) => {
    //                 const findtwo = data.markDefs.find(da => da._key === dat.marks[0])
    //                 const findthree = posth1.find(da => da.posth1id === dat.marks[0])
    //                 const target = (findtwo?.href || '').startsWith('http') ? '_blank' : undefined
    //                 return (<>
    //                     <figcaption className={`text-base inline-block font-serif`}  >
                            
    //                         {findfour !== undefined && (<>
    //                         <div className=" inline-block pr-[7px]">
    //                             {findfour.postdivid === 'number' && <h1 className="">{dataindex}</h1>}
    //                             {findfour.postdivtitle}
    //                         </div>
    //                         </>)}

    //                         <a href={findtwo && findtwo.href} target={target} rel={target === '_blank' && 'noindex nofollow'} className={`px-[3px] inline-block ${find.postfigcaptiontitle} ${findtwo && '!text-blue-500 !cursor-pointer'} ${findthree && findthree.posth1title} leading-relaxed`}>{dat.text}</a>
    //                         {dat.text.length === 0 && (<>
    //                             <h1 className="inline-block  bg-red-500">s<br /></h1>
    //                         </>)}

    //                     </figcaption>
    //                 </>)
    //             })
    //         })
    //         return ref
    //     }
    // }

    const component = {
        text: {
            undefined: <br></br>
        },

        block: {
            normal: ({children}) => <h1 className="">{children}</h1>,
            h1: ({children}) => <h1 className='!text-base'>{children}</h1>,
            h2: ({children}) => <h1 className='text-4xl  !m-h1' >{children}</h1>,
            h3: ({children}) => <h1 className='text-3xl  !m-h2' >{children}</h1>,
            h4: ({children}) => <h1 className='text-xl !m-h4' >{children}</h1>,
            h5: ({children}) => <h1 className='text-lg  !m-h5' >{children}</h1>,
            h6: ({children}) => <h1 className='text-md  !m-h6' >{children}</h1>,
            blockquote: ({children}) => <h1 className='!pl-[20px]  border-l-2 border-gray-600 italic' >{children}</h1>,
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

    // const  hh = async () => {
    //         await client  
    //         .patch(userindex._id)
    //         .set({categoryid: postpostid.categoryid}) 
    //         .commit()
    // }

    // window.onscroll = function (){
    //     if ((window.innerHeight + document.documentElement.scrollTop) > (document.documentElement.offsetHeight) * 70 /100) {
    //         setappmainstate({
    //             appmainid: 'overlay',
    //             appmainidtwo: 'toastmain',
    //             appmainidthree: 'postfigcaption',
    //         })
    //     } else {
    //         setappmainstate('')
    //     }
    // }

    // if(!postpostid) return <LoadMain />

    if(postindexmessage) return <section className="w-screen h-screen flex justify-center items-center">
        <AlertMain alertmainmessage={postindexmessage} />
    </section> 


  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="px-[20px] md:px-[60px] flex flex-col md:grid md:grid-cols-12 gap-3">
            <figcaption className="col-span-12 ">
                <br />
                <div className="flex justify-between items-center gap-5">
                    <BreadMain />
                    <figure onClick={() => {
                        settabmainstate({
                          tabmainid: 'postoption',
                          tabmainparam: postpostid?.postid,
                          // tabmainlocation: location.pathname,
                          tabmainimage: postpostid?.posthero,
                          tabmaintitle: postpostid?.posttitle,
                        })
                        setappmainstate({
                          appmainid: 'postoption',
                          appmainidtwo: 'opendeskmain',
                          appmainparam: postpostid?.postid,
                          appmainboolean: true,
                        })
                        setsharemainstate({
                          sharemainparam: postpostid?.postid,
                        })
                    }} className="">
                        <article className="">
                            <RiMore2Fill className='m-h3' />
                        </article>
                    </figure>
                </div>
                <br />
            </figcaption>
            <figure className="col-span-12 md:col-span-7">
                <section className="block md:hidden">
                    <h1 className="text-4xl m-h6 py-[10px]  font-serif leading-normal">{postpostid?.posttitle}</h1>
                    <h1 className="l-h6 ">{postpostid?.postsubtitle}</h1>
                    <br />
                </section>
                <section className="md:border-2 md:border-black">
                    <figure className="group relative min-h-[20vh] md:min-h-[50vh] grid items-center justify-items-center  md:border-b-2 md:border-black">
                        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5}} loading='lazy' src={postpostid?.posthero} alt="" className="z-10 w-full " />
                        <div className="absolute">
                        <LoadingMain />
                        </div>
                        <div onClick={() => {
                            setappmainstate({
                                appmainidtwo: 'previewmain',
                                appmainid: 'postarticle',
                                appmainpage: 1,
                                appmainrender: postpostid?.posthero,
                                appmainboolean: true,
                            })
                        }}  className="hidden group-hover:block absolute top-3 left-3 z-20 p-[10px]  ">
                            <button className="l-button opacity-100 border border-black">View image</button>
                        </div>
                    </figure>
                    <figure className="p-[10px] flex justify-between items-center">
                        <div className="flex flex-row gap-5 items-center ">
                            <div className="flex flex-row gap-2 items-center  m-h4">
                                <figure className="">
                                    <RiEyeLine />
                                </figure>
                                <figcaption className="">
                                    {postpostid?.postcount || 0}
                                </figcaption>
                            </div>
                            <div onClick={() => {
                                setappmainstate({
                                    appmainid: 'commentdialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                })
                            }} className="flex flex-row gap-2 items-center  m-h4">
                                <figure className="">
                                    <RiChat3Line />
                                </figure>
                                <figcaption className="">
                                    {postpostid?.postcount || 0}
                                </figcaption>
                            </div>
                        </div>
                        <div className="">
                        <SocialMain param={`/` + param.id} />
                            {/* <figure onClick={() => {
                                setappmainstate({
                                    appmainid: 'sharesection',
                                    appmainidtwo: 'modalmain',
                                    appmainidthree: 0,
                                    appmainparam: param.id,
                                    appmainboolean: true,
                                })
                            }} className="">
                            <article className="">
                            <RiMore2Fill className='m-h3' />
                            </article>
                        </figure> */}
                        </div>
                    </figure>
                </section>
                <br />
                <section className={`md:p-[20px] relative h-[60vh]  md:border-2 md:border-black overflow-hidden ${!postindexaction && '!h-fit'}`}>
                    <figcaption className="">
                        <h1 className="text-base  italic  text-black font-serif">{ postpostid?._updatedAt && `This article was last updated on` + postpostid?._updatedAt?.slice(0, 10)}</h1>
                    </figcaption>
                    <br />
                    <figcaption className="md:text-lg  font-light ">
                    <PortableTextComponentsProvider components={component}  >
                        {postpostid?.postblock?.map(data => (<>
                        <PortableText value={data} />
                        <br />
                        </>))}
                    </PortableTextComponentsProvider>
                    </figcaption>
                    <figure onClick={() => {
                        setpostindexaction(!postindexaction)
                    }} className={`p-[10px] absolute w-full h-[50%] bottom-0 left-0 flex items-end justify-end   bg-gradient-to-b from-transparent to-white ${!postindexaction && '!to-transparent'}`}>
                        <button className="l-button">{ postindexaction ? 'Read more' : 'Show less'}</button>
                    </figure>
                </section>
                <section layout className="">
                    <CardMain     
                    cardmainid={'commentimg'}
                    cardmainidtwo={'inform'}
                    cardmainidthree={'all'}
                    cardmainindex={0} 
                    />
                
                </section>
            </figure>
            <figcaption className="p-0 md:px-[30px] md:col-span-5">
                <section className="hidden md:block">
                    <h1 className="l-h3 uppercase">{postindexrender && postindexrender}</h1>
                    <h1 className="text-4xl m-h6 py-[10px]  font-serif leading-normal">{postpostid?.posttitle}</h1>
                    <h1 className="l-h6 ">{postpostid?.postsubtitle}</h1>
                </section>
                <section className="">
                    {<CtaMain />}
                    {<RtaMain />}
                    {<SpreadMain />}
                    {/* <TableMain /> */}
                    {/* <StepMain /> */}
                </section>
            </figcaption>
            <figure layout className="col-span-12">
                <br />
                <h1 className="m-h6 font-serif"> You may also like</h1>
                <br />
                <section className="overflow-y-scroll">
                <div className="w-[1000px] md:w-full grid grid-cols-4 gap-3">
                {postindexrenderfour?.slice(0, 4)?.map(data => (<>
                    <VerticleMain onlick={() => {
                                    navigate(`/${data?.postid}`)
                                }} key={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid} param={data?.postid} />
                    </>))}
                </div>
                </section>
                <br />
            </figure>
        </motion.main>
    </div>
  )
}

export default PostIndex