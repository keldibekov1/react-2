import React from 'react'
import menu  from '../../assets/menu.png'
import avatar from '../../assets/avatar.png'

const Menu = () => {
  return (
   <section className='bg'>
    <div className='container mx-auto grid grid-cols-3 gap-6 mt-5'>
    
        <div className="col-span-3 flex flex-col items-center">
            <h1 className="w-[136px] h-[27px] text-center font-normal text-[20px] leading-[27px] tracking-[2px] font-[Oxygen]">
                Most Recent
            </h1>
        <div className="w-[188px] h-[1px] bg-[#DEDEDE] mt-4"></div> 
            </div>


       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>
       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>
       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>
       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>
       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>
       <div className='flex flex-col bg-white '>
        <div>
            <img className='w-full' src={menu} alt="" />
        </div>
        <div className='flex flex-col flex-1'>
            <div className='p-3.5'>
                <h3>Still Standing Tall</h3>
                <p className='text-[13px] mt-1.5 text-[#7A7A7A]'>Life begins at the end of your comfort zone.</p>

            </div>
            <div className='flex gap-2.5 p-3 border-t items-center'>
                <img src={avatar} alt="" />
                <p className='flex-1 text-xs'>William Wong</p>
                <span className='text-xs'>9/25/2015</span>
            </div>
        </div>
       </div>   
    </div>
   </section>
  )
}

export default Menu