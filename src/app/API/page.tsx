'use client'
import Image from "next/image";
import React, { useState } from 'react';

import Options from "./options";
import Membership from "./membership";
import History from "./history";


export default function Home() {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageName, setImageName] = useState<string | null>(null);
  
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = event.target.files;
      if (fileList && fileList.length > 0) {
        const selectedFile = fileList[0];
        setImageName(selectedFile.name); // Set the name of the selected file
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    };


  return (
    <main className="py-[20px]">
        <div className="justify-center flex">
            <div className=" w-[65%]  justify-between text-white">
                <div>
                    <a className="text-[25px] font-bold">Dashboard</a>
                    <div className="flex py-5 justify-between">                   
                        <Membership></Membership>
                        <History></History>
                    </div>

                </div>
                <div>
                    <a className="text-[25px] font-bold">Upscale image</a>
                    <div>
                        <div className="flex pt-5">
                            <Options></Options>

                            <div className=" px-[31px] ">
                                <div className=" bg-[#0b1806]/30 p-[10px] h-[293px] w-[840px] border border-[#23401e] rounded-[15px] ">
                               
                                    <input type="file" className="hidden outpute-" id="fileInput" onChange={handleFileInputChange}/>
                                        <label htmlFor="fileInput" className="h-[282px] w-[1000px] text-center ">
                                            <div className=" justify-items-cetner">
                                            {imageName && <span className="block text-center"><span className="text-green-600">{imageName}</span> has been uploaded!</span>} 
                                            {selectedImage ? (
                                                <div className="py-2">
                                                    <div className="pl-[295px] ">
                                                        <img src={selectedImage} alt="Selected" className="w-[230px] h-[180px] " />
                                                    </div>
                                                    <div className="pt-[10px]">
                                                        <button className="w-[230px] p-2 bg-green-700 rounded-[30px]">
                                                            Upgrade Now
                                                        </button>
                                                 </div>
                                                </div>
                                                
                                                
                                            ) : (
                                                <>
                                                <div className=" bg-[#283309]/40 h-[272px] w-[817px] border-[1px] border-dashed border-[#23401e] rounded-[15px] ">
                                        
                                                <div className="pt-[80px]">
                                                    <div className="pl-[380px] pb-[10px]">
                                                        <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 32C7.96667 32 5.375 30.95 3.225 28.85C1.075 26.75 0 24.1833 0 21.15C0 18.55 0.783333 16.2333 2.35 14.2C3.91667 12.1667 5.96667 10.8667 8.5 10.3C9.33333 7.23333 11 4.75 13.5 2.85C16 0.95 18.8333 0 22 0C25.9 0 29.2083 1.35833 31.925 4.075C34.6417 6.79167 36 10.1 36 14C38.3 14.2667 40.2083 15.2583 41.725 16.975C43.2417 18.6917 44 20.7 44 23C44 25.5 43.125 27.625 41.375 29.375C39.625 31.125 37.5 32 35 32H24C22.9 32 21.9583 31.6083 21.175 30.825C20.3917 30.0417 20 29.1 20 28V17.7L16.8 20.8L14 18L22 10L30 18L27.2 20.8L24 17.7V28H35C36.4 28 37.5833 27.5167 38.55 26.55C39.5167 25.5833 40 24.4 40 23C40 21.6 39.5167 20.4167 38.55 19.45C37.5833 18.4833 36.4 18 35 18H32V14C32 11.2333 31.025 8.875 29.075 6.925C27.125 4.975 24.7667 4 22 4C19.2333 4 16.875 4.975 14.925 6.925C12.975 8.875 12 11.2333 12 14H11C9.06667 14 7.41667 14.6833 6.05 16.05C4.68333 17.4167 4 19.0667 4 21C4 22.9333 4.68333 24.5833 6.05 25.95C7.41667 27.3167 9.06667 28 11 28H16V32H11Z" fill="white"/>
                                                        </svg>
                                                    </div>
    
                                                    <span className="text-[20px]">Drag and drop image or <span className="text-[#86c58f]">browse</span></span><br />
                                                        <span className="text-[#8f9c84]">Max file size 50MB</span>
                                                </div>
                                                </div>
                                                </>

                                            )}
                                                                            
                                            </div>
                                        </label>
                                        
                                       
                                 </div>
                            </div>
                                    
                        </div>
                       
                        
                    </div>
                </div>
                {selectedImage ? (
                <div className="pt-[10px]">
                    <a className="text-[25px] font-bold">Result</a>
                    <div className="pl-[160px] pt-[20px]">
                        <div className="w-[860px] h-[625px] p-3 bg-[#0e2a05] flex justify-center rounded-[15px]">                   
                            <img src={selectedImage} alt="Selected" className="w-[800px] h-[600px] " />
                        </div>
                    </div>
                </div>
                ):
                (
                    <div className="hidden"></div>
                )}
          </div>
        </div>
    </main>
  );
  }
