import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ButtonMain from '../../layout/button/ButtonMain'
import CardMain from '../../component/card/CardMain'
import FieldMain from '../../component/field/FieldMain'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function CommentDialog() {
    const {
        setappmainstate,
        setstatemainstate,

    } = useContext(ContextMain)
    const location = useLocation()

  return (
    <div>
        <main className="px-[20px] w-full mx-auto md:w-[55vw]">
            <section className="">
                <FieldMain fieldmainid={'commentform'} fieldmainindex={0} fieldmainparam={location.pathname?.slice(1, location.pathname.length)} />
            </section>
        </main>
    </div>
  )
}

export default CommentDialog