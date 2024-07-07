import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

const FourthFold = () => {
    return (
        <div className='flex flex-col md:flex-row px-16 md:px-36 justify-between'>
            <div className='flex justify-center md:w-2/4'>
                <Image src={require('../public/rafiki.svg')} alt={''} />
            </div>
            <div className='flex items-center justify-center md:w-2/4'>
                <div>
                    <h1 className="text-4xl font-semibold text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h1>
                    <p className='text-[#717171] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <Button className='bg-[#4CAF4F] mt-8'>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default FourthFold