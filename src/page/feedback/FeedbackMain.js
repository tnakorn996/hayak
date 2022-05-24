import React from 'react'
import { useContext } from 'react'

import ZoomMain from '../../component/zoom/ZoomMain'
import { ContextMain } from '../../context/contextmain'

function FeedbackMain() {
  const {

    postupdatedat, placeupdatedat, productupdatedat
  } = useContext(ContextMain)

  return (
    <div>
        <main className="">
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