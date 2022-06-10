import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { client } from '../../lib/sanity'
import ButtonMain from '../button/ButtonMain'
import CardMain from '../card/CardMain'

function FieldMain({
    fieldmainid,
    fieldmainindex,
    fieldmainparam,

}) {
    const ref = useRef('')
    const reftwo = useRef('')
    const refthree = useRef('')
    const reffour = useRef('')
    const reffive = useRef('')
    const refsix = useRef('')
    const [fieldmainuuid, setfieldmainuuid] = useState(uuidv4())
    const [fieldmainload, setfieldmainload] = useState(false)

    const [fieldmainrender, setfieldmainrender] = useState()
    const [cardmainstatic, setcardmainstatic] = useState()

    const ll = async () => {
        const empty = []
        const data = [
            {
                dataid: 'contactform',
                dataindex: 0,
                datadoc: {
                    _id: fieldmainuuid,
                    _type: 'mail',
                    mailid: fieldmainuuid,
                    mailfullname: ref?.current?.value,
                    mailemail: jj(reftwo?.current?.value),
                    mailcity: refthree?.current?.value,
                    mailmessage: reffour?.current?.value,
                }
            },
            {
                dataid: 'commentform',
                dataindex: 0,
                datadoc: {
                    _id: fieldmainuuid,
                    _type: 'comment',
                    commentid:  fieldmainuuid,
                    commenttitle: reffive?.current?.value,
                    commentsubtitle: refsix?.current?.value,
                    commentboolean: false,

                    postid: fieldmainparam,
                }
            },
        ]
        const filter = data.filter(data =>  data.dataid === fieldmainid && data.dataindex === fieldmainindex)
        const doc = filter[fieldmainindex].datadoc
            if(Object.values(doc).some(props => props === '') === true){
                empty.push({'error': 'Require all fields'})
            }
            if(Object.values(doc).some(props => props === 'email') === true){
                empty.push({'error': 'Email is incorrect'})
            }
            if(empty.length === 0){
                kk(doc)
            } 
            if(empty.length !== 0) {
                setcardmainstatic({
                    cardmainid: 'commentimg',
                    cardmainidtwo: 'fail',
                    cardmainidthree: 'feedback',
                    cardmainmessage: empty,
                    cardmainindex: 0 ,
                })
            }
            setfieldmainload(false);
    }

    const kk = async (first = this.props.first) => {
         await client.createOrReplace(first).then(() => {
            setcardmainstatic({
                cardmainid: 'shareimg',
                cardmainidtwo: 'success',
                cardmainidthree: 'feedback',
                cardmainmessage: [{'success': 'Successfully send your comments.'}, {'success': 'This might take up to 3 days for us to review.'}],
                cardmainindex: 0 ,
            })
            setfieldmainload(false);
        });
    }

    function jj(props){
        let word = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (word.test(props) === false){   
             return 'email';
        } else {
             return props;
        }
    }

    const contactform = [
        {
            fieldmainindex: 0,
            fieldmainaction: ll,
            fieldmaintitle: 'Want to be part of TOI? Drop us a line!',
            fieldmainentitle: 'Submit form',
            fieldmaindata: [
                {
                    fieldmainsubtitle: 'Name',
                    fieldmainrender: <input ref={ref} className="w-full  l-input" />,
                },
                {
                    fieldmainsubtitle: 'Email',
                    fieldmainrender: <input ref={reftwo} type={'email'} className="w-full  l-input" />,
                },
                {
                    fieldmainsubtitle: 'City',
                    fieldmainrender: <input ref={refthree} className="w-full  l-input" />,
                },
                {
                    fieldmainsubtitle: 'Message',
                    fieldmainrender: <textarea ref={reffour} rows={3} className="w-full  l-input" />,
                },
            ],
        },
    ]

    const commentform = [
        {
            fieldmainindex: 0,
            fieldmainaction: ll,
            fieldmaintitle: '',
            fieldmainentitle: 'Post comments',
            fieldmaindata: [
                {
                    fieldmainsubtitle: '',
                    fieldmainrender: <input ref={reffive} className="w-full  l-input" placeholder='Enter your name' />,
                },
                {
                    fieldmainsubtitle: '',
                    fieldmainrender: <textarea ref={refsix} rows={3} className="w-full  l-input" placeholder='What are your thoughts?' />,
                },
            ]

        }
    ]

    const fieldmain = [
        {
            fieldmainid: 'contactform',
            fieldmainref: contactform,
        },
        {
            fieldmainid: 'commentform',
            fieldmainref: commentform,
        }
    ]

    useEffect(() => {
      if(fieldmainid){
          const filter = fieldmain.filter(data => data.fieldmainid === fieldmainid)
          const filtertwo = filter[0].fieldmainref.filter(data => data.fieldmainindex === fieldmainindex)
          setfieldmainrender(filtertwo)
        }
    }, [fieldmainid])

  return (
    <div>
        <main className="">
            {fieldmainrender?.map(data => (<>
                <section className="">
                    {data?.fieldmaintitle !== '' && (<>
                    <figure className="">
                    <br /><br />
                    <h1 className="m-h6 font-serif">{data?.fieldmaintitle}</h1>
                    <br />
                    </figure>
                    </>)}
                    {data?.fieldmaindata?.map(dat => (<>
                    <figcaption className="">
                        <br />
                        <h1 className="l-h2">{dat?.fieldmainsubtitle !== '' && dat?.fieldmainsubtitle}</h1>
                        <div className="w-full  border-b">
                        {dat?.fieldmainrender}
                        </div>
                    </figcaption>
                    </>))}
                </section>
                <br />
                <section className="">
                    <CardMain 
                    cardmainid={cardmainstatic?.cardmainid} 
                    cardmainidtwo={cardmainstatic?.cardmainidtwo} 
                    cardmainindex={cardmainstatic?.cardmainindex} 
                    cardmainidthree={cardmainstatic?.cardmainidthree} 
                    cardmainmessage={cardmainstatic?.cardmainmessage}
                    />
                </section>
                <br />
                <section className="">
                    <ButtonMain 
                    onclick={() => {
                        data?.fieldmainaction();
                        setfieldmainload(true);
                    }}
                    load={fieldmainload === true ? fieldmainload : fieldmainload}
                    title={data?.fieldmainentitle}
                    />
                </section>
                <br /><br />
            </>))}            
        </main>
    </div>
  )
}

export default FieldMain