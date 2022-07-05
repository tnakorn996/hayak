import React, { useContext, useEffect } from 'react'

import { ContextMain } from '../../context/contextmain';

export default function CheckMain({checkmainstatic, children}) {
    const {
        setappmainstate,

    } = useContext(ContextMain)

    // const feedbacktbody = [
    //     {
    //         checkmainindex: 0,
    //         checkmainaction: ()  => ll(),
    //     }
    // ]

    // const checkmain = [
    //     {
    //         checkmainid: 'feedbacktbody',
    //         checkmainref: feedbacktbody,
    //     }
    // ]

    // useEffect(() => {
    //   if(checkmainstatic){
    //     const filter = checkmain.filter(data => )
    //   }
    // }, [])


    function ll() {
        const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe"));
        const parsefeedback = JSON.parse(window.localStorage.getItem("feedbackiframe"));

        if(parsefavourite.length > 0 || parsefeedback.length > 0){
            if(window.confirm('Are you sure you want to cancel?')){
                window.localStorage.setItem("favouriteiframe", JSON.stringify([]))
                window.localStorage.setItem("feedbackiframe", JSON.stringify([]))
                setappmainstate({
                    appmainboolean: false
                })
            }
            
        } else {
            setappmainstate({
                appmainboolean: false
            })
        }
    }

  return (
    <div>
        <main className="">
            <section onClick={() => {
                ll()
            }} className="">
                {children}
            </section>
        </main>
    </div>
  )
}
