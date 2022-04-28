import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../../lib/sanity'

function PostIndex() {
    const param = useParams()

    const [postindexobject, setpostindexobject] = useState()

    const postfigcaption = [
        {
            postfigcaptionid: 'normal',
            postfigcaptiontitle: '!text-base',

        },
        {
            postfigcaptionid: 'h1',
            postfigcaptiontitle: '!text-xs',
        },
        {
            postfigcaptionid: 'blockquote',
            postfigcaptiontitle: '!pl-[20px]  border-l-4 border-black italic',

        },
    ]

    const postdiv = [
        {
            postdivid: 'bullet',
            postdivtitle: '✔️'
        }
    ]

    const posth1 = [
        {
            posth1id: 'strong',
            posth1title: 'font-bold',
        }
    ]

    useEffect(() => {
        if(param){
            ll()
        }
    }, [param])

    const ll = async () => {
              const query = `*[_type == 'post' && postid == '${param.id}'][0]`;
              client.fetch(query) 
              .then((data) => {
                  setpostindexobject(data);
                })
            }

    function kk() {
        if(postindexobject){
            
            const ref =postindexobject.postblock.map(data => {
                const find = postfigcaption.find(dat => dat.postfigcaptionid === data.style)
                const findfour = postdiv.find(dat => dat.postdivid === data.listItem)
                console.log('findfour :>> ', findfour);
                return data.children.map(dat => {
                    const findtwo = data.markDefs.find(da => da._key === dat.marks[0])
                    const findthree = posth1.find(da => da.posth1id === dat.marks[0])
                    return (<>
                        <figcaption className='text-base flex flex-row  font-serif'  >
                        {findfour !== undefined && (<>
                        <div className="pr-[7px]">
                            {findfour.postdivtitle}
                        </div>
                        </>)}
                        <a href={findtwo && findtwo.href} className={` ${findtwo && '!text-blue-500'}`}>
                        {dat.text !== '' ? (<>
                            <h1 className={` ${find.postfigcaptiontitle} ${findthree && findthree.posth1title}`}>{dat.text }</h1>
                        </>) : (<>
                            <br />
                            </>)}
                        </a>
                        </figcaption>
                    </>)
                })
            })
            return ref
        }
    }

  return (
    <div>
        <main className="">
            <section className="max-w-[500px] mx-auto">
                <figcaption className="m-section">
                    <div className="flex flex-row gap-2">
                    <h1 className="l-h1">{postindexobject?._createdAt?.slice(0, 10)}</h1>
                    <h1 className="l-h1">·</h1>
                    <h1 className="l-h1">12 min read</h1>
                    </div>
                    <br />
                    <h1 className="text-4xl m-h6 py-[10px]  font-serif">{postindexobject?.posttitle}</h1>
                    <h1 className="l-h6 ">{postindexobject?.postsubtitle}</h1>
                    <br />
                </figcaption>
                <figure className="md:m-section">
                    <img src={postindexobject?.posthero} alt="" className="" />
                </figure>
                <figcaption className="">
                    <h1 className="l-h3 italic  m-section text-black">This article was last updated on {postindexobject?._updatedAt?.slice(0, 10)}</h1>
                </figcaption>
            </section>
            <section className="max-w-[500px] mx-auto p-[20px] ">
                {kk()}
            </section>




        </main>
    </div>
  )
}

export default PostIndex