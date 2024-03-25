'use client'
import React, { useState } from 'react';

const style1=[
    "transition-all relative bottom-[4px] right-[3px] w-[130px]  text-[#8bb48b] text-[18px] bg-[#112107] px-[25px] py-[8px] rounded-[30px]",
    "transition-all relative bottom-[4px] right-[3px] w-[130px]  text-[#6e8470] text-[18px] px-[25px] py-[8px]"
]

const style2=[
    "transition-all relative bottom-[4px] left-[3px] w-[130px]  text-[#6e8470] text-[18px]  px-[8px] py-[8px] ",
    "transition-all relative bottom-[4px] left-[3px] w-[130px]  text-[#8bb48b] text-[18px] bg-[#112107] px-[8px] py-[8px] rounded-[30px]"

]

export default function SwitchPlan() {
    const [Switch, SwitchValue] = useState<number>(0);
    const Change = (Switch:number) =>{
        Switch == 0 ? SwitchValue(1) : SwitchValue(0);
    }

  return (

     <button className="w-[280px] h-[55px]  bg-[#0c160b] py-2 px-2 border-[2px] border-[#232c1b] rounded-[30px]" onClick={()=>Change(Switch)}>
         <div className='flex'>
                <div className={style1[Switch]}>
                        <a>Monthly</a>
                </div>
                <div className={style2[Switch]}>
                        <a className='relative  '>Yearly</a>
                        <span className='relative  left-[4px] bg-[#097615] rounded-[30px] px-[5px] py-[1px] text-[16px] text-[#8ee797]'>-10%</span>
                </div>
        </div>
    </button>

  );
}