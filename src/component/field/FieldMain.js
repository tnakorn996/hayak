import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { client } from '../../lib/sanity'
import ButtonMain from '../../layout/button/ButtonMain'
// import ButtonMain from '../../layout/button/ButtonMain'
import CardMain from '../card/CardMain'
import ChooseMain from '../choose/ChooseMain'
import useApp from '../../hook/useApp'

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
    const refseven = useRef('')
    const refeight = useRef('')
    const refnine = useRef('')

    const [fieldmainuuid, setfieldmainuuid] = useState(uuidv4())
    const [fieldmainload, setfieldmainload] = useState(false)

    const [fieldmainrender, setfieldmainrender] = useState()
    const [cardmainstatic, setcardmainstatic] = useState()

    const ll = async () => {
        setfieldmainload(true);
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
                    mailmessage: hh(reffour?.current?.value),
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
                    commentsubtitle: hh(refsix?.current?.value),
                    commentboolean: false,

                    postid: fieldmainparam,
                }
            },
            {
                dataid: 'feedbackform',
                dataindex: 0,
                datadoc: {
                    _id: fieldmainuuid,
                    _type: 'feedback',
                    feedbackid: fieldmainuuid,
                    feedbacktitle: jj(refseven?.current?.value),
                    feedbacksubtitle: hh(refeight?.current?.value),
                    feedbackdetail: refnine?.current?.value,
                }
            },
            
        ]
        const filter = data.filter(data =>  data.dataid === fieldmainid && data.dataindex === fieldmainindex)
        const doc = filter[fieldmainindex].datadoc
            if(Object.values(doc).some(props => props === '') === true){
                empty.push({'error': 'Require all fields'})
            }
            if(Object.values(doc).some(props => props === 'email') === true){
                empty.push({'error': `Hmm… that email doesn't look valid`})
            }
            if(Object.values(doc).some(props => props === 'long') === true){
                empty.push({'error': 'Message is too long (require maximum 500 characters)'})
            }
            if(Object.values(doc).some(props => props === 'short') === true){
                empty.push({'error': `Make sure it's at least 20 characters`})
            }
            if(empty.length === 0){
                kk(doc)
            } 
            console.log('empty', empty)
            if(empty.length !== 0) {
                setfieldmainload(false);
                setcardmainstatic({
                    cardmainid: 'commentimg',
                    cardmainidtwo: 'fail',
                    cardmainidthree: 'feedback',
                    cardmainmessage: empty,
                    cardmainindex: 0 ,
                })
            }
    }

    const kk = async (first = this.props.first) => {
         await client.createOrReplace(first).then(() => {
            setcardmainstatic({
                cardmainid: 'shareimg',
                cardmainidtwo: 'success',
                cardmainidthree: 'feedback',
                cardmainmessage: [{'success': 'Successfully send your ' + first._type + '.'}, {'success': 'This might take up to 3 days for us to review.'}],
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

    function hh(props) {
        if(props && props.length > 500) {
            return 'long';
        }
        if(props && props.length < 20) {
            return 'short';
        } else {
            return props && props;
        }
    }

    const contactform = [
        {
            fieldmainindex: 0,
            fieldmainaction: ll,
            fieldmaintitle: 'Drop us a line!',
            fieldmainentitle: 'Submit form',
            fieldmaindata: [
                {
                    fieldmainsubtitle: 'Name*',
                    fieldmainrender: <input ref={ref} className="w-full  l-input" />,
                },
                {
                    fieldmainsubtitle: 'Email*',
                    fieldmainrender: <input ref={reftwo} type={'email'} className="w-full  l-input" />,
                },
                {
                    fieldmainsubtitle: 'City or Region*',
                    // fieldmainrender: <input ref={refthree} className="w-full  l-input" />,
                    fieldmainrender: <ChooseMain choosemainref={refthree} choosemainstatic={{choosemainid:'contacttextarea'}} />,
                },
                {
                    fieldmainsubtitle: 'Message*',
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

    const feedbackform = [
        {
            fieldmainindex: 0,
            fieldmainaction: ll,
            fieldmaintitle: '',
            fieldmainentitle: 'Submit',
            fieldmaindata: [
                {
                    fieldmainsubtitle: 'Posts, Places or Products*',
                    fieldmainrender: <ChooseMain choosemainref={refnine} choosemainstatic={{choosemainid: 'feedbacktextarea'}} />,
                },
                {
                    fieldmainsubtitle: 'Work email*',
                    fieldmainrender: <input ref={refseven} type={'email'} className="w-full  l-input" placeholder={'johndoe@example.com'} />,
                },
                {
                    fieldmainsubtitle: 'Message*',
                    fieldmainrender: <textarea ref={refeight} rows={3} className="w-full  l-input" placeholder='What are your thoughts?' />,
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
        },
        {
            fieldmainid: 'feedbackform',
            fieldmainref: feedbackform,
        }
    ]

    const [appstatic, setappstatic] = useApp(fieldmain, fieldmainid, fieldmainindex)

    useEffect(() => {
        if(appstatic){
            setfieldmainrender(appstatic)
        }
    }, [appstatic])

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
                        <h1 className="py-[7px]  m-h1">{dat?.fieldmainsubtitle !== '' && dat?.fieldmainsubtitle}</h1>
                        <div className="w-full">
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
                    // cardmainidthree={cardmainstatic?.cardmainidthree} 
                    cardmainmessage={cardmainstatic?.cardmainmessage}
                    />
                    <br />
                    <CardMain     
                    cardmainid={'faqimg'}
                    cardmainidtwo={'inform'}
                    cardmainidthree={'who'}
                    cardmainmessage={[{'inform': 'Have some question for us? You can also find it in our frequent asked questions'}]}
                    cardmainindex={0} 
                    />
                </section>
                <br />
                <section className="">
                    {/* <ButtonMain 
                    onclick={() => {
                        data?.fieldmainaction();
                    }}
                    load={fieldmainload === true ? fieldmainload : fieldmainload}
                    title={data?.fieldmainentitle}
                    /> */}
                    <ButtonMain buttonmainstatic={{buttonmainonclick: () => {data?.fieldmainaction()}, buttonmainload: fieldmainload === true ? fieldmainload : fieldmainload}} >
                        {data?.fieldmainentitle}
                    </ButtonMain>
                </section>
                <br />
            </>))}            
        </main>
    </div>
  )
}

export default FieldMain