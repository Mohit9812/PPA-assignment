import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-[#263238] px-16 md:px-40 py-16 gap-20'>
      <div>
        <Image src={require('../public/Logo-white.svg')} alt={"LogoFooter"} />
        <p className={`text-[#F5F7FA] text-sm mt-10`}>Copyright © 2020 Nexcent ltd.</p>
        <p className='text-[#F5F7FA] text-sm mt-2'>All rights reserved</p>
        <div className="flex mt-10 gap-4">
          <div className="rounded-full bg-[#FFFFFF1A] p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={20} height={20}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill='white' /></svg></div>
          <div className="rounded-full bg-[#FFFFFF1A] p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" fill='white' /></svg></div>
          <div className="rounded-full bg-[#FFFFFF1A] p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" fill='white' /></svg></div>
          <div className="rounded-full bg-[#FFFFFF1A] p-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} height={20}><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" fill='white' /></svg></div>
        </div>

      </div>
      <div className="flex flex-col md:flex-row gap-20">
        <div>
          <p className='text-white text-xl'>Company</p>
          <ul className='text-[#F5F7FA] mt-6'>
            <li className='mt-3'>About us</li>
            <li className='mt-3'>Blog</li>
            <li className='mt-3'>Contact us</li>
            <li className='mt-3'>Pricing</li>
            <li className='mt-3'>Testimonials</li>
          </ul>
        </div>
        <div>
          <p className='text-white text-xl'>Support</p>
          <ul className='text-[#F5F7FA] mt-6'>
            <li className='mt-3'>Help center</li>
            <li className='mt-3'>Terms of service</li>
            <li className='mt-3'>Legal</li>
            <li className='mt-3'>Privacy policy</li>
            <li className='mt-3'>Status</li>
          </ul>
        </div>
        <div>
          <p className='text-white text-xl'>Stay up to date</p>
          <div className="flex mt-6 bg-[#FFFFFF2A] rounded-lg">
            <Input className='bg-transparent border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white' placeholder='Your email address' type={'email'} />
            <Button className='bg-transparent hover:bg-inherit'><Image src={require('../public/send.svg')} alt={""}/></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer