
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

// import HomeMain from './home/HomeMain'
import './App.css';
import NavMain from './component/nav/NavMain';
import {ContextMain} from './context/contextmain'
import CategoryIndex from './page/catagory/CategoryIndex';
import HomeMain from './page/home/HomeMain';
import PostIndex from './page/post/PostIndex';
import PlanMain from './page/plan/PlanMain';
import OntroMain from './component/ontro.js/OntroMain';
import AboutMain from './page/about/AboutMain';
import ExtroMain from './component/extro/ExtroMain';
import ContactMain from './page/contact/ContactMain';
import BackdropMain from './component/modal/BackdropMain';
import SlideMain from './component/slide/SlideMain';
import Overlay from './component/overlay/Overlay';
import SheetMain from './component/sheet/SheetMain';
import PromoMain from './component/promo/PromoMain';
import TopMain from './component/top/TopMain';
// import PreviewMain from './component/preview/PreviewMain';

export default function App() {
  const {
    appmainstate, setappmainstate,

    setextromainstate,
  
  } = useContext(ContextMain)
  const location = useLocation()

    const app = (appmainstate)  => {
      switch(appmainstate.appmainredirect) {
        default: 
        return dashboard

        case 'ontromain': 
        return <OntroMain />

        case 'extromain': 
        return <ExtroMain />

        case 'aboutmain': 
        return <AboutMain />

        case 'planmain': 
        return <PlanMain />

        case 'contactmain': 
        return <ContactMain />

        case 'slidemain': 
        return <SlideMain />
        
        case 'sheetmain': 
        return <SheetMain />

        case 'promomain': 
        return <PromoMain />

        case 'appmain': 
        return dashboard
      }
    }  

    const dashboard = (
    <div className="App">
      <main className="">
        <section className="">
          <NavMain />
          
        </section>

        <section className="">
        <AnimatePresence>
          <TopMain />
        <Routes key={location.pathname} location={location}>
          {/* <Route path='/' element={<HomeMain />} />  */}

          <Route path='/' element={<HomeMain />} /> 

          <Route path='/:id' element={<PostIndex />} /> 

          <Route path='/category/:id' element={<CategoryIndex />} /> 

          <Route path='/about/aboutmain' element={<AboutMain />} /> 

        </Routes> 
        </AnimatePresence>
        </section>

        {appmainstate?.appmainboolean && (<>
        <BackdropMain />
        </>)}

        {appmainstate?.appmainid === 'overlay' && (<>
        <Overlay />
        </>)}

      </main>
    </div>

  );

  return <div className="">{app(appmainstate)}</div>
}
