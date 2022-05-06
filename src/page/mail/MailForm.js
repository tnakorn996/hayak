import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function MailForm() {
    const {
        appmainstate,
        sheetmainpage, setsheetmainpage,

    } = useContext(ContextMain)

    const mailform = [
        {
            mailformtitle: "First up, what's your name?"
        },
        {
            mailformtitle: "And your surname?"
        },
        {
            mailformtitle: "Great! Now what's your email, _____?"
        },
        {
            mailformtitle: "Finally, do you accept our Privacy Policy?"
        },
    ]
    
    // useEffect(() => {
    //   if(appmainstate && appmainstate.appmainid === 'mailform'){

    //   }
    // }, [appmainstate])

  return (
    <div>
        <main className="">

            mail
        </main>
    </div>
  )
}

export default MailForm