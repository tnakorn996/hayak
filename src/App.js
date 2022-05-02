
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

// import HomeMain from './home/HomeMain'
import './App.css';
import LoadMain from './component/load/LoadMain';
import NavMain from './component/nav/NavMain';
import {ContextMain} from './context/contextmain'
import CategoryIndex from './page/catagory/CategoryIndex';
import HomeMain from './page/home/HomeMain';
import PostIndex from './page/post/PostIndex';
import SearchIndex from './page/search/SearchIndex';
import SearchMain from './page/search/SearchMain';
import PlanMain from './page/plan/PlanMain';
import OntroMain from './component/ontro.js/OntroMain';

export default function App() {
  const {
    appmainstate,
    loadmainstate,
  
  } = useContext(ContextMain)
  const location = useLocation()

    const ll = (appmainstate)  => {
      switch(appmainstate) {
        default: 
        return appmain

        case 'ontromain': 
        return <OntroMain />

        case 'planmain': 
        return <PlanMain />

        case 'appmain': 
        return appmain
      }
    }  

    const appmain = (
    <div className="App">
      <main className="">
        <section className="sticky top-0 left-0 z-20">
          <NavMain />
        </section>

        <section className="">
        <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          {/* <Route path='/' element={<HomeMain />} />  */}

          <Route path='/' element={<HomeMain />} /> 

          <Route path='/:id' element={<PostIndex />} /> 

          <Route path='/search/searchmain' element={<SearchMain />} /> 
          <Route path='/search/searchindex' element={<SearchIndex />} /> 

          <Route path='/category/:id' element={<CategoryIndex />} /> 

        </Routes> 
        </AnimatePresence>
        </section>

      </main>
    </div>

  );

  return <div className="">{ll(appmainstate)}</div>
}
