import Image from 'next/image'
import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import { MyContext } from '@/app/page'

const cardData = [
    {
        imgSrc: require('../public/Image1.svg'),
        heading: "Creating Streamlined Safeguarding Processes with OneRen"
    },
    {
        imgSrc: require('../public/Image2.svg'),
        heading: "What are your safeguarding responsibilities and how can you manage them?"
    },
    {
        imgSrc: require('../public/Image3.svg'),
        heading: "Revamping the Membership Model with Triathlon Australia"
    },
    
]

const Card = ({imgSrc, heading}: {imgSrc: any, heading: String}) => {
    // @ts-ignore
    const {darkMode} = useContext(MyContext)
    return (
        <div className='flex flex-col justify-center items-center relative py-20 md:py-0'>
            <Image src={imgSrc} alt={""} className={"w-full"}/>
            <div className={`text-xl font-semibold w-80 ${darkMode ? 'bg-[#1d2735]' : 'bg-[#F5F7FA]'} text-center p-6 rounded-lg absolute translate-y-3/4`} style={{boxShadow: "0px 8px 16px 0px #ABBED166;"}}>
                <p className="text-[#717171]">{heading}</p>
                <Button className='text-[#4CAF4F] bg-transparent text-xl mt-4'>Readmore <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={12} className={"ms-2"}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill='#4CAF4F'/></svg></Button>
            </div>
        </div>
    )
}

const EighthFold = () => {
    // @ts-ignore
    const {darkMode} = useContext(MyContext)
  return (
    <div className='pb-32'>
        <div className='text-center px-16 md:px-40'>
            <h1 className='text-[#4D4D4D] font-semibold text-4xl'>Caring is the new marketing</h1>
            <p className='text-[#717171] md:px-60 mt-2'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See {"who's"} joining the community, read about how our community are increasing their membership income and {"lot's"} more.​</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-10 md:px-36 pt-4">
        {cardData.map((data, index) => <Card key={index} {...data}/>)}
        </div>
    </div>
  )
}

export default EighthFold