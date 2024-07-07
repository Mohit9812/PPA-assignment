import React, { useContext } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MyContext } from '@/app/page'

const SeventhFold = () => {
  // @ts-ignore
  const {darkMode} = useContext(MyContext)
  return (
    <div className={`flex flex-col md:flex-row items-center py-8 px-16 md:px-36 ${darkMode ? 'bg-[#1d2735]' : 'bg-[#F5F7FA]'} gap-20`}>
        <Image src={require('../public/Tesla.svg')} alt={"Tesla"}/>
        <div>
            <p className='text-[#717171]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <p className="text-xl text-[#4CAF4F] mt-4">Tim Smith</p>
            <p className='text-[#89939E] mt-2'>British Dragon Boat Racing Association</p>
            <div className="flex  justify-between mt-8">
                <Image src={require('../public/Company1-color.svg')} alt={"Company"}/>
                <Image src={require('../public/Company2.svg')} alt={"Company"}/>
                <Image src={require('../public/Company3.svg')} alt={"Company"}/>
                <Image src={require('../public/Company4.svg')} alt={"Company"}/>
                <Image src={require('../public/Company5.svg')} alt={"Company"}/>
                <Image src={require('../public/Company6.svg')} alt={"Company"}/>
                <Button className='bg-transparent text-xl font-semibold hidden md:flex text-[#4CAF4F]'>Meet all customers <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={12} className={"ms-2"}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#4CAF4F'/></svg></Button>
            </div>
            <Button className='bg-transparent text-xl font-semibold md:hidden text-[#4CAF4F]'>Meet all customers <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={12} className={"ms-2"}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#4CAF4F'/></svg></Button>
        </div>
    </div>
  )
}

export default SeventhFold