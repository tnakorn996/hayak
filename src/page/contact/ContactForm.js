import React from 'react'

import FieldMain from '../../component/field/FieldMain'

function ContactForm() {

  return (
    <div>
        <main className="flex flex-col md:grid md:grid-cols-12">
            <section className="col-span-7 px-[20px] md:px-[50px]">
                <FieldMain fieldmainid={'contactform'} fieldmainindex={0} />
            </section>
            <section className="col-span-5 min-h-screen">
                <figure className="h-full w-full flex justify-center  overflow-hidden bg-gray-200">
                    <img src='https://ouch-cdn2.icons8.com/tC30bP9xnVD02n1Cl65Wko9JILOqo8cgYqRezGNci08/rs:fit:256:972/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTkx/L2M3ZDI3ZWQwLWU3/NzUtNDg0OS1iNDc4/LTM1YTkyNmE4NjQ2/OS5wbmc.png' alt="" className="max-w-[100ch] h-full  grayscale" />
                </figure>
            </section>
        </main>
    </div>
  )
}

export default ContactForm