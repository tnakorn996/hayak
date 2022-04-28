import React from 'react'
import { useEffect } from 'react'

function PostFigcaption({postindexobject}) {

    useEffect(() => {
        if(postindexobject){
            ll()
        }
    }, [postindexobject])

    function ll() {
        if(postindexobject){
            
            postindexobject.postblock.map(data => {
                return data.children.map(dat => {
                    console.log('postfig :>> ');
                    return <figcaption >'ddd'</figcaption>
                })
            })
        }
    }

  return (
    <div>
        <main className="">
            {ll()}




        </main>
    </div>
  )
}

export default PostFigcaption