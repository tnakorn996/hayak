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

function PostIndex() {
    const {
        setappmainstate,
        setpostindexstate,
        setsearchindexstate,

        userindex,

    } = useContext(ContextMain)
    const param = useParams()
    const navigate = useNavigate()

    const [postpostid, setpostpostid] = useState()
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

    useEffect(() => {
        setTimeout(setappmainstate({
            appmainid: 'overlay',
            appmainidtwo: 'toastmain',
            appmainidthree: 'planfigcaption',
        }), 15000);
            ll()
            setpostindexstate({
                postindexid: param.id,
            })
    }, [])

    useEffect(() => {
      if(postpostid){
            jj()
      }
    }, [postpostid])

    useEffect(() => {
      if(postpostid && userindex){
            hh()
      }
    }, [userindex, postpostid])
    

    const ll = async () => {
              const query = `*[_type == 'post' && postid == '${param.id}']{
                  ...,
                  'postcategoryid': *[_type == 'post' && categoryid == ^.categoryid][0..3],
              }[0]`;
              client.fetch(query) 
              .then((data) => {
                    setpostpostid(data);
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

    const  jj = async () => {
            await client  
            .patch(postpostid._id)
            .set({postcount: postpostid.postcount + 1 || 0}) 
            .commit()
    }

    const  hh = async () => {
            await client  
            .patch(userindex._id)
            .set({categoryid: postpostid.categoryid}) 
            .commit()
    }

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="grid grid-cols-12 max-w-[1200px] gap-3 mx-auto">
            <figcaption className="col-span-12 md:col-span-8 max-w-[600px] mx-auto">
                <section className="">
                    <figcaption className="m-section">
                        <br />
                        <div className="flex flex-row gap-2 justify-between">
                            <figcaption className="flex flex-row gap-2">
                                <h1 className="l-h1">{postpostid?._createdAt?.slice(0, 10)}</h1>
                                <h1 className="l-h1">·</h1>
                                <h1 className="l-h1">12 min read</h1>
                            </figcaption>
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
                        <h1 className="text-4xl m-h6 py-[10px]  font-serif leading-normal">{postpostid?.posttitle}</h1>
                        <h1 className="l-h6 ">{postpostid?.postsubtitle}</h1>
                        <br />
                    </figcaption>
                    <figure className="md:m-section">
                        <img src={postpostid?.posthero} alt="" className="" />
                    </figure>
                    <figcaption className=" m-section">
                        <br />
                        <h1 className="text-base  italic  text-black font-serif">This article was last updated on {postpostid?._updatedAt?.slice(0, 10)}</h1>
                    </figcaption>
                </section>
                <section className="p-[20px]">
                    {kk()}
                </section>
                <section className="m-section flex justify-between">
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
                        <figure className="">
                                <RiMore2Fill className='m-h3' />
                        </figure>
                </section>
                <section className="">
                    {postcategoryid?.map(data => (<>
                        <HorizonMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                    </>))}
                </section>
                
            </figcaption>
            <figure className="hidden md:block col-span-3 max-w-[300px] mx-auto">
                <br /><br />
                <img src="https://static.wixstatic.com/media/72c0b2_78011f70f85b49c495e470da8932279c~mv2.png/v1/fill/w_251,h_451,al_c,lg_1,q_85,enc_auto/Make_an_Impact_Online.png" alt="" className="" />
            </figure>





        </motion.main>
    </div>
  )
}

export default PostIndex