import Card from '@/components/cards/Card'
import PriCard from '@/components/pricard/PriCard'
import React from 'react'

const page = () => {
  return (
    <div className=" bg-[#FFFCF2] w-full h-[180vh] flex items-center justify-center flex-col py-16">
        <div className="flex flex-col gap-4 items-center tracking-wider">
          <h2 className="text-center text-[3rem] p-3 pt-0 font-extrabold">
            Our Pricing Make Difference
          </h2>
          <p className="-mt-4 text-xl">
          Start for free, and upgrade when you need to.

            <span className="font-bold hover:text-green-600 transition-colors ease-in-out cursor-pointer">  We grow with you.</span>
          </p>
        </div>
        <div className="flex mt-[4rem] w-full h-full justify-evenly">
          <PriCard info="Free" title="$ 0" source='/tasks.svg'/>
          <PriCard info="Basic" title="$ 07" source='/scheduler.svg'/>
          <PriCard info="Standard" title="$ 12" source='/campaigns.svg'/>
          <PriCard info="Professional" title="$ 20" source='/tasks.svg'/>
        </div>
        {/* <Slider /> */}
      </div>
  )
}

export default page