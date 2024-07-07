import Image from 'next/image'
import React from 'react'

const SecondFold = () => {
    return (
        <div className='text-center pt-10 px-16 md:px-36'>
            <h1 className='text-[#4D4D4D] text-4xl font-semibold'>Our Clients</h1>
            <p className='text-[#717171]'>We have been working with some fortune 500+ clients</p>
            <div className='md:px-36 pt-10'>
                <div className="md:flex gap-2 grid grid-cols-3 justify-between">
                    <Image src={require('../public/Company1.svg')} alt={'Company1'} />
                    <Image src={require('../public/Company2.svg')} alt={'Company2'} />
                    <Image src={require('../public/Company3.svg')} alt={'Company3'} />
                    <Image src={require('../public/Company4.svg')} alt={'Company4'} />
                    <Image src={require('../public/Company5.svg')} alt={'Company5'} />
                    <Image src={require('../public/Company6.svg')} alt={'Company6'} />
                </div>
            </div>
        </div>
    )
}

export default SecondFold