import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-[500px]  bg-[url(./assets/IMAGE.png)] bg-cover bg-no-repeat bg-center flex items-center justify-center text-center text-white'>
        <div>
            <h1 className='text-[50px]'>Let's do it together.</h1>
            <p className='mt-5 opacity-60'>We travel the world in search of stories. Come along for the ride.</p>
            <button className='bg-[#DD783F]  py-3 px-8 rounded-[3px]'>View Latest Posts</button>
        </div>
    </section>
  )
}

export default Hero