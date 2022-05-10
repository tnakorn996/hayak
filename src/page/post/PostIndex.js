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

function PostIndex() {
    const {
        setappmainstate,
        // setpostindexstate,
        breadmainstate, setbreadmainstate,
        alertmainstate, setalertmainstate,

        userindex,
        postcreatedat,

    } = useContext(ContextMain)
    const param = useParams()
    const navigate = useNavigate()

    const [postpostid, setpostpostid] = useState()
    const [placepostid, setplacepostid] = useState()
    const [productplaceid, setproductplaceid] = useState()
    const [postplaceid, setpostplaceid] = useState()
    const [postcategoryid, setpostcategoryid] = useState()

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

    // window.onscroll = function () {
    //     const ref =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //     if (ref > 700) {
    //         setappmainstate({
    //             appmainid: 'overlay',
    //             appmainidtwo: 'toastmain',
    //             appmainidthree: 'postfigcaption',
    //         })
    //     } 
    //     if (ref <= 700) {
    //         setappmainstate('')
    //         console.log('appmainstate :>>' )
    //     }
    // }

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
            // jj()
            setbreadmainstate({
                breadmainid: postpostid?._type,
                breadmainidtwo: postpostid?.categoryid,
                breadmainidthree: postpostid?.posttitle,
            })
            setalertmainstate({
                alertmainid: 'postcaption',
            })
      }
    }, [postpostid])

    // useEffect(() => {
    //   if(postpostid && userindex){
    //         hh()
    //   }
    // }, [userindex, postpostid])
    
    const ll = async () => {
              const query = `*[ postid == '${param.id}']{
                  ...,
                  'placepostid': *[_type == 'place' && postid == ^.placeid],
                  'productplaceid': *[_type == 'product' && postid != ^.postid && placeid == ^.placeid ] ,

              }[0]`;
              await client.fetch(query) 
              .then((data) => {
                    setpostpostid(data);

                    setplacepostid(data.placepostid)
                    setproductplaceid(data.productplaceid)
                    // setpostplaceid(data.postplaceid)

                    setpostcategoryid(data.postcategoryid);
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

                            {dat.text !== '' ? (<>
                                <h1 onClick={() => window.open(findtwo && findtwo.href)} className={` ${find.postfigcaptiontitle} ${findtwo && '!text-blue-500 !cursor-pointer'} ${findthree && findthree.posth1title} leading-relaxed`}>{dat.text}</h1>
                            </>) : (<>
                                <h1 className="">
                                    <br />
                                </h1>
                            </>)}

                        </figcaption>
                    )
                })
            })
            return ref
        }
    }

    // const  jj = async () => {
    //         await client  
    //         .patch(postpostid._id)
    //         .set({postcount: postpostid.postcount + 1 || 0}) 
    //         .commit()
    // }

    // const  hh = async () => {
    //         await client  
    //         .patch(userindex._id)
    //         .set({categoryid: postpostid.categoryid}) 
    //         .commit()
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
                    <figure className="min-h-[50vh] grid items-center justify-items-center">
                        <LoadingMain />
                        <img src={postpostid?.posthero} alt="" className="z-10 w-full" />
                    </figure>
                    <figcaption className="">
                        <br />
                        <h1 className="text-base  italic  text-black font-serif">This article was last updated on {postpostid?._updatedAt?.slice(0, 10)}</h1>
                    </figcaption>
                </section>
                <section className="p-[20px]">
                    {kk()}
                    <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates odio, cumque qui porro facilis esse numquam pariatur ea consequuntur quisquam. Atque obcaecati, assumenda consectetur nihil officiis repellendus doloribus ab tempore dicta velit quas repudiandae ea nesciunt nostrum pariatur impedit.</h1>
                    <br />
                    <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates odio, cumque qui porro facilis esse numquam pariatur ea consequuntur quisquam. Atque obcaecati, assumenda consectetur nihil officiis repellendus doloribus ab tempore dicta velit quas repudiandae ea nesciunt nostrum pariatur impedit.</h1>
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
                        <div className="flex flex-row gap-2 items-center  m-h4">
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
                        <br />
                        <button className="m-h3 w-full m-button">🔗 Seller website</button>
                        <br /><br />
                        <button className="m-h3 w-full l-button  border border-black">Check avability product</button>
                </section>
                <section className="">
                    <br />
                    <br />
                    <h1 className="m-h6">Place location</h1>
                    <br />
                    <div className="flex flex-col gap-2">
                    {placepostid?.map(data => (<>
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
                </section>
            </figcaption>
            <figure className="col-span-12">
                <section className="">
                <br />
                <br />
                <h1 className="m-h6"> You may also like</h1>
                <br />
                <div className="grid grid-cols-5 gap-3">
                {postcreatedat?.slice(0, 5)?.map(data => (<>
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