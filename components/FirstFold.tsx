import React from 'react'
import Carousel from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const FirstFold = () => {

    const carouselData = [
        // eslint-disable-next-line react/jsx-key
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            <div>
                <h1 className='text-6xl text-[#4D4D4D]'>Lessons and insights <br/><span className='text-[#4CAF4F]'>from 8 years</span></h1>
                <p className='text-[#717171] mt-4'>Where to grow your business as a photographer: site or social media?</p>
                <Button className='bg-[#4CAF4F] mt-8'>Register</Button>
            </div>
            <div>
                <Image src={require('../public/Illustration.svg')} alt={"Illustration Image"}/>
            </div>
        </div>,
        // eslint-disable-next-line react/jsx-key
        <div className='flex flex-col md:flex-row gap-20 items-center'>
            <div>
                <Image src={require('../public/rafiki.svg')} alt={"Illustration Image"}/>
            </div>
            <div>
                <h1 className='text-6xl text-[#4D4D4D]'>Let the best <br/><span className='text-[#4CAF4F]'>handle the rest</span></h1>
                <p className='text-[#717171] mt-4'>Guidance from legends and experts</p>
                <Button className='bg-[#4CAF4F] mt-8'>Register</Button>
            </div>
        </div>,
        // eslint-disable-next-line react/jsx-key
        <div className='flex flex-col md:flex-row gap-20 items-center'>
        <div>
            <h1 className='text-6xl text-[#4D4D4D]'>Learn from various <br/><span className='text-[#4CAF4F]'>experiences</span></h1>
            <p className='text-[#717171] mt-4'>Improve on skills you {"didn't"} know about</p>
            <Button className='bg-[#4CAF4F] mt-8'>Register</Button>
        </div>
        <div>
            <Image src={require('../public/pana.svg')} alt={"Illustration Image"}/>
        </div>
    </div>
    ]

  return (
    <Carousel carouselData={carouselData}/>
  )
}

export default FirstFold