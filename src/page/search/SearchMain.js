import React from 'react'
import { useContext } from 'react'
import { RiFilter3Fill } from 'react-icons/ri'
import ChipMain from '../../component/chip/ChipMain'

import ZoomMain from '../../component/zoom/ZoomMain'
import { ContextMain } from '../../context/contextmain'

function SearchMain() {
  const {
    settabmainstate, setappmainstate,

    postupdatedat, placeupdatedat, productupdatedat,

  } = useContext(ContextMain)


  return (
    <div>
        <main className="">
          <section className="p-[20px] md:p-[50px] flex justify-between items-center">
            <ChipMain />
                
              <button onClick={() => {
                      settabmainstate({
                          tabmainid: 'searchoption',
                          // tabmainlocation: location.pathname,
                          // tabmainparam: param.id,
                          // tabmainimage: categoryindeximage,
                          // tabmainaction: categoryindexaction,
                      })
                      setappmainstate({
                          appmainid: 'searchoption',
                          appmainidtwo: 'opendeskmain',
                          // tabmainlocation: location.pathname,
                          // appmainparam: param.id,
                          appmainboolean: true,
                      })
              }} className="flex flex-row items-center gap-2  l-button"><RiFilter3Fill /> Filter</button>

          </section>
            <section className="">
              {postupdatedat && placeupdatedat && productupdatedat && (<>
                <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
              </>)}
            </section>
        </main>
    </div>
  )
}

export default SearchMain