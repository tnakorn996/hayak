import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine, RiFileCopyLine } from 'react-icons/ri'

import '../modal/backdropmain.css'
import { ContextMain } from '../../context/contextmain'
// import CategorySection from '../../page/catagory/CategorySection'
// import StackMain from '../Stack/StackMain'
// import StateMain from '../state/StateMain'
import OpendeskMain from '../opendesk/OpendeskMain'
import SocialMain from '../../page/social/SocialMain'
// import FeedbackSection from '../../page/feedback/FeedbackSection'
import ShareSection from '../../page/share/ShareSection'
// import PageMain from '../page/PageMain'
// import ZoomMain from '../zoom/ZoomMain'
import TabMain from '../tab/TabMain'

function ModalMain() {
    const {
        appmainstate, setappmainstate,
        setstatemainstate,
        setspreadmainstate,

        rtadi,

    } = useContext(ContextMain)
    // const [modalmainindex, setmodalmainindex] = useState(0)
    const [modalmaintitle, setmodalmaintitle] = useState()
    const [modalmainrender, setmodalmainrender] = useState()
    // const [modalmainrendertwo, setmodalmainrendertwo] = useState()
    const [modalmainaction, setmodalmainaction] = useState()
    const [modalmainentitle, setmodalmainentitle] = useState()


    const sharesection = [
        {
            modalmainindex: 0,
            modalmaintitle: 'Share Post',
            modalmainrender: <ShareSection param={appmainstate.appmainparam} />,
            modalmainaction: '',
        },
        {
            modalmainindex: 1,
            modalmaintitle: 'Share Post',
            modalmainrender: <SocialMain param={appmainstate.appmainparam} />,
            modalmainaction: '',
        },
    ]

    // const categorysection = [
    //     {
    //         modalmainindex: 0,
    //         modalmaintitle: 'Choose Category',
    //         modalmainrender: <CategorySection />,
    //         modalmainaction: () => {
    //             // setcategoryindextrigger()
    //         },
    //     },
    // ]

    // const statesection = [
    //     {
    //         modalmainindex: 0,
    //         modalmaintitle: '',
    //         modalmainrender: <StateMain />,
    //         modalmainaction: <button onClick={() => {
    //                 setappmainstate('')
    //             }} className="m-button">Continue</button>,
    //     }
    // ]

    const rtasection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            // modalmainrender: <PageMain pagemainstatic={{pagemainid: 'rtadataset', pagemainindex: 0}} />,
            // modalmainrender: <ZoomMain zoommainid={'rtainput'} zoommainslice={10} />,
            modalmainrender: <TabMain tabmainstatic={{tabmainid: 'rtalegend'}} />,
            modalmainaction: <button onClick={() => {
                    // setappmainstate('')
                    window.location.href = `mailto:?subject=Discover my TOI favourite list&body=${ll()}`
                }} className="m-button">Share by Email</button>,
        }
    ]

    const postsection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            modalmainrender: <OpendeskMain />,
        }
    ]

    // const feedbacksection = [
    //     {
    //         modalmainindex: 0,
    //         modalmaintitle: '',
    //         modalmainrender: <FeedbackSection />,
    //     }
    // ]

    const modalmain = [
        {
            modalmainid: 'sharesection',
            modalmaindata: sharesection,
        },
        // {
        //     modalmainid: 'categorysection',
        //     modalmaindata: categorysection,
        // },
        // {
        //     modalmainid: 'statesection',
        //     modalmaindata: statesection,
        // },
        {
            modalmainid: 'rtasection',
            modalmaindata: rtasection,
        },
        {
            modalmainid: 'postsection',
            modalmaindata: postsection,
        },
        // {
        //     modalmainid: 'feedbacksection',
        //     modalmaindata: feedbacksection,
        // },
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'modalmain'){
            const filter = modalmain.filter(data => data.modalmainid === appmainstate.appmainid)
            const filtertwo = filter[0].modalmaindata.filter(data => data.modalmainindex === appmainstate.appmainidthree)
            setmodalmaintitle(filtertwo[0].modalmaintitle)
            setmodalmainrender(filtertwo[0].modalmainrender)
            setmodalmainaction(filtertwo[0].modalmainaction)
            setmodalmainentitle(filtertwo[0].modalmainentitle)
        }
      
    }, [appmainstate])

    function ll() {

        return `Dear, %0A%0A I thought you might be interested in the following TOI products:  %0A%0A` 
                + rtadi.map(data => (
                // data.sheetmaindata.length > 0 && data.sheetmaintitle : null
                // + `%0A%0A` +    
                data.sheetmaindata.map(dat => (
                    `%0A%0A %0A%0A` +
                    dat.posttitle 
                    + `%0A%0A Link : https://toifood.co.nz/` + dat.postid 
                    + `%0A%0A`
                    + `,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`
                ))
            )
        )
    }

  return (
    <div>
        <br />
        <motion.main initial={{y: 200}} animate={{ y:0}} exit={{y: 200}} className="w-screen md:max-w-[700px] bg-white border shadow-2xl duration-100">
            <section className="h-[5vh] p-[20px] text-center">
                <h1 className="m-h4 font-serif">{modalmaintitle && modalmaintitle}</h1>
            </section>
            <section className="max-h-[85vh]  overflow-y-auto no-scrollbar">
                <div className="">{modalmainrender}</div>
                <hr />
            </section>
            <section className="h-[10vh] px-[20px] grid grid-flow-col items-center">
                <button onClick={() => {
                    setappmainstate({
                        appmainboolean: false,
                    })
                }} className="l-button">Cancel</button>
                {modalmainaction && modalmainaction}
            </section>
        </motion.main>
    </div>
  )
}

export default ModalMain