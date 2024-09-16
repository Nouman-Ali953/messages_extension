import Card from '@/components/cards/Card'
import PriCard from '@/components/pricard/PriCard'
import React from 'react'

const paymentDataFree = [
   "Unlimited message scheduling (with watermark)",
   "Personal webhook integration",
   "AI-powered grammar correction and message writing assistance",
   "Access from 1 IP address",
]
const paymentDataBasic = [
   "Unlimited message scheduling (no watermark)",
   "AI-powered grammar correction and message writing assistance",
   "Message templates for faster writing",
   "Access from up to 3 IP addresses",
]
const paymentDataPro = [
   "Unlimited message scheduling (no watermark)",
   "AI-powered grammar correction and message writing assistance",
   "Ability to schedule the same message to multiple groups and contacts",
   "Personal webhook integration",
   "Bulk messaging functionality",
   "Import and export of contacts and chats via Excel",
   "Access from up to 7 IP addresses",
   "Live customer support via WhatsApp",
]
const paymentDataPremium = [
   "Unlimited message scheduling (no watermark)",
   "AI-powered grammar correction and message writing assistance",
   "Personal webhook integration",
   "Vip customer support via WhatsApp 24/7",
   "Bulk messaging functionality",
   "Ability to schedule the same message to multiple groups and contacts",
   "Message templates for faster writing",
   "Import and export of contacts and chats via Excel",
   "Access from up to 15 IP addresses",
]
const page = () => {
  return (
    <div className=" bg-[#FFFCF2] w-full min-h-[100vh] flex items-center justify-center flex-col py-16">
        <div className="flex flex-col gap-4 items-center tracking-wider">
          <h2 className="text-center text-[3rem] p-3 pt-0 font-extrabold">
            Our Pricing Make Difference
          </h2>
          <p className="-mt-4 text-xl text-center">
          Start for free, and upgrade when you need to.

            <span className="font-bold hover:text-green-600 transition-colors ease-in-out cursor-pointer">  We grow with you.</span>
          </p>
        </div>
        <div className="flex mt-[4rem] w-full h-full justify-evenly flex-wrap gap-5">
          <PriCard info="Free Plan" title="$ 0" points={paymentDataFree} />
          <PriCard info="Basic Plan" title="$ 07" points={paymentDataBasic} />
          <PriCard info="Pro Plan" title="$ 12" points={paymentDataPro} />
          <PriCard info="Premium Plan" title="$ 20" points={paymentDataPremium}/>
        </div>
        {/* <Slider /> */}
      </div>
  )
}

export default page