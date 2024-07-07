import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const SixthFold = () => {
    return (
        <div className='flex flex-col md:flex-row px-16 md:px-36 justify-between gap-20'>
            <div className='flex justify-center md:w-2/4'>
                <Image src={require('../public/pana.svg')} alt={''} />
            </div>
            <div className='flex items-center justify-center md:w-2/4'>
                <div>
                    <h1 className="text-4xl font-semibold text-[#4D4D4D]">How to design your site footer like we did</h1>
                    <p className='text-[#717171] mt-4'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <Button className='bg-[#4CAF4F] mt-8'>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default SixthFold