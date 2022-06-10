import React from 'react'
import { contactui, contactul } from '../../content/contentmantwo'

function ContactMain() {

  return (
    <div>
        <main className="">
            <section className="max-w-[800px] mx-auto">
                {contactul?.slice(0, 1).map(data => (<>
                <figure className="h-[60vh] flex justify-center items-center  overflow-hidden">
                    <img src={data?.breadmainimage} alt="" className="" />
                </figure>
                <figcaption className="">
                    <br /><br />
                    <h1 className="m-h6 font-serif">{data?.breadmainsubtitle}</h1>
                    <br />
                    <h1 className="l-h3">{data?.breadmaindetail}</h1>
                </figcaption>
                <br />
                <figure className="flex flex-row items-center justify-start">
                    {contactui?.map(dat => (<>
                        {dat?.breadmainid === data?.breadmainid && (<>
                            {dat?.crummaindata?.map(da => (<>
                            <a href={da?.crummainaction} className="m-h6">{da?.crummainicon}</a>
                            </>))}
                        </>)}
                    </>))}
                </figure>
                </>))}

            </section>
            <br /><br />
            <section className="max-w-[800px] mx-auto">
                <figcaption className="">
                    <a href={contactul[1]?.breadmainaction} className={` ${contactul[1]?.breadmainstyle}`}>{contactul[1]?.breadmainentitle}</a>
                </figcaption>
            </section>
            <br /><br />
        </main>
    </div>
  )
}

export default ContactMain