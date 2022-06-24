import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function JointMain({
  jointmainid,
  jointmainindex,

}) {
  const [jointmainrender, setjointmainrender] = useState()

  const posttemplate = [
    {
      jointmainindex: 0,
      jointmainrender: <main className="">
        <section className="w-screen h-[85vh] md:h-[75vh]  m-section" />
        <section className="flex flex-col md:grid md:grid-cols-3">
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>

        </section>

      </main>,
    }
  ]

  const hometemplate = [
    {
      jointmainindex: 0,
      jointmainrender: <main className="">
        <section className="px-[20px] md:px-[50px]">
          <figcaption className="">
            <br />
            <br />
            <br />
            <br />

            <br />
            <figure className="w-[30%] h-[20px] mx-auto  m-section" />
            <br />
            <figure className="w-[60%] h-[60px] mx-auto  m-section" />
            <br />
            <br />
          </figcaption>
          <figure className=" w-full h-[60vh]  m-section" />
        </section>
      </main>,
    }
  ]

  const jointmain = [
    {
      jointmainid: 'posttemplate',
      jointmainref: posttemplate,
    },
    {
      jointmainid: 'hometemplate',
      jointmainref: hometemplate,
    },
  ]

    useEffect(() => {
      if(jointmainid){
        const filter = jointmain.filter(data => data.jointmainid === jointmainid)
        const filtertwo = filter[0].jointmainref.filter(data => data.jointmainindex === jointmainindex)
        setjointmainrender(filtertwo[0].jointmainrender)
      }
    }, [jointmainid])

  return (
    <div>
        <main className="duration-100">
            <section className="">
              {jointmainrender && jointmainrender}
            </section>
        </main>
    </div>
  )
}

export default JointMain