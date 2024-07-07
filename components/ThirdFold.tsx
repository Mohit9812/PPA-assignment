import Image from 'next/image'
import React from 'react'

const cardData = [
    {imgSrc: require('../public/Icon1.svg'), heading: "Membership Organisations", paragraph: "Our membership management software provides full automation of membership renewals and payments"},
    {imgSrc: require('../public/Icon2.svg'), heading: "National Associations", paragraph: "Our membership management software provides full automation of membership renewals and payments"},
    {imgSrc: require('../public/Icon3.svg'), heading: "Clubs And Groups", paragraph: "Our membership management software provides full automation of membership renewals and payments"}
]

const Card = ({imgSrc, heading, paragraph}: {imgSrc: any, heading: String, paragraph: String}) => {
    return (
        <div className='flex flex-col justify-center items-center md:p-10' style={{boxShadow: "0px 2px 4px 0px #ABBED133"}}>
            <Image src={imgSrc} alt={"Icon"}/>
            <h2 className='text-[#4D4D4D] text-3xl font-bold'>{heading}</h2>
            <p className='text-[#717171]'>{paragraph}</p>
        </div>
    )
}

const ThirdFold = () => {
  return (
    <div className='text-center px-16'>
        <h1 className='text-4xl text-[#4D4D4D] font-semibold'>Manage your entire community in a single system</h1>
        <p className='text-[#717171] mt-4'>Who is Nexcent suitable for?</p>
        <div className='flex md:px-20 gap-10 flex-col md:flex-row mt-10'>
            {cardData.map((data, index) => 
                <Card key={index} {...data}/>
            )}
        </div>
    </div>
  )
}

export default ThirdFold