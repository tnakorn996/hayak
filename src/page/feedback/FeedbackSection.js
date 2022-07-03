import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../component/button/ButtonMain'

// import ChooseMain from '../../component/choose/ChooseMain'
import FieldMain from '../../component/field/FieldMain'
// import HorizonMain from '../../component/post/HorizonMain'
import { feedbackui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'

function FeedbackSection() {
    const {
        tabmainstate,
        sharemainstate,

        postplaceproduct,

    } = useContext(ContextMain)
    const [feedbacksectionrender, setfeedbacksectionrender] = useState()
    const [feedbacksectionrendertwo, setfeedbacksectionrendertwo] = useState()

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

  return (
    <div>
      <main className="px-[20px] md:px-[50px] w-full md:max-w-[55vw] mx-auto">
        <section className="">
          <h1 className="m-h6 font-serif">{feedbacksectionrender?.crummaintitle}</h1>
          <br />
        </section>
        {/* {sharemainstate && (<>
        <section className="p-[20px]  border">
          <HorizonMain key={feedbacksectionrendertwo?.postid} postid={feedbacksectionrendertwo?.postid} posticon={feedbacksectionrendertwo?.posticon} posthero={feedbacksectionrendertwo?.posthero} posttitle={feedbacksectionrendertwo?.posttitle} postsubtitle={feedbacksectionrendertwo?.postsubtitle}  createdat={feedbacksectionrendertwo?._createdAt} param={feedbacksectionrendertwo?.postid} />
        </section>
        </>)} */}
        <section className="">
          <FieldMain fieldmainid={'feedbackform'} fieldmainindex={0} fieldmainparam={feedbacksectionrendertwo?.postid} />
        </section>
        <br />
      </main>
        
    </div>
  )
}

export default FeedbackSection
