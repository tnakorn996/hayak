import React from 'react'

function BadgeMain({title}) {
  return (
    <div>
        <main className="px-[10px] py-[5px] w-fit rounded-full bg-gray-200">
            <h1 className="l-h1  first-letter:uppercase">{title}</h1>
        </main>
    </div>
  )
}

export default BadgeMain