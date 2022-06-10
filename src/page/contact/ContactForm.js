import React from 'react'

import FieldMain from '../../component/field/FieldMain'

function ContactForm() {

  return (
    <div>
        <main className="flex flex-col md:grid md:grid-cols-12">
            <section className="col-span-7 px-[20px] md:px-[50px]">
                <FieldMain fieldmainid={'contactform'} fieldmainindex={0} />
            </section>
            <section className="col-span-5">
                <figure className="h-full  overflow-hidden">
                    <img src='https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' alt="" className="max-h-[100ch] min-w-full" />
                </figure>
            </section>
        </main>
       
    </div>
  )
}

export default ContactForm