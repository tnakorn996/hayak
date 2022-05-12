import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiChat3Line, RiEyeLine, RiMore2Fill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import HorizonMain from '../../component/post/HorizonMain'
import { ContextMain } from '../../context/contextmain'
import { motion } from 'framer-motion'

import { client } from '../../lib/sanity'
import BreadMain from '../../component/bread/BreadMain'
import VerticleMain from '../../component/post/VerticleMain'
import AlertMain from '../../component/alert/AlertMain'
import LoadingMain from '../../component/load/LoadingMain'
import CtaMain from '../../component/ctamain/CtaMain'
import RtaMain from '../../component/rta/RtaMain'

function PostIndex() {
    const {
        setappmainstate,
        // setpostindexstate,
        setctamainstate,
        setrtamainstate,
        breadmainstate, setbreadmainstate,
        alertmainstate, setalertmainstate,

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
    const [postpostid, setpostpostid] = useState()
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

    useEffect(() => {
        // setTimeout(setappmainstate({
        //     appmainid: 'overlay',
        //     appmainidtwo: 'toastmain',
        //     appmainidthree: 'planfigcaption',
        // }), 15000);
        // setpostindexstate({
            //     postindexid: param.id,
            // })
        ll()
    }, [])

    useEffect(() => {
      if(postpostid){
            jj()
            setbreadmainstate({
                breadmainid: postpostid?._type,
                breadmainidtwo: postpostid?.categoryid,
                breadmainidthree: postpostid?.posttitle,
            })
            setalertmainstate({
                alertmainid: 'postcaption',
            })

            const filterfour = postindex.filter(data => data.postindexid === postpostid._type)
            setpostindexrenderfour(filterfour[0].postindexrenderfour)
      }
    }, [postpostid])

    useEffect(() => {
        if(placeplaceid || productplaceid || productpostid){
                if(placeplaceid && productplaceid && productpostid?.length > 0){
                    setctamainstate({
                        ctamainid: postpostid?._type,
                        ctamainidtwo: true,
                    })
                    setrtamainstate({
                        rtamainid: postpostid?._type,
                        ctamainidtwo: true,
                        rtamaindata: placeplaceid,
                        rtamaindatatwo: productpostid,
                    })
                } 

                if(placeplaceid && productplaceid && productpostid?.length === 0){
                    setctamainstate({
                        ctamainid: postpostid?._type,
                    })
                    setrtamainstate({
                        rtamainid: postpostid?._type,
                        rtamaindata: placeplaceid,
                        rtamaindatatwo: productplaceid,
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
        // 'placepostid': *[_type == 'place' && postid == ^.placeid],
        // 'productplaceid': *[_type == 'product' && postid != ^.postid && placeid == ^.placeid ] ,
              const query = `*[ postid == '${param.id}']{
                  ...,
                  'placeplaceid': *[_type == 'place' && postid == ^.placeid],
                  'productplaceid': *[_type == 'product' && postid != ^.postid && placeid == ^.placeid ] ,

                  'productpostid': *[ postid match ^.productid || postid match ^.productidtwo || postid match ^.productidthree ] ,
              }[0]`;
              await client.fetch(query) 
              .then((data) => {
                    setpostpostid(data);

                    setplaceplaceid(data.placeplaceid)
                    setproductplaceid(data.productplaceid)
                    setproductpostid(data.productpostid)
                })
            }

    function kk() {
        if(postpostid && postpostid.postblock){
            
            const ref = postpostid.postblock.map((data, dataindex) => {
                const find = postfigcaption.find(dat => dat.postfigcaptionid === data.style)
                const findfour = postdiv.find(dat => dat.postdivid === data.listItem)
                return data.children.map((dat, datindex) => {
                    const findtwo = data.markDefs.find(da => da._key === dat.marks[0])
                    const findthree = posth1.find(da => da.posth1id === dat.marks[0])
                    return (
                        <figcaption className='text-base flex flex-row   font-serif'  >
                            
                            {findfour !== undefined && (<>
                            <div className="pr-[7px] flex flex-row">
                                {findfour.postdivid === 'number' && <h1 className="">{dataindex}</h1>}
                                {findfour.postdivtitle}
                            </div>
                            </>)}

                            {/* {dat.text !== '' ? (<> */}
                                <h1 onClick={() => window.open(findtwo && findtwo.href)} className={` ${find.postfigcaptiontitle} ${findtwo && '!text-blue-500 !cursor-pointer'} ${findthree && findthree.posth1title} leading-relaxed`}>{dat.text}</h1>
                            {/* </>) : (<> */}
                                {/* <h1 className=""> */}
                                    {/* <br /> */}
                                {/* </h1> */}
                            {/* </>)} */}

                        </figcaption>
                    )
                })
            })
            return ref
        }
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

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="px-[20px] md:px-[60px] flex flex-col md:grid md:grid-cols-12 gap-3">
            <figcaption className="col-span-12 ">
                <br />
                <div className="flex justify-between items-center gap-5">
                    <BreadMain />
                    <figure onClick={() => {
                        setappmainstate({
                            appmainid: 'sharesection',
                            appmainidtwo: 'modalmain',
                            appmainparam: param.id,
                            appmainboolean: true,
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
                <section className="">
                    <figure className="relative min-h-[50vh] grid items-center justify-items-center">
                        <img src={postpostid?.posthero} alt="" className="z-10 w-full" />
                        <div className="absolute">
                        <LoadingMain />
                        </div>
                    </figure>
                    <figcaption className="">
                        <br />
                        <h1 className="text-base  italic  text-black font-serif">This article was last updated on {postpostid?._updatedAt?.slice(0, 10)}</h1>
                    </figcaption>
                </section>
                <section className="p-[20px]">
                    {kk()}
                    <br />
                    <AlertMain />
                </section>
                <section className="flex justify-between">
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
                                appmainid: 'postdialog',
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
                    <figure onClick={() => {
                        setappmainstate({
                                    appmainid: 'sharesection',
                                    appmainidtwo: 'modalmain',
                                    appmainparam: param.id,
                                    appmainboolean: true,
                                })
                        }} className="">
                        <article className="">
                        <RiMore2Fill className='m-h3' />
                        </article>
                    </figure>
                </section>
            </figure>
            <figcaption className="p-0 md:p-[30px] md:col-span-5">
                <section className="">
                        <h1 className="text-4xl m-h6 py-[10px]  font-serif leading-normal">{postpostid?.posttitle}</h1>
                        <h1 className="l-h6 ">{postpostid?.postsubtitle}</h1>
                        {<CtaMain />}
                </section>
                {<RtaMain />}
                {/* <section className="">
                    <br />
                    <br />
                    <h1 className="m-h6">Place location</h1>
                    <br />
                    <div className="flex flex-col gap-2">
                        {placeplaceid?.map(data => (<>
                        <HorizonMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                        </>))}
                    </div>
                </section>
                <section className="">
                    <br />
                    <br />
                    <h1 className="m-h6">Related product</h1>
                    <br />
                    <div className="flex flex-col gap-2">
                        {productplaceid?.map(data => (<>
                        <HorizonMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                        </>))}
                    </div>
                </section> */}
            </figcaption>
            <figure className="col-span-12">
                <br />
                <br />
                <h1 className="m-h6"> You may also like</h1>
                <br />
                <section className="overflow-y-scroll">
                <div className="w-[1000px] md:w-full grid grid-cols-5 gap-3">
                {postindexrenderfour?.slice(0, 5)?.map(data => (<>
                    <VerticleMain onlick={() => {
                                    navigate(`/${data?.postid}`)
                                }} key={data?.postid} createdat={data?._createdAt} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
                    </>))}
                </div>
                </section>
            </figure>
        </motion.main>
    </div>
  )
}

export default PostIndex