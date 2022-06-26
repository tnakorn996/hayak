import React, { useEffect, useState } from 'react'

function ScrollMain({
    scrollmainstatic,
    scrollmainstyle,
}) {
    const [scrollmainoffset, setscrollmainoffset] = useState()
    useEffect(() => {
      window.addEventListener('scroll', hh)

      return () => window.removeEventListener('scroll', hh)
    }, [])

    const hh = () => {
        setscrollmainoffset(window.pageYOffset)
    }

  return (
        <div style={{transform: `translateY(${scrollmainstatic && scrollmainoffset * (scrollmainstatic.scrollmaintransform || 0.5)}px)`}} className={`min-w-fit min-h-full md:min-w-full  duration-100 md:duration-[0ms] scroll-smooth ${scrollmainstyle && scrollmainstyle}`}>
            {scrollmainstatic && scrollmainstatic?.scrollmaindata}
        </div>
  )
}

export default ScrollMain