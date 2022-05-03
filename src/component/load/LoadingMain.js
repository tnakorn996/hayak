import React from 'react'

function LoadingMain() {
  return (
    <div>
        <main className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-[20px] h-[20px]  rounded-full border-2 border-gray-200 border-t-gray-500 animate-spin" />
        </main>
    </div>
  )
}

export default LoadingMain