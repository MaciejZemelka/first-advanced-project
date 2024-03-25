import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Home() {
  return (
    <main className="py-[20px]">
      <div className="justify-center flex">
        <div className=" w-[65%] flex justify-between text-white">
          <div className="w-[42%]">
            <div className="pt-[160px]">
              <a className="text-[35px] font-bold">Give new life to your photos with <span className="bgtext ">Upscale Images</span></a><br/>
              <a className="text-[#9fd5aa]">First 10 upscalings completely <span className="underline">for free</span></a>
              <div className="flex py-[10px]">
                <div className="pr-2">
                  <button className="bg-[#00941c] rounded-[15px] px-[20px] py-[6px] flex">
                    Upscale now 
                    <div className="pt-[7px] pl-[10px]">
                      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                          fill={"white"} />
                      </svg>
                    </div>
                    </button>
                </div>
                <div className="pl-2">
                <button className="flex bg-[#102610] rounded-[15px] px-[20px] py-[6px] border-[#64826b] border-[1px] text-[#99d2ac]">
                  Read more
                  <div className="pt-[7px] pl-[10px]">
                      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                          fill={"#99d2ac"} />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-[90px] rounded-[20px] bg-[#132307] w-[600px] h-[500px] justify-center flex border-[2px] border-[#293722]" > 
          
              <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src="IMG/WomanAI1.jpg" srcSet="IMG/WomanAI1.jpg" alt="Image one" />}
                  itemTwo={<ReactCompareSliderImage src="IMG/WomanAI2.jpg" srcSet="IMG/WomanAI2.jpg" alt="Image two" />}
                />
          
          </div>
        </div>
      </div>
      
    </main>
  );
}
