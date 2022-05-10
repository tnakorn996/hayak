import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'

import { collectionmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'


function CategoryPicture() {
const {
  setappmainstate,

  categorypicturestate,


} = useContext(ContextMain)
const [categorypicturerender, setcategorypicturerender] = useState()

useEffect(() => {
  if(categorypicturestate){
    const filter = collectionmain.filter(data => data.categorymainid === categorypicturestate.categorypictureid)
    setcategorypicturerender(filter[0].collectionmainref)
  }
}, [categorypicturestate])


  return (
    <div>
        <main className="w-screen min-h-screen ">
            <section className="max-w-[500px] mx-auto min-h-screen grid grid-flow-row">
              {categorypicturerender?.map(data => (<>
              <summary onClick={() => {
                setappmainstate({
                  appmainredirect: 'appmain',

                  collectionmainid: data?.collectionmainid,
                })
              }} className="p-[60px]">
                <h1 className="text-3xl  m-h5 font-serif">{data?.collectionmaintitle}</h1>
                <details className="">
                <h1 className="l-h3">{data?.collectionmainsubtitle}</h1>
                </details>
              </summary>
              </>))}
            </section>
        </main>
    </div>
  )
}

export default CategoryPicture