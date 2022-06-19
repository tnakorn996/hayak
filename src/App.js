
import React, { useEffect, useContext} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

import './App.css';
import NavMain from './component/nav/NavMain';
import {ContextMain} from './context/contextmain'
import CategoryIndex from './page/catagory/CategoryIndex';
import HomeMain from './page/home/HomeMain';
import PostIndex from './page/post/PostIndex';
import PlanMain from './page/plan/PlanMain';
import AboutMain from './page/about/AboutMain';
import BackdropMain from './component/modal/BackdropMain';
import Overlay from './component/overlay/Overlay';
import PromoMain from './component/promo/PromoMain';
import TopMain from './component/top/TopMain';
import SearchMain from './page/search/SearchMain';
import FeedbackMain from './page/feedback/FeedbackMain';
import FooterMain from './component/footer/FooterMain';
import FaqMain from './page/faq/FaqMain';
import ContactMain from './page/contact/ContactMain';
import ContactForm from './page/contact/ContactForm';
import FabMain from './component/fab/FabMain';

export default function App() {
  const {
    appmainstate, 
    setportmainstate,
    setsnackbarmainstate, snackbarmainstate,
  
  } = useContext(ContextMain)
  const location = useLocation()
  // const param = useParams()

  useEffect(() => {
    setportmainstate({
      portmainid: 'posttfoot',
      portmainidtwo: 'breadmain',
      portmainidthree: 'place',
    })
    setsnackbarmainstate({
      snackbarmainid: 'categoryfooter',
    })
  }, [])

    const app = (appmainstate)  => {
      switch(appmainstate.appmainredirect) {
        default: 
        return dashboard

        // case 'extromain': 
        // return <ExtroMain />

        case 'aboutmain': 
        return <AboutMain />

        case 'planmain': 
        return <PlanMain />

        // case 'contactmain': 
        // return <ContactMain />

        // case 'slidemain': 
        // return <SlideMain />
        
        // case 'sheetmain': 
        // return <SheetMain />

        case 'promomain': 
        return <PromoMain />

        case 'appmain': 
        return dashboard
      }
    }  

    const dashboard = (
    <div className="App">
      <main className="">
        <section className="absolute z-30 top-0 left-0">
        {/* <section className="duration-100"> */}
          <NavMain />
        </section>

        <section className="min-h-screen">
        <TopMain />
        {/* <AnimatePresence exitBeforeEnter > */}
          <Routes key={location.pathname} location={location}>

            <Route path='/' element={<HomeMain />} /> 

            <Route path='/:id' element={<PostIndex />} /> 

            <Route path='/category/:id' element={<CategoryIndex />} /> 

            {/* <Route path='/about/aboutmain' element={<AboutMain />} />  */}

            <Route path='/search/searchmain' element={<SearchMain />} /> 

            <Route path='/feedback/feedbackmain' element={<FeedbackMain />} /> 

            <Route path='/faq/faqmain' element={<FaqMain />} /> 

            <Route path='/contact/contactmain' element={<ContactMain />} /> 
            <Route path='/contact/contactform' element={<ContactForm />} /> 

          </Routes> 
        {/* </AnimatePresence> */}
        </section>

        {/* <section className="">
        <PortMain />
        </section> */}

        <section className="">
          <FooterMain />
        </section>

        <section className="z-30 sticky">
        {appmainstate?.appmainboolean === true && (<>
            <BackdropMain />
        </>)}
        </section>

        <section className="z-30 sticky">
        {appmainstate?.appmainid === 'overlay' && (<>
            <Overlay />
        </>)}
        </section>

      </main>
    </div>

  );

  return <div className="">{app(appmainstate)}</div>
}
