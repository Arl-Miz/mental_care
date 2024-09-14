import React from 'react'

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: "Manrope, Noto Sans, sans-serif"}}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1C160C]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Calm</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">Sleep</a>
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">Meditate</a>
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">Music</a>
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">Body</a>
              <a className="text-[#1C160C] text-sm font-medium leading-normal" href="#">MasterclassName</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#1C160C]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#1C160C]" data-icon="Gift" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#1C160C]" data-icon="User" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#1C160C]" data-icon="ShoppingCart" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] md:max-w-[512px] py-5 max-w-[960px] flex-1">
          {/* <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"> */}
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Stress Tracker</p></div>
            <h3 className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">You're feeling stressed</h3>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-[#1C160C] text-base font-medium leading-normal">Your current stress level is 60%</p></div>
              <div className="rounded bg-[#E9DFCE]"><div className="h-2 rounded bg-[#019863]" style={{width: "60%"}}></div></div>
              <p className="text-[#A18249] text-sm font-normal leading-normal">You've been feeling stressed for the past 3 days</p>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#E9DFCE] px-4 justify-between">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#019863] text-[#1C160C] pb-[13px] pt-4 flex-1" href="#">
                  <p className="text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]">Trends</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] pb-[13px] pt-4 flex-1" href="#">
                  <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">Triggers</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#A18249] pb-[13px] pt-4 flex-1" href="#">
                  <p className="text-[#A18249] text-sm font-bold leading-normal tracking-[0.015em]">Coping</p>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Stress level</p>
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#A18249"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F4EFE6"></stop>
                        <stop offset="1" stop-color="#F4EFE6" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Sat</p>
                    <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Sun</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Triggers</p>
                <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                  <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: "40%" }}></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Work</p>
                  <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: "50%" }}></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Relationships</p>
                  <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: "50%" }}></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Health</p>
                  <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: "70%" }}></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Money</p>
                  <div className="border-[#A18249] bg-[#F4EFE6] border-t-2 w-full" style={{ height: "20%" }}></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Other</p>
                </div>
              </div>
            </div>
            <h3 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Coping mechanism effectiveness</h3>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
                <p className="text-[#1C160C] text-base font-medium leading-normal">Coping mechanism effectiveness</p>
                <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Mindfulness</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "70%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Exercise</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "10%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Sleep</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "80%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Socialize</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "20%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Music</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "20%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Eat healthy</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "100%"}}></div></div>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">Entertainment</p>
                  <div className="h-full flex-1"><div className="border-[#A18249] bg-[#F4EFE6] border-r-2 h-full" style={{width: "50%"}}></div></div>
                </div>
              </div>
            </div>
            <h3 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Resource to help you manage your stress</h3>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={{ backgroundImage: `url(${"https://cdn.usegalileo.ai/sdxl10/92e16457-26fd-4484-9a01-ae4d82b958e9.png"})`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">How to handle stress</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">A practical guide to coping with stress</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={{ backgroundImage: `url(${"https://cdn.usegalileo.ai/sdxl10/48e1af1a-f126-4bd5-a9b4-4b3a3c26e221.png"})`}}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">How to handle stress</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">A practical guide to coping with stress</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style= {{backgroundImage: `url(${"https://cdn.usegalileo.ai/sdxl10/6f053afa-c04a-412f-b622-4cccb274c16c.png"})`}}
                  
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">How to handle stress</p>
                <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">A practical guide to coping with stress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page