
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes } from 'react-router-dom';

// import HomeMain from './home/HomeMain'
import './App.css';
import NavMain from './component/nav/NavMain';
import {ContextMain} from './context/contextmain'
import PostIndex from './page/post/PostIndex';

export default function App() {
  const {appmainstate} = useContext(ContextMain)

    const ll = (appmainstate)  => {
      switch(appmainstate) {
        default: 
        return appmain

        // case 'signupmain': 
        // return <SignupMain />

        case 'appmain': 
        return appmain
      }
    }  

    const appmain = (
    <div className="App">
      <main className="">
      <section className="">
        <NavMain />
      </section>
      
      <section className="">
      <Routes>
        {/* <Route path='/' element={<HomeMain />} />  */}

        <Route path='/:id' element={<PostIndex />} /> 
      </Routes> 
      </section>

      </main>
    </div>

  );

  return <div className="">{ll(appmainstate)}</div>
}
