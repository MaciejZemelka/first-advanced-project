'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function WhyUs() {
  const pathname = usePathname()
  return (

    <footer className={pathname === '/' ? 'active' : 'hidden'}>
    <div className="justify-center flex py-[20px]">
        <div className=" w-[65%]  justify-between text-white">
            <a className="text-[30px] font-bold">Why us?</a>
            <div className="flex justify-between py-[20px] text-[18px]">
                <div className="px-[53px] py-[8px] text-[#60d579] rounded-[12px] bg-[#0c1b08] flex">
                  <div className="pt-[5px] pr-[10px]">
                    <svg className="" width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.95 12C9.35 12.4 9.86667 12.5958 10.5 12.5875C11.1333 12.5792 11.6 12.35 11.9 11.9L17.5 3.5L9.1 9.1C8.65 9.4 8.4125 9.85833 8.3875 10.475C8.3625 11.0917 8.55 11.6 8.95 12ZM10.5 0.5C11.4833 0.5 12.4292 0.6375 13.3375 0.9125C14.2458 1.1875 15.1 1.6 15.9 2.15L14 3.35C13.45 3.06667 12.8792 2.85417 12.2875 2.7125C11.6958 2.57083 11.1 2.5 10.5 2.5C8.28333 2.5 6.39583 3.27917 4.8375 4.8375C3.27917 6.39583 2.5 8.28333 2.5 10.5C2.5 11.2 2.59583 11.8917 2.7875 12.575C2.97917 13.2583 3.25 13.9 3.6 14.5H17.4C17.7833 13.8667 18.0625 13.2083 18.2375 12.525C18.4125 11.8417 18.5 11.1333 18.5 10.4C18.5 9.8 18.4292 9.21667 18.2875 8.65C18.1458 8.08333 17.9333 7.53333 17.65 7L18.85 5.1C19.35 5.88333 19.7458 6.71667 20.0375 7.6C20.3292 8.48333 20.4833 9.4 20.5 10.35C20.5167 11.3 20.4083 12.2083 20.175 13.075C19.9417 13.9417 19.6 14.7667 19.15 15.55C18.9667 15.85 18.7167 16.0833 18.4 16.25C18.0833 16.4167 17.75 16.5 17.4 16.5H3.6C3.25 16.5 2.91667 16.4167 2.6 16.25C2.28333 16.0833 2.03333 15.85 1.85 15.55C1.41667 14.8 1.08333 14.0042 0.85 13.1625C0.616667 12.3208 0.5 11.4333 0.5 10.5C0.5 9.11667 0.7625 7.82083 1.2875 6.6125C1.8125 5.40417 2.52917 4.34583 3.4375 3.4375C4.34583 2.52917 5.40833 1.8125 6.625 1.2875C7.84167 0.7625 9.13333 0.5 10.5 0.5Z" fill="#6FD786"/>
                    </svg>
                  </div>
                  <a> Fast</a>
                </div>
                <div className="px-[53px] py-[8px] text-[#60d579] rounded-[12px] bg-[#0c1b08] flex">
                  <div className="pt-[5px] pr-[10px]">
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.025 18.5V16.35C3.14166 16.15 2.37916 15.7667 1.7375 15.2C1.09583 14.6333 0.624997 13.8333 0.324997 12.8L2.175 12.05C2.425 12.85 2.79583 13.4583 3.2875 13.875C3.77916 14.2917 4.425 14.5 5.225 14.5C5.90833 14.5 6.4875 14.3458 6.9625 14.0375C7.4375 13.7292 7.675 13.25 7.675 12.6C7.675 12.0167 7.49166 11.5542 7.125 11.2125C6.75833 10.8708 5.90833 10.4833 4.575 10.05C3.14166 9.6 2.15833 9.0625 1.625 8.4375C1.09166 7.8125 0.824997 7.05 0.824997 6.15C0.824997 5.06667 1.175 4.225 1.875 3.625C2.575 3.025 3.29166 2.68333 4.025 2.6V0.5H6.025V2.6C6.85833 2.73333 7.54583 3.0375 8.0875 3.5125C8.62916 3.9875 9.025 4.56667 9.275 5.25L7.425 6.05C7.225 5.51667 6.94166 5.11667 6.575 4.85C6.20833 4.58333 5.70833 4.45 5.075 4.45C4.34166 4.45 3.78333 4.6125 3.4 4.9375C3.01666 5.2625 2.825 5.66667 2.825 6.15C2.825 6.7 3.075 7.13333 3.575 7.45C4.075 7.76667 4.94166 8.1 6.175 8.45C7.325 8.78333 8.19583 9.3125 8.7875 10.0375C9.37916 10.7625 9.675 11.6 9.675 12.55C9.675 13.7333 9.325 14.6333 8.625 15.25C7.925 15.8667 7.05833 16.25 6.025 16.4V18.5H4.025Z" fill="#6FD786"/>
                    </svg>
                  </div>
                  <a> Affordable</a>
                </div>
                <div className="px-[53px] py-[8px] text-[#60d579] rounded-[12px] bg-[#0c1b08] flex">
                  <div className="pt-[5px] pr-[10px]">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 18.5C1.45 18.5 0.979167 18.3042 0.5875 17.9125C0.195833 17.5208 0 17.05 0 16.5V2.5C0 1.95 0.195833 1.47917 0.5875 1.0875C0.979167 0.695833 1.45 0.5 2 0.5H16C16.55 0.5 17.0208 0.695833 17.4125 1.0875C17.8042 1.47917 18 1.95 18 2.5V16.5C18 17.05 17.8042 17.5208 17.4125 17.9125C17.0208 18.3042 16.55 18.5 16 18.5H2ZM2 16.5H16V2.5H2V16.5ZM3 14.5H15L11.25 9.5L8.25 13.5L6 10.5L3 14.5Z" fill="#6FD786"/>
                    </svg>
                  </div>
                  <a> Excellent Image Quality</a>
                </div>
                <div className="px-[53px] py-[8px] text-[#60d579] rounded-[12px] bg-[#0c1b08] flex">
                  <div className="pt-[3px] pr-[10px]">
                    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 13.5H9.5L8.925 10.275C9.25833 10.1083 9.52083 9.86667 9.7125 9.55C9.90417 9.23333 10 8.88333 10 8.5C10 7.95 9.80417 7.47917 9.4125 7.0875C9.02083 6.69583 8.55 6.5 8 6.5C7.45 6.5 6.97917 6.69583 6.5875 7.0875C6.19583 7.47917 6 7.95 6 8.5C6 8.88333 6.09583 9.23333 6.2875 9.55C6.47917 9.86667 6.74167 10.1083 7.075 10.275L6.5 13.5ZM8 20.5C5.68333 19.9167 3.77083 18.5875 2.2625 16.5125C0.754167 14.4375 0 12.1333 0 9.6V3.5L8 0.5L16 3.5V9.6C16 12.1333 15.2458 14.4375 13.7375 16.5125C12.2292 18.5875 10.3167 19.9167 8 20.5ZM8 18.4C9.73333 17.85 11.1667 16.75 12.3 15.1C13.4333 13.45 14 11.6167 14 9.6V4.875L8 2.625L2 4.875V9.6C2 11.6167 2.56667 13.45 3.7 15.1C4.83333 16.75 6.26667 17.85 8 18.4Z" fill="#6FD786"/>
                    </svg>
                  </div>
                  <a> Secure</a>
                </div>
                <div className="px-[53px] py-[8px] text-[#60d579] rounded-[12px] bg-[#0c1b08] flex">
                  <div className="pt-[4px] pr-[10px]">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 18.5V16.5H17.5V9.4C17.5 7.45 16.8208 5.79583 15.4625 4.4375C14.1042 3.07917 12.45 2.4 10.5 2.4C8.55 2.4 6.89583 3.07917 5.5375 4.4375C4.17917 5.79583 3.5 7.45 3.5 9.4V15.5H2.5C1.95 15.5 1.47917 15.3042 1.0875 14.9125C0.695833 14.5208 0.5 14.05 0.5 13.5V11.5C0.5 11.15 0.5875 10.8208 0.7625 10.5125C0.9375 10.2042 1.18333 9.95833 1.5 9.775L1.575 8.45C1.70833 7.31667 2.0375 6.26667 2.5625 5.3C3.0875 4.33333 3.74583 3.49167 4.5375 2.775C5.32917 2.05833 6.2375 1.5 7.2625 1.1C8.2875 0.7 9.36667 0.5 10.5 0.5C11.6333 0.5 12.7083 0.7 13.725 1.1C14.7417 1.5 15.65 2.05417 16.45 2.7625C17.25 3.47083 17.9083 4.30833 18.425 5.275C18.9417 6.24167 19.275 7.29167 19.425 8.425L19.5 9.725C19.8167 9.875 20.0625 10.1 20.2375 10.4C20.4125 10.7 20.5 11.0167 20.5 11.35V13.65C20.5 13.9833 20.4125 14.3 20.2375 14.6C20.0625 14.9 19.8167 15.125 19.5 15.275V16.5C19.5 17.05 19.3042 17.5208 18.9125 17.9125C18.5208 18.3042 18.05 18.5 17.5 18.5H9.5ZM7.5 11.5C7.21667 11.5 6.97917 11.4042 6.7875 11.2125C6.59583 11.0208 6.5 10.7833 6.5 10.5C6.5 10.2167 6.59583 9.97917 6.7875 9.7875C6.97917 9.59583 7.21667 9.5 7.5 9.5C7.78333 9.5 8.02083 9.59583 8.2125 9.7875C8.40417 9.97917 8.5 10.2167 8.5 10.5C8.5 10.7833 8.40417 11.0208 8.2125 11.2125C8.02083 11.4042 7.78333 11.5 7.5 11.5ZM13.5 11.5C13.2167 11.5 12.9792 11.4042 12.7875 11.2125C12.5958 11.0208 12.5 10.7833 12.5 10.5C12.5 10.2167 12.5958 9.97917 12.7875 9.7875C12.9792 9.59583 13.2167 9.5 13.5 9.5C13.7833 9.5 14.0208 9.59583 14.2125 9.7875C14.4042 9.97917 14.5 10.2167 14.5 10.5C14.5 10.7833 14.4042 11.0208 14.2125 11.2125C14.0208 11.4042 13.7833 11.5 13.5 11.5ZM4.525 9.95C4.40833 8.18333 4.94167 6.66667 6.125 5.4C7.30833 4.13333 8.78333 3.5 10.55 3.5C12.0333 3.5 13.3375 3.97083 14.4625 4.9125C15.5875 5.85417 16.2667 7.05833 16.5 8.525C14.9833 8.50833 13.5875 8.1 12.3125 7.3C11.0375 6.5 10.0583 5.41667 9.375 4.05C9.10833 5.38333 8.54583 6.57083 7.6875 7.6125C6.82917 8.65417 5.775 9.43333 4.525 9.95Z" fill="#6FD786"/>
                    </svg>
                  </div>
                  <a> Quick Support</a>
                </div>
            </div>
        </div>
    </div>
    </footer>
  );
}