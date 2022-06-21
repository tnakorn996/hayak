import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import CardMain from '../../component/card/CardMain'
import TabMain from '../../component/tab/TabMain'
import ZoomMain from '../../component/zoom/ZoomMain'

import { ContextMain } from '../../context/contextmain'

function FavouriteDialog() {

    const {
        favouritedl, favouritedi,

    } = useContext(ContextMain)

  return (
    <div>
        <main className="">
            {/* <section className="px-[20px] md:px-[50px]">
                <br /><br />
                <h1 className="m-h6 font-serif">Reading List</h1>
            </section> */}
            <section className="px-[20px] md:px-[50px]">
                {/* <br /><br /> */}
                <TabMain tabmainstatic={{tabmainid:'favouritelegend'}} />
                {/* <ZoomMain zoommainid={'favouriteinput'} zoommainslice={10} /> */}
            </section>
        </main>
    </div>
  )
}

export default FavouriteDialog