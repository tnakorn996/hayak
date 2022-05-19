import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiFeedbackFill, RiShareFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'

function OpendeskMain() {
    const {
        setappmainstate, appmainstate,
        opendeskmainstate, setopendeskmainstate,
        tabmainstate, settabmainstate,
        setbreadmainstate,
        
    } = useContext(ContextMain)
    const [opendeskmainindex, setopendeskmainindex] = useState(0)
    const [opendeskmaintitle, setopendeskmaintitle] = useState()
    const [opendeskmainimage, setopendeskmainimage] = useState()
    const [opendeskmainparam, setopendeskmainparam] = useState()

    const [opendeskmainrender, setopendeskmainrender] = useState()
    const [opendeskmainrendertwo, setopendeskmainrendertwo] = useState()

    const postselect = [
        {
            tabmainid: 'share',
            tabmaintitle: 'Share',
            tabmainicon: <RiShareFill />,
        },
        {
            tabmainid: 'feedback',
            tabmaintitle: 'Feedback',
            tabmainicon: <RiFeedbackFill />,
        },
    ]

    const postlink = [
        {
            blemainid: 'url',
            blemaintitle: 'Scan with QR code',
            blemainaction:  () => {
                setappmainstate({
                    appmainid: 'sharesection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    appmainparam: opendeskmainparam,
                    appmainboolean: true,
                })
            },

            tabmainid: 'share',
            spreadmainid: 'new',
        },


        {
            blemainid: 'ask',
            blemaintitle: 'Ask question',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'edit',
            blemaintitle: 'Suggest an edit',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'report',
            blemaintitle: 'Report an issue',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        }
    ]

    const categoryselect = [
        {
            tabmainid: appmainstate?.appmainparam,
            tabmaintitle: 'category',
        },
        {
            tabmainid: 'genre',
            tabmaintitle: 'Genres',
        },
    ]

    const categorylink = [
         {
            blemainid: 'recipe',
            blemaintitle: 'Recipes',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'recipe',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'review',
            blemaintitle: 'Reviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'review',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'interview',
            blemaintitle: 'Interviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'interview',
                })
            },

            tabmainid: 'post',

        },

        {
            blemainid: 'meat',
            blemaintitle: 'Meat',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'meat',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'coffee',
            blemaintitle: 'Coffee',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'coffee',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'alcohol',
            blemaintitle: 'Alcohol',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'alcohol',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'dairy',
            blemaintitle: 'Dairy',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'dairy',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'etc',
            blemaintitle: 'Veggies, fruit, etc',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'etc',
                })
            },

            tabmainid: 'product',

        },
        
        {
            blemainid: 'retail',
            blemaintitle: 'Retailers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'retail',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'manufacturer',
            blemaintitle: 'Manufacturers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'manufacturer',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'restaurant',
            blemaintitle: "Chefs / Restaurants",
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'restaurant',
                })
            },
            
            tabmainid: 'place',
        },

        {
            blemainid: 'excite',
            blemaintitle: "Exciting",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'recommend',
            blemaintitle: "Recommended",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
    ]

    ////////////////////////////////


    const postoption = [
        {
            opendeskmainindex: 0,
            opendeskmainrender: postselect
        },
        {
            opendeskmainindex: 1,
            opendeskmainrender: postlink.filter(data => data.tabmainid === tabmainstate?.tabmainidtwo),
        },
    ]

    const categoryoption = [
        {
            opendeskmainindex: 0,
            opendeskmainrender: categoryselect
        },
        {
            opendeskmainindex: 1,
            opendeskmainrender: categorylink.filter(data => data.tabmainid === tabmainstate?.tabmainidtwo),
        },
    ]

    const opendeskmain = [
        {
            opendeskmainid: 'postoption',
            opendeskmainref: postoption
        },
        {
            opendeskmainid: 'categoryoption',
            opendeskmainref: categoryoption,
        },
    ]

    useEffect(() => {
      if(tabmainstate){
          setopendeskmainimage(tabmainstate?.tabmainimage)
          setopendeskmaintitle(tabmainstate?.tabmaintitle)
          setopendeskmainparam(tabmainstate?.tabmainparam)
      }
    }, [])

    useEffect(() => {
        if(tabmainstate){
            const filter = opendeskmain.filter(data => data.opendeskmainid === appmainstate.appmainid)
            const filtertwo = filter[0].opendeskmainref.filter(data => data.opendeskmainindex === opendeskmainindex)
            if(opendeskmainindex === 0) {
                setopendeskmainrender(filtertwo[0].opendeskmainrender)
            } else {
                setopendeskmainrendertwo(filtertwo[0].opendeskmainrender)
            }
        }
    }, [tabmainstate])

    // useEffect(() => {
    //   if(opendeskmainrendertwo){
    //       opendeskmainrendertwo.forEach(data => {
    //           if(data.spreadmainid === spreadmain.spreadmainid)
    //       })
    //   }
    // }, [opendeskmainrendertwo])
    

  return (
    <div>
        <br />
        <motion.main initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="w-screen md:max-w-[500px] p-[20px]  bg-white border border-black overflow-hidden">
            <section className="">
                <HorizonMain
                posthero={opendeskmainimage} posttitle={opendeskmaintitle} postsubtitle={`https://hayak.vercel.app/${opendeskmainparam}`} />
                <br />
                {opendeskmainindex !== 0 && (<>
                <div className="grid grid-cols-11 items-center text-center">
                    <button onClick={() => {
                        settabmainstate({
                            tabmainid: tabmainstate?.tabmainid,
                            tabmainidtwo: null,
                        })
                        setopendeskmainindex(0)
                    }} className="col-span-2  l-button border">←</button>
                    <h1 className="col-span-9  uppercase l-button border">{opendeskmainrendertwo && opendeskmainrendertwo[0]?.tabmainid}</h1>
                </div>
            </>)}
            <br />
            </section>

            <section className="relative h-[40vh]">

                {opendeskmainrender?.map(data => (<>
                <div className="">
                    <article onClick={() => {
                        settabmainstate({
                            tabmainid: tabmainstate?.tabmainid,
                            tabmainidtwo: data?.tabmainid,
                        })
                        setopendeskmainindex(1)
                    }} className="grid grid-cols-12 items-center p-[20px]">
                        <h1 className="m-h3">{data?.tabmainicon}</h1>
                        <h1 className="col-span-10  first-letter:uppercase m-h2">{data?.tabmaintitle || data?.blemaintitle}</h1>
                        <h1 className="col-span-1  m-h2">→</h1>
                    </article>
                    <hr />
                </div>
                </>))}

                {opendeskmainindex !== 0 && (<>
                    <motion.div initial={{x: 200}} animate={{ x:0}} exit={{x: 200}}  className="w-full h-full absolute z-30 top-3 left-0  bg-white">
                    {opendeskmainrendertwo?.map(data => (<>

                    <article onClick={data?.blemainaction} className="grid grid-cols-12 items-center p-[20px]">
                        <h1 className="m-h3">{data?.tabmainicon}</h1>
                        <h1 className="col-span-10  first-letter:uppercase m-h2">{data?.tabmaintitle || data?.blemaintitle}</h1>
                    </article>
                    <hr />
                    </>))}
                    </motion.div>
                </>)}

            </section>
            <br />
            <section className="">
                <button onClick={() => {
                    setappmainstate('')
                }} className=" w-full  m-button">Cancel</button>
            </section>

            {/* <section className="">
                {tabmainrendertwo?.map(data => (<>
                <motion.article  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} onClick={data?.blemainaction} className="grid grid-cols-12 items-center p-[20px]">
                    <h1 className="col-span-11  m-h2">{data?.blemaintitle}</h1>
                </motion.article>
                <hr />
                </>))}
            </section> */}
        </motion.main>
    </div>
  )
}

export default OpendeskMain