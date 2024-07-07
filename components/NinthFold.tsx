import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import { MyContext } from '@/app/page'

const NinthFold = () => {
  // @ts-ignore
  const {darkMode} = useContext(MyContext)
  return (
    <div className={`${darkMode ? 'bg-[#1d2735]' : 'bg-[#F5F7FA]'} py-8 text-center md:px-80`}>
        <h1 className='text-[32px] leading-[36px] md:text-[64px] md:leading-[76px] font-semibold'>Pellentesque suscipit fringilla libero eu.</h1>
        <Button className='bg-[#4CAF4F] mt-8'>Get a Demo<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={12} className={"ms-2"}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='white'/></svg></Button>
    </div>
  )
}

export default NinthFold