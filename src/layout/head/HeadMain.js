import React from 'react'

export default function HeadMain(headmain) {
  return (
    <div>
        <main className="">
            <section className={` ${headmain?.headmainstyle}`}>
                {headmain.children}
            </section>
        </main>
    </div>
  )
}
