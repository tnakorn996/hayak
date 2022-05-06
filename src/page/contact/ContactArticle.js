import React from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function ContactArticle() {
  const {
    setappmainstate,

  } = useContext(ContextMain)


  return (
    <div>
        <main className="">
            <section className="md:min-w-[500px]">
                <article className="p-[30px] text-center  border-[30px] border-black">
                    <h1 className="text-3xl  font-serif m-h6">Sign up to the HAYAK Weekly</h1>
                    <br />
                    <h1 className="l-h5">Get the latest and greatest happenings in New Zealand delivered straight to your inbox every Wednesday morning.</h1>
                    <br />
                    <button onClick={() => setappmainstate({
                      appmainid: 'mailform',
                      appmainredirect: 'sheetmain',
                    })} className="m-button">SIGN ME UP</button>
                </article>
            </section>
        </main>
    </div>
  )
}

export default ContactArticle