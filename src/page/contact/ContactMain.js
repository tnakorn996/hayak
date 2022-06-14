import React from 'react'
import { contactui, contactul } from '../../content/contentmantwo'

function ContactMain() {

  return (
    <div>
        <main className="flex flex-col-reverse md:grid md:grid-cols-12">
            {contactul?.slice(0, 1).map(data => (<>
            <section className="md:col-span-7 flex flex-col md:grid md:grid-cols-2">
                {contactui?.map(dat => (<>
                    {dat?.crummaindata?.map(da => (<>
                        <article className="">
                            <figure className="h-[70vh] flex justify-center items-center overflow-hidden scale-75">
                                <img src={da?.crummainimage} alt="" className="h-full max-w-[100ch]" />
                            </figure>
                            <figcaption className="px-[50px] h-[10vh]">
                                <h1 className="m-h3">{da?.crummainsubtitle}</h1>
                                <h1 className="m-h3">{da?.crummaindetail}</h1>
                            </figcaption>
                            <figcaption className="px-[50px] h-[10vh] flex flex-row justify-start gap-1">
                               {dat?.crummaindatatwo?.map(d => (<>
                                    {da?.crummainkey === d?.crummainkey && <a href={d?.crummainaction} className='m-h6' >{d?.crummainicon}</a>}
                                </>))}
                            </figcaption>
                        </article>
                    </>))}
                </>))}
            </section>
            <section className="md:col-span-5 p-[50px]">
                <figcaption className="">
                    <h1 className="m-h6 font-serif">{data?.breadmainsubtitle}</h1>
                    <br />
                    <h1 className="l-h2">{data?.breadmaindetail}</h1>
                    <br />
                </figcaption>
                <figcaption className="">
                    <br /><br />
                    <a href={contactul[1]?.breadmainaction} className={` font-serif ${contactul[1]?.breadmainstyle}`}>{contactul[1]?.breadmainentitle}</a>
                </figcaption>
            </section>
            </>))}

        </main>
    </div>
  )
}

export default ContactMain