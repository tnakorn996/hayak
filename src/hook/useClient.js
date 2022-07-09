import React, { useContext, useEffect, useState } from 'react'
import { client } from '../lib/sanity'

// import { ContextMain } from '../context/contextmain'

export default function useClient(clientquery) {
    const [clientstatic, setclientstatic] = useState()

    useEffect(() => {
        if(clientquery) {
            window.addEventListener('load', handleClient())
            return window.removeEventListener('load', handleClient())
        }
    }, [clientquery])

    const handleClient = async () => {
        await client.fetch(clientquery)
        .then((data) => {
            setclientstatic(data)
        }).catch((data) => {
            alert(data)
        })
    }
    return [clientstatic, setclientstatic]
}
