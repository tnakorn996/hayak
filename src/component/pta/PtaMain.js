import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { ContextMain } from '../../context/contextmain';

function PtaMain() {
    const {
        parsepost,
        setfavouritemainstate, favouritemainstate,
        ptamainstate, setptamainstate,
        
    } = useContext(ContextMain)
    const [ptamainrender, setptamainrender] = useState()

    const favouriteiframe = [
        {
            ptamainindex: 0,
            ptamainicon: <RiHeartFill />,
            ptamainaction: () => {
                const ref = parsepost.favouritemaindata || favouritemainstate.favouritemaindata
                ref.push(ptamainstate.ptamaindata)
                window.localStorage.setItem("post", JSON.stringify({
                    favouritemaindata: ref,
                }));
                setptamainstate({
                    ptamainid: 'favouriteiframe',
                    ptamainindex: 1,
                    ptamaindata: ptamainstate.ptamaindata,
                })

                // const ref = favouritemainstate.favouritemaindata
                // ref.push(ptamainstate.ptamaindata)
                // setfavouritemainstate({
                //     favouritemaindata: ref,
                // })
            },
        },
        {
            ptamainindex: 1,
            ptamainicon: <RiHeartFill className='text-gray-900' />,
            ptamainaction: () => {
                const filter = parsepost.favouritemaindata.filter(data => data.postid !== ptamainstate.ptamaindata.postid)
                window.localStorage.clear()
                window.localStorage.setItem("post", JSON.stringify({
                    favouritemaindata: filter,
                }));
                setptamainstate({
                    ptamainid: 'favouriteiframe',
                    ptamainindex: 0,
                    ptamaindata: ptamainstate.ptamaindata,
                })

                // const filter = favouritemainstate.favouritemaindata.filter(data => data.postid !== ptamainstate.ptamaindata.postid)
                // setfavouritemainstate({
                //     favouritemaindata: filter,
                // })
            }
        }
    ]

    const ptamain = [
        {
            ptamainid: 'favouriteiframe',
            ptamainref: favouriteiframe,
        }
    ]

    useEffect(() => {
      if(ptamainstate) {
          const filter = ptamain.filter(data => data.ptamainid === ptamainstate.ptamainid);
          const filtertwo = filter[0].ptamainref.filter(data => data.ptamainindex === ptamainstate.ptamainindex);
          setptamainrender(filtertwo)

      }
    }, [ptamainstate])

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender?.map(data => (<>

                <article onClick={() => {
                    data?.ptamainaction()

                }} className="">
                    <h1 className="text-5xl   m-h6 text-white">{data?.ptamainicon}</h1>
                </article>
                
                </>))}
            </section>
        </main>
    </div>
  )
}

export default PtaMain