import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../component/button/ButtonMain'
import CardMain from '../../component/card/CardMain'

import StateMain from '../../component/state/StateMain'
import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function CommentDialog() {
    const {
        setappmainstate,
        setstatemainstate,

    } = useContext(ContextMain)
    const location = useLocation()
    const [commentdialogrender, setcommentdialogrender] = useState()
    const [commentdialogrendertwo, setcommentdialogrendertwo] = useState()
    const [commentdialogload, setcommentdialogload] = useState(false)

    const [commentdialogtitle, setcommentdialogtitle] = useState('')
    const [commentdialogsubtitle, setcommentdialogsubtitle] = useState('')

    useEffect(() => {
        setstatemainstate({
            statemainid: 'commentdl',
            statemainidtwo: 'break',
        })
        ll()
    }, [])

    const ll = async () => {
            const query = `*[ postid == '${location.pathname?.slice(1, location.pathname.length)}' && commentboolean == true]`;
            await client.fetch(query) 
            .then((data) => {
                setcommentdialogrendertwo(data)
            })
    }

    const kk = async () => {
        if(commentdialogsubtitle !== ''){
            setcommentdialogload(true)
            const doc = {
                _id: uuidv4(),
                _type: 'comment',
                commentid:  uuidv4(),
                commenttitle: commentdialogtitle,
                commentsubtitle: commentdialogsubtitle,
                commentboolean: false,

                postid: location.pathname?.slice(1, location.pathname.length),
            }
            await client.createOrReplace(doc).then(() => {
                setcommentdialogrender(<CardMain     
                cardmainid={'commentimg'}
                cardmainidtwo={'success'}
                cardmainidthree={'feedback'}
                cardmainindex={0} 
                />)
                setcommentdialogload(false)
            });
        } else {
            setcommentdialogrender(<CardMain     
                cardmainid={'commentimg'}
                cardmainidtwo={'fail'}
                cardmainidthree={'feedback'}
                cardmainindex={0} 
                />)
        }
    }


  return (
    <div>
        <main className="p-[20px] md:p-[50px]">
            <section className="p-[20px] border border-white">

                <textarea onChange={p => setcommentdialogsubtitle(p.target.value)} rows="3" placeholder='What are your thoughts?' className='w-full  l-input border-b-2 border-white' />
                    <br /><br />
                    <div className="">
                    <ButtonMain 
                    onclick={() => {

                        kk()

                        // setstatemainstate({
                        //     statemainid: 'commentdl',
                        //     statemainidtwo: 'fail',
                        // })
                        // setappmainstate({
                        //     appmainid: 'statesection',
                        //     appmainidtwo: 'modalmain',
                        //     appmainidthree: 0,
                        //     appmainboolean: true,
                        // })
                    }} 
                    title={'Post comments'}
                    load={commentdialogload}
                    />
                    </div>
            </section>
            <section className="">
                {commentdialogrender && commentdialogrender}
            </section>
            <br />
            <section className="p-[20px] border border-white">
                <figcaption className="">
                    <h1 className="m-h6 font-serif">Responses ({commentdialogrendertwo?.length || 0})</h1>
                </figcaption>
                {commentdialogrendertwo?.length >= 0 && (<>
                <CardMain     
                cardmainid={'commentimg'}
                cardmainidtwo={'inform'}
                // cardmainidthree={'feedback'}
                cardmainindex={0} 
                />
                </>)}
                <br />
                {commentdialogrendertwo?.map(data => (<>
                    <article className="border border-gray-700">
                        <h1 className="m-h3">{data?.commentsubtitle}</h1>
                    </article>
                </>))}

            </section>
        </main>
    </div>
  )
}

export default CommentDialog