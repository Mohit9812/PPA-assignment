"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

const Carousel = ({carouselData}: any) => {
    const len = carouselData.length;

    const [n, setN] = useState(0)
    const handleIndicatorClick = (e: any) => {
        setN(e.target.dataset.value);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            setN((prev) => (prev + 1) % len)
        }, 5000)
        return () => clearInterval(interval)
    }, [])


    const indicators = [];
    for(let i = 0; i < len; i++){
        indicators.push(
            <li key={i} data-value={i} className={`rounded-full p-2 ${i == n ? 'bg-[#4CAF4F]' : 'bg-[#4CAF4F3A]'}`} onClick={handleIndicatorClick}/>
        )
    }

    return (
        <div className="overflow-hidden mt-12">
            <div className={`flex w-max overflow-hidden`} style={{transform: `translate(-${n*100}vw)`}}>
                {carouselData.map((data: any, index: any) => <div key={index} className={"w-screen flex justify-center px-16"}>
                    {data}
                </div>)}
            </div>
            <ul className="flex gap-2 justify-center w-screen">
                {indicators.map((data) => data)}
            </ul>
        </div>
    )
}

export default Carousel