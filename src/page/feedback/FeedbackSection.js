import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../component/button/ButtonMain'

import CardMain from '../../component/card/CardMain'
import FieldMain from '../../component/field/FieldMain'
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
    const [feedbacksectionrender, setfeedbacksectionrender] = useState()
    const [feedbacksectionrendertwo, setfeedbacksectionrendertwo] = useState()

    // const [feedbacksectiontitle, setfeedbacksectiontitle] = useState()
    // const [feedbacksectionsubtitle, setfeedbacksectionsubtitle] = useState('')
    // const [feedbacksectionload, setfeedbacksectionload] = useState(false)

    // const [feedbacksectionrender, setfeedbacksectionrender] = useState()
    // const [feedbacksectionrendertwo, setfeedbacksectionrendertwo] = useState()
    // const [feedbacksectionrenderthree, setfeedbacksectionrenderthree] = useState()

    useEffect(() => {
      if(tabmainstate){
        const filter = feedbackui.filter(data => data.crummainid === tabmainstate.tabmainidtwo)
        setfeedbacksectionrender(filter[0])
      }
    }, [tabmainstate])

    useEffect(() => {
      if(sharemainstate) {
        const filter = postplaceproduct.filter(data => data.postid === sharemainstate.sharemainparam)
        setfeedbacksectionrendertwo(filter[0])
      }
    }, [sharemainstate])

    // useEffect(() => {
    //   if(tabmainstate){
    //     const filter = feedbackui.filter(data => data.crummainid === tabmainstate.tabmainidtwo)
    //     setfeedbacksectiontitle(filter[0].crummaintitle)
    //     setfeedbacksectionrender(filter)
    //   }
    // }, [tabmainstate])

    // useEffect(() => {
    //   if(sharemainstate) {
    //     const filter = postplaceproduct.filter(data => data.postid === sharemainstate.sharemainparam)
    //     setfeedbacksectionrendertwo(filter)
    //   }
    // }, [sharemainstate])

    // const ll = async () => {
    //       setfeedbacksectionload(true)
    //         const doc = {
    //             _id: uuidv4(),
    //             _type: 'feedback',
    //             feedbackid:  uuidv4(),
    //             feedbacktitle: feedbacksectiontitle,
    //             feedbacksubtitle: feedbacksectionsubtitle,

    //             postid: sharemainstate?.sharemainparam,
    //         }
    //         await client.createOrReplace(doc).then(() => {
    //             setfeedbacksectionrenderthree({
    //               cardmainid:'commentimg',
    //               cardmainidtwo:'success',
    //               // cardmainidthree:'feedback',
    //               cardmainindex:0,
    //             })
    //             setfeedbacksectionload(false)
    //         });
    // }

    // function kk() {
    //     const empty = []
    //     if(feedbacksectionsubtitle === ''){
    //       empty.push({
    //         error: 'Message is required',
    //       })
    //       setfeedbacksectionrenderthree({
    //               cardmainid:'commentimg',
    //               cardmainidtwo:'fail',
    //               // cardmainidthree:'feedback',
    //               cardmainmessage:empty,
    //               cardmainindex:0,
    //       })
    //     } 
    //     else {
    //       ll()
    //     }
    // }

  return (
    <div>
      <main className="">
        <section className="">
          <h1 className="m-h6 font-serif">{feedbacksectionrender?.crummaintitle}</h1>
          <br />
        </section>
        {sharemainstate && (<>
        <section className="p-[20px]  border">
          <HorizonMain key={feedbacksectionrendertwo?.postid} postid={feedbacksectionrendertwo?.postid} posthero={feedbacksectionrendertwo?.posthero} posttitle={feedbacksectionrendertwo?.posttitle} postsubtitle={feedbacksectionrendertwo?.postsubtitle}  createdat={feedbacksectionrendertwo?._createdAt} param={feedbacksectionrendertwo?.postid} />
        </section>
        </>)}
        <section className="">
          <FieldMain fieldmainid={'feedbackform'} fieldmainindex={0} fieldmainparam={feedbacksectionrendertwo?.postid} />
        </section>
      </main>
        
    </div>
  )
}

export default FeedbackSection
