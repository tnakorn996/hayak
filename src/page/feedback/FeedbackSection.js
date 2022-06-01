import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../component/button/ButtonMain'

import CardMain from '../../component/card/CardMain'
import HorizonMain from '../../component/post/HorizonMain'
import { feedbackui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function FeedbackSection() {
    const {
        tabmainstate,
        sharemainstate,

        postplaceproduct,

    } = useContext(ContextMain)
    const [feedbacksectiontitle, setfeedbacksectiontitle] = useState()
    const [feedbacksectionsubtitle, setfeedbacksectionsubtitle] = useState('')
    const [feedbacksectionload, setfeedbacksectionload] = useState(false)

    const [feedbacksectionrender, setfeedbacksectionrender] = useState()
    const [feedbacksectionrendertwo, setfeedbacksectionrendertwo] = useState()
    const [feedbacksectionrenderthree, setfeedbacksectionrenderthree] = useState()

    useEffect(() => {
      if(tabmainstate){
        const filter = feedbackui.filter(data => data.crummainid === tabmainstate.tabmainidtwo)
        setfeedbacksectiontitle(filter[0].crummaintitle)
        setfeedbacksectionrender(filter)

      }
    }, [tabmainstate])

    useEffect(() => {
      if(sharemainstate) {
        const filter = postplaceproduct.filter(data => data.postid === sharemainstate.sharemainparam)
        setfeedbacksectionrendertwo(filter)
      }
    }, [sharemainstate])

    const ll = async () => {
          setfeedbacksectionload(true)
            const doc = {
                _id: uuidv4(),
                _type: 'feedback',
                feedbackid:  uuidv4(),
                feedbacktitle: feedbacksectiontitle,
                feedbacksubtitle: feedbacksectionsubtitle,

                postid: sharemainstate?.sharemainparam,
            }
            await client.createOrReplace(doc).then(() => {
                setfeedbacksectionrenderthree({
                  cardmainid:'commentimg',
                  cardmainidtwo:'success',
                  // cardmainidthree:'feedback',
                  cardmainindex:0,
                })
                setfeedbacksectionload(false)
            });
    }

    function kk() {
        const empty = []
        if(feedbacksectionsubtitle === ''){
          empty.push({
            error: 'Message is required',
          })
          setfeedbacksectionrenderthree({
                  cardmainid:'commentimg',
                  cardmainidtwo:'fail',
                  // cardmainidthree:'feedback',
                  cardmainmessage:empty,
                  cardmainindex:0,
          })
        } 
        else {
          ll()
        }
    }

    // <CardMain     
    //             cardmainid={'commentimg'}
    //             cardmainidtwo={'success'}
    //             // cardmainidthree={'feedback'}
    //             cardmainindex={0} 
    //             />

    // setfeedbacksectionrenderthree(<CardMain     
    //             cardmainid={'commentimg'}
    //             cardmainidtwo={'fail'}
    //             // cardmainidthree={'feedback'}
    //             cardmainindex={0} 
    //             />)

  return (
    <div>
        <main className="max-w-[1200px] flex flex-col  gap-5">
                {feedbacksectionrender?.map(data => (<>
                <div className="col-span-7">
                    <section className="">
                        <h1 className="m-h6 font-serif">Send feedback</h1>
                        <br />
                        <input disabled={true} className="w-full  l-input  bg-gray-100 border-black cursor-not-allowed" placeholder={data?.crummaintitle} />
                        <textarea onChange={p => setfeedbacksectionsubtitle(p.target.value)} rows="7" className="w-full  l-input border-black" placeholder={data?.crummainsubtitle} />
                    </section>
                </div>
                <div className="col-span-5">
                    <section className="">
                      {feedbacksectionrendertwo?.map(data => (<>
                      <HorizonMain key={data?.postid} postid={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle}  createdat={data?._createdAt} param={data?.postid} />
                      </>))}
                    </section>
                    <section className="">
                      <CardMain     
                      cardmainid={'termimg'}
                      cardmainidtwo={'inform'}
                      cardmainidthree={'use'}
                      cardmainindex={0} 
                      />
                      <CardMain     
                      cardmainid={feedbacksectionrenderthree?.cardmainid}
                      cardmainidtwo={feedbacksectionrenderthree?.cardmainidtwo}
                      cardmainidthree={feedbacksectionrenderthree?.cardmainidthree}
                      cardmainmessage={feedbacksectionrenderthree?.cardmainmessage}
                      cardmainindex={feedbacksectionrenderthree?.cardmainindex} 
                      />
                      {/* {feedbacksectionrenderthree && feedbacksectionrenderthree} */}
                    </section>
                    <br />
                    <section className="">
                      <ButtonMain onclick={() => {
                          kk()
                      }} title={'Submit'} load={feedbacksectionload}  />
                    </section>
                </div>
                </>))}
        </main>
    </div>
  )
}

export default FeedbackSection