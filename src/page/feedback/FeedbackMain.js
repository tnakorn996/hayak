import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import ZoomMain from '../../component/zoom/ZoomMain'
import { ContextMain } from '../../context/contextmain'

function FeedbackMain() {
  const {
    setlandmainstate,

    postupdatedat, placeupdatedat, productupdatedat
  } = useContext(ContextMain)

  useEffect(() => {
    setlandmainstate({
      landmainid: 'feedbacktbody',
      landmainidtwo: 'feedback',
      landmainindex: 0,
    })
  }, [])

  return (
    <div>
        <main className="max-w-[900px] mx-auto">
          <section className="absolute w-full">
          <br /><br /><br /><br />
          </section>
          <br /><br /><br /><br /><br /><br />
            <section className="">
              {(postupdatedat && placeupdatedat && productupdatedat) && (<>
                <ZoomMain zoommainid={'feedbackinput'} zoommainslice={10} />
              </>)} 
            </section>
        </main>
    </div>
  )
}

export default FeedbackMain