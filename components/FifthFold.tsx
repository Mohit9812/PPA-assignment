import Image from 'next/image'
import React, {useContext} from 'react'
import { MyContext } from '@/app/page'

const FifthFold = () => {
    // @ts-ignore
    const {darkMode} = useContext(MyContext);
    return (
        <div className={`flex flex-col md:flex-row px-16 md:px-36 py-16 gap-16 items-center ${darkMode ? 'bg-[#1d2735]' : 'bg-[#F5F7FA]'}`}>
            <div className='md:w-2/4'>
                <div className='md:pr-40'>

                    <h1 className='text-4xl font-semibold'>Helping a local <span className='text-[#4CAF4F]'>business reinvent itself</span></h1>
                    <p className='text-[#4D4D4D] pt-2'>We reached here with our hard work and dedication</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 md:w-2/4'>
                <div className='flex items-center'>
                    <div>
                        <Image src={require('../public/Vector.svg')} alt={""} width={70} className={"me-6"} />
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#4D4D4D] font-bold'>2,245,341</h1>
                        <p className='text-[#717171]'>Members</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Image src={require('../public/Vector2.png')} alt={""} width={70} className={"me-6"} />
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#4D4D4D] font-bold'>46,328</h1>
                        <p className='text-[#717171]'>Clubs</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Image src={require('../public/Vector3.svg')} alt={""} width={70} className={"me-6"} />
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#4D4D4D] font-bold'>828,867</h1>
                        <p className='text-[#717171]'>Event Bookings</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Image src={require('../public/Vector4.svg')} alt={""} width={70} className={"me-6"} />
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#4D4D4D] font-bold'>1,926,436</h1>
                        <p className='text-[#717171]'>Payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthFold