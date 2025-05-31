import React from 'react'
import Button from '../../../components/Button'

const Hero = ({butttonvitrakrakhney}) => {
  return (
<section className=" w-full  bg-[#0A2025] py-9 px-8">
  <div className="mx-auto flex  flex-col items-center lg:flex-row justify-center gap-10 py-40 max-w-[1440px] bg-no-repeat ">
    <div className="w-[660px]  flex-col justify-center items-start gap-20 inline-flex">
      <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
        <h1 className="self-stretch">
          <span className="text-white text-5xl font-bold font-['Roboto']">Redefining Motion:</span><span className="text-[#3e9d26] text-5xl font-bold font-['Roboto']">The Future of Footwear is Here</span>
        </h1>
        <p className="self-stretch text-white text-xl font-normal font-['Roboto']">Experience unparalleled comfort and
          innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.
        </p>
      </div>
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <p className="text-white text-sm font-normal font-['Roboto']">Step into the Future</p>
          <div data-svg-wrapper="true" className="relative"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z" fill="white" />
            </svg></div>
        </div>
        {/* <button className="px-8 py-2.5 bg-[#3e9d26] rounded-[10px] justify-center items-center gap-2.5 flex text-white text-sm font-semibold font-['Roboto']">Shop Now</button> */}
       <Button butttonvitrakrakhney={butttonvitrakrakhney}/>
      </div>
    </div><img className="w-full max-w-[400px]" src="https://iili.io/338c9je.png" alt />
  </div>
</section>

  )
}

export default Hero