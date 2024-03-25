'use client'
import React, { useState } from 'react';


export default function Buytokens() {
    const [Value, SetValue] = useState<number>(0);
    let pom;
    const Price = () =>{
        pom=document.getElementById("amount")?.value;
        pom=pom*0.12;
        pom=pom.toFixed(2);
        pom=parseFloat(pom);
        SetValue(pom);
    }
  return (

    <div className="pt-[30px]">
    <div className="bg-[#102208] w-[500px] h-[405px] px-[40px] py-[20px] border-[2px] border-[#253421] rounded-[20px] f">
        <a className="text-[30px] font-bold text-white">Buy tokens</a><br/>
        <div className='pb-[15px]'></div>
        <div className='flex border-[1px] border-[#374136] px-4 py-2 rounded-[20px] justify-between'>
            <div>
                <a className='text-[#7a8176]'>Amount</a><br/>
                <input type="number" min="0" id="amount" className='appearance-none bg-transparent text-[22px] text-[#b1b8ae] style-none focus:outline-none w-[270px]'
                defaultValue="0"
                onChange={Price}
                ></input>
           </div>
           <div className='flex items-center'>
                <a className='text-[25px] text-[#575e55]'>tokens</a>
           </div>
        </div>
        <div className='pt-[10px]'>

        </div>
        <a className="text-[22px] font-bold text-[#7c8179]">Price </a><br/>
        <div className='flex'>
            <a className="text-[35px] font-bold text-white">$
            <input type="number" disabled defaultValue="0" value={Value} className=' w-[300px] bg-transparent text-[35px]' >
            </input>
            </a><br/>
        </div>
        <a className="text-[20px] font-bold text-[#b1b6af]">$0.12 per token </a><br/>
        <div className="py-[40px]">
            <button className="border-[3px] border-[#00941c] rounded-[20px] bg-[#00941c] w-[100%] py-[10px] flex justify-center text-white text-[22px]">
                Buy Tokens 
                <svg width="10" height="20" viewBox="0 0 8 13" fill="none" className="relative top-[9px] left-[20px]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                    fill={"white"} />
                </svg>
            </button>
           
        </div>
    </div>
</div> 

  );
}