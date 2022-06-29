import React, { useEffect, useState } from 'react'

function ScrollMain(
    scrollmainstatic
) {
  console.log('scrollmainstatic :>> ', scrollmainstatic);
    const [scrollmainoffset, setscrollmainoffset] = useState()
    useEffect(() => {
      window.addEventListener('scroll', hh)

      return () => window.removeEventListener('scroll', hh)
    }, [])

    const hh = () => {
        setscrollmainoffset(window.pageYOffset)
    }

  return (
        <div style={{transform: `translateY(${scrollmainoffset * (scrollmainstatic?.scrollmainstatic?.scrollmaintransform)}px)`}} className={`min-w-fit min-h-full md:min-w-full flex justify-center  duration-100 md:duration-[0ms] scroll-smooth `}>
            {scrollmainstatic && scrollmainstatic?.children}
        </div>
  )
}

export default ScrollMain