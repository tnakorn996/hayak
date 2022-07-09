
import React, { useEffect, useContext, useState} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

import './App.css';
import {ContextMain} from './context/contextmain'
import NavMain from './component/nav/NavMain';
import CategoryIndex from './page/catagory/CategoryIndex';
import HomeMain from './page/home/HomeMain';
import PostIndex from './page/post/PostIndex';
import BackdropMain from './component/modal/BackdropMain';
import Overlay from './component/overlay/Overlay';
import TopMain from './component/top/TopMain';
// import SearchMain from './page/search/SearchMain';
import FeedbackMain from './page/feedback/FeedbackMain';
import FooterMain from './component/footer/FooterMain';
import FaqMain from './page/faq/FaqMain';
import ContactMain from './page/contact/ContactMain';
import ContactForm from './page/contact/ContactForm';
import FabMain from './component/fab/FabMain';


export default function App() {
  const {
    appmainstate, 
    
  } = useContext(ContextMain)
  const location = useLocation()
  // const param = useParams()

  const [appstyle, setappstyle] = useState(0)

  // useEffect(() => {
  //   if(appmainstate){
  //     if(appmainstate.appmainidtwo === 'opendeskmain'){
  //       setappstyle(-50)
  //     }
  //     if(appmainstate.appmainidtwo === 'sideboardmain'){
  //       setappstyle(50)
  //     }
  //   } else {
  //     setappstyle(0)
  //   }
  // }, [appmainstate])

    const app = (appmainstate)  => {
      switch(appmainstate.appmainredirect) {
        default: 
        return dashboard

        case 'appmain': 
        return dashboard
      }
    }  

    const dashboard = (
    <div className="App">
      <main className="">

        <div className="absolute z-30 top-0 left-0">
          <NavMain />
        </div>
        
        <section className="min-h-screen">
        <TopMain />
        {/* <AnimatePresence exitBeforeEnter > */}
          <Routes key={location.pathname} location={location}>

            <Route path='/' element={<HomeMain />} /> 

            <Route path='/:id' element={<PostIndex />} /> 

            <Route path='/category/:id' element={<CategoryIndex />} /> 

            {/* <Route path='/search/searchmain' element={<SearchMain />} />  */}

            <Route path='/feedback/feedbackmain' element={<FeedbackMain />} /> 

            <Route path='/faq/faqmain' element={<FaqMain />} /> 

            <Route path='/contact/contactmain' element={<ContactMain />} /> 
            <Route path='/contact/contactform' element={<ContactForm />} /> 

          </Routes> 
        {/* </AnimatePresence> */}
        </section>

          <div className="">
            <FooterMain />
          </div>

          <div className="z-30 sticky">
          {appmainstate?.appmainboolean === true && (<>
              <BackdropMain />
          </>)}
          </div>

          <div className="z-30 sticky">
          {appmainstate?.appmainid === 'overlay' && (<>
              <Overlay />
          </>)}
          </div>

      </main>
    </div>

  );

  return <div>
    {app(appmainstate)}
  </div>
}
