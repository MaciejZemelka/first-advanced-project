'use client'
import Image from "next/image";
import React from 'react';
import SwitchPlan from "./switchPlan";
import Buytokens from "./buytokens";


export default function Home() {



  return (
    <main className="py-[20px]">
        <div className="justify-center flex">
            <div className=" w-[65%] flex justify-center text-white">
                <div className="text-center w-[80%]  ">
                    <h1 className="text-[40px] font-bold pb-[25px]">Plans & Pricing</h1>
                    <a className="text-[#939d90] text-[20px] ">  
                        Unlock the full potential of our AI image upscaler with flexible pricing plans designed to fit your needs.
                        Whether you&apos;re a casual user, a professional photographer, or a business in need of high-quality image 
                        upscaling, we&apos;ve got you covered.
                    </a>
                </div>
                
          </div>
          
          
        </div>
        <div className="justify-center flex pt-[25px]">
            <div>
                  <SwitchPlan></SwitchPlan>
            </div>
        </div>
        <div>
            <div className="justify-center flex  pt-[35px] text-white">
                <div className="w-[950px] flex justify-between">
                    <div className="pt-[30px]">
                        <div className="bg-[#102208] w-[300px] h-[430px] px-[20px] py-[12px] border-[2px] border-[#253421] rounded-[20px]">
                            <a className="text-[30px] font-bold">Free</a><br/>
                            <a className="text-[#667065] text-[19px]">Includes onlt free trial tokens.</a><br/>
                            <a className="text-[40px] font-bold">$0 <span className="text-[20px] text-[#798176]">/ months</span></a><br/>
                            <div className="py-[15px]">
                                <button className="border-[3px] border-[#2b7831] rounded-[20px] w-[250px] py-[10px] flex justify-center">
                                    Sign Up 
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="relative top-[7px] left-[20px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                        fill={"white"} />
                                    </svg>
                                </button>
                                <div className="text-[#abb4a8] pt-[20px] text-[18px]">
                                <a>Export to PNG and JPG</a><br/>
                                <a>Limited to 10 trial tokens</a><br/>
                                <a>Basic upscaling features</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="bg-[#102208] w-[300px] h-[460px] border-[2px] border-[#2b7831] rounded-[15px]">
                        <div className="relative bg-[#00941c] text-center rounded-[13px] h-[30px] z-20 pt-[2px]">
                            <a>Most popular</a>
                        </div>
                        <div className="relative bottom-[12px] bg-[#00941c] w-[296px] h-[12px] z-10">

                        </div>
                        <div className=" px-[20px]  ">
                            <a className="text-[30px] font-bold text-[#9cb696]">Standard</a><br/>
                            <a className="text-[#667065] text-[19px]">Access to all essential tools.</a><br/>
                            <a className="text-[40px] font-bold">$19 <span className="text-[20px] text-[#798176]">/ months</span></a><br/>
                            <div className="py-[15px]">
                                <button className="border-[3px] border-[#2b7831] bg-[#01931c] rounded-[20px] w-[250px] py-[10px] flex justify-center">
                                    Get Started 
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="relative top-[7px] left-[20px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                        fill={"white"} />
                                    </svg>
                                </button>
                                <div className="text-[#abb4a8] pt-[20px] text-[18px]">
                                <a>Export to various formats</a><br/>
                                <a>200 mothly tokens</a><br/>
                                <a>Acces to varius <br/> upscaling algorithms</a><br/>
                                <a>Faster processing</a><br/>
                                <a>Priority support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-[30px]">
                        <div className="bg-[#102208] w-[300px] h-[430px] px-[20px] py-[12px] border-[2px] border-[#d1a334] rounded-[20px]">
                            <a className="text-[30px] font-bold">Business</a><br/>
                            <a className="text-[#667065] text-[19px]">Provides advanced features.</a><br/>
                            <a className="text-[40px] font-bold">$89 <span className="text-[20px] text-[#798176]">/ months</span></a><br/>
                            <div className="py-[15px]">
                                <button className="border-[3px] border-[#d1a334] bg-[#d1a334] rounded-[20px] w-[250px] py-[10px] flex justify-center">
                                    Get Started 
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="relative top-[7px] left-[20px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                        fill={"white"} />
                                    </svg>
                                </button>
                                <div className="text-[#abb4a8] pt-[20px] text-[18px]">
                                <a>All features from Standard</a><br/>
                                <a>1000 monthly tokens</a><br/>
                                <a>API access</a><br/>
                                <a>Batch processing</a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>

        </div>
        <div className="justify-center flex pt-[40px]">
            <div className=" w-[65%] flex justify-center text-white">
                <div className="text-center w-[80%]  ">
                    <h1 className="text-[40px] font-bold pb-[25px]">Pay-As-You-Go</h1>
                    <a className="text-[#939d90] text-[20px] ">  
                        You don&apos;t want to commit to a subscription plan? No problem! WIth our Pay-As-You-Go option, <br/>
                        you have the freedom to upscale images without any long-term commitments.
                    </a>
                </div>
                
            </div>
          
        </div>
        <div className="flex justify-center">
            <Buytokens/>
        </div>
        <div className="justify-center flex pt-[40px]">
            <div className=" w-[65%] flex justify-center text-white">
                <div className="text-center w-[80%]  ">
                    <h1 className="text-[40px] font-bold pb-[25px]">Frequently Asked Questions</h1>
                    <div className="flex justify-center text-white ">
                        <div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Proin Libero nunc consequat interdum varius sit?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Fames ac turpis egestas sed tempus urna?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Netus et malesuada fames ac?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Duis at tellus at urna condimentum?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Adiscing at in tellus integer?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                            <div className="flex border-b-[1px] border-b-[#1a2119] text-[#5b605a] text-[18px] w-[470px] justify-between py-2">
                                <a>Euismod quis viverra?</a>
                                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" style={{ transform: 'rotate(90deg)' }} className="relative top-[7px] right-[5px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                                    fill={"#5b605a"} />
                                </svg>
                            </div>
                         </div>
                    </div>
                </div>
                
            </div>
          
        </div>
    </main>
  );
  }
