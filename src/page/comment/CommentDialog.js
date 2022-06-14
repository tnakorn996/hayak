import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../component/button/ButtonMain'
import CardMain from '../../component/card/CardMain'
import FieldMain from '../../component/field/FieldMain'

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
                setcommentdialogrender({
                    cardmainid: 'commentimg',
                    cardmainidtwo: 'success',
                    // cardmainidthree: 'feedback',
                    cardmainindex: 0 ,
                })
                setcommentdialogload(false)
            });
    }

    function jj() {
        const empty = []
        if(commentdialogsubtitle === '' && commentdialogtitle === '') {
            if(commentdialogsubtitle === ''){
                empty.push({
                    error: 'Message is required',
                })
            } 
            if(commentdialogtitle === ''){
                empty.push({
                    error: 'Name is required',
                })
            } 
            setcommentdialogrender({
                cardmainid: 'commentimg',
                cardmainidtwo: 'fail',
                cardmainidthree: 'feedback',
                cardmainmessage: empty,
                cardmainindex: 0 ,
            })
        }
        if(commentdialogsubtitle !== '' && commentdialogtitle !== '') {
            kk()
        }
    }

    // setcommentdialogrender(<CardMain     
    //             cardmainid={'commentimg'}
    //             cardmainidtwo={'success'}
    //             cardmainidthree={'feedback'}
    //             cardmainindex={0} 
    //             />)
    //             setcommentdialogload(false)


  return (
    <div>
        <main className="p-[20px] md:p-[50px]">
            <section className="">
                <figure className="">
                    <h1 className="m-h6 font-serif">Responses ({commentdialogrendertwo?.length || 0})</h1>
                </figure>
            </section>
            <section className="">
                <FieldMain fieldmainid={'commentform'} fieldmainindex={0} fieldmainparam={location.pathname?.slice(1, location.pathname.length)} />
            </section>
            <section className="">
                {/* {commentdialogrendertwo?.length >= 0 && (<>
                <CardMain     
                cardmainid={'commentimg'}
                cardmainidtwo={'inform'}
                // cardmainidthree={'feedback'}
                cardmainindex={0} 
                />
                </>)} */}
                <br />
                {commentdialogrendertwo?.map(data => (<>
                    <article className="px-[20px]  shadow ">
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

            </section>
        </main>
    </div>
  )
}

export default CommentDialog