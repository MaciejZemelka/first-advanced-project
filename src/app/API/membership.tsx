'use client'
import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


export default function Membership() {

    
  return (

    <div className=" max-w-[240px] px-6 py-4 bg-[#041b09]/40 border-[1px] border-[#23401e] rounded-[8px]">
                            <a className="text-[#738471] text-[14px]">Current membership plan </a>
                            <a className="text-[22px] text-[#cfe4cc] font-bold">Standard </a><br/>
                            <div className="text-right text-[15px] pb-[15px]">
                                <ProgressBar
                                    completed={75}
                                    className="wrapper"
                                    barContainerClassName="container"
                                    completedClassName="barCompleted"
                                    labelClassName="label"
                                />
                                <a className="text-[#cfe4cc]">150/200 tokens</a>
                            </div>
                            <a className="text-[#738471] text-[14px]">Extra tokens </a><br/>
                            <div className="flex">
                                <div className="pt-[4px] pr-[9px]">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M9 20L0 15V5L9 0L18 5V15L9 20ZM6.1 7.25C6.48333 6.85 6.925 6.54167 7.425 6.325C7.925 6.10833 8.45 6 9 6C9.55 6 10.075 6.10833 10.575 6.325C11.075 6.54167 11.5167 6.85 11.9 7.25L14.9 5.575L9 2.3L3.1 5.575L6.1 7.25ZM8 17.15V13.875C7.1 13.6417 6.375 13.1667 5.825 12.45C5.275 11.7333 5 10.9167 5 10C5 9.81667 5.00833 9.64583 5.025 9.4875C5.04167 9.32917 5.075 9.16667 5.125 9L2 7.25V13.825L8 17.15ZM9 12C9.55 12 10.0208 11.8042 10.4125 11.4125C10.8042 11.0208 11 10.55 11 10C11 9.45 10.8042 8.97917 10.4125 8.5875C10.0208 8.19583 9.55 8 9 8C8.45 8 7.97917 8.19583 7.5875 8.5875C7.19583 8.97917 7 9.45 7 10C7 10.55 7.19583 11.0208 7.5875 11.4125C7.97917 11.8042 8.45 12 9 12ZM10 17.15L16 13.825V7.25L12.875 9C12.925 9.16667 12.9583 9.32917 12.975 9.4875C12.9917 9.64583 13 9.81667 13 10C13 10.9167 12.725 11.7333 12.175 12.45C11.625 13.1667 10.9 13.6417 10 13.875V17.15Z" fill="white"/>
                                    </svg>
                                </div>
                                
                                <a className="text-[18px] text-[#cfe4cc] font-bold">539 tokens</a>
                            </div>
                        </div>

  );
}