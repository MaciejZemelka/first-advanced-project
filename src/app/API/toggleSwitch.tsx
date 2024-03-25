'use client'
import React, { useState } from 'react';

const style1=[
    "transition-all relative h-[15px] w-[15px] bg-green-950 rounded-[360px] left-[0px]",
    "transition-all relative h-[15px] w-[15px] bg-green-700 rounded-[360px] left-[18px]"
]

const style2=[
    "transition-all bg-green-900 w-[40px] h-[25px] rounded-[180px] p-[3px]",
    "transition-all bg-[#75d48b] w-[40px] h-[25px] rounded-[180px] p-[3px]"

]

export default function ToggleSwitch() {
    const [Toggle, ToggleValue] = useState<number>(0);
    const Change = (Toggle:number) =>{
        Toggle == 0 ? ToggleValue(1) : ToggleValue(0);
    }
  return (

    <button className={style2[Toggle]} onClick={()=>Change(Toggle)}>
        <div className={style1[Toggle]} onClick={()=>Change(Toggle)}>  

        </div>
    </button>

  );
}
