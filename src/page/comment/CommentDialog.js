import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import StateMain from '../../component/state/StateMain'
import { ContextMain } from '../../context/contextmain'

function CommentDialog() {
    const {
        setappmainstate,
        setstatemainstate,

    } = useContext(ContextMain)

    useEffect(() => {
        setstatemainstate({
            statemainid: 'commentdl',
            statemainidtwo: 'break',
        })
    }, [])

  return (
    <div>
        <main className="p-[20px]">
            <section className="">
                <figcaption className="">
                    <h1 className="m-h6 font-serif">Responses (0)</h1>
                </figcaption>
                <textarea rows="3" placeholder='What are your thoughts?' className='w-full  l-input' />
                <br /><br />
                <button onClick={() => {
                    setstatemainstate({
                        statemainid: 'commentdl',
                        statemainidtwo: 'fail',
                    })
                    setappmainstate({
                        appmainid: 'commentsection',
                        appmainidtwo: 'modalmain',
                        appmainidthree: 0,
                        appmainboolean: true,
                    })
                }} className="l-button">Post comments</button>
            </section>
            <section className="">
                <StateMain />
            </section>
        </main>
    </div>
  )
}

export default CommentDialog