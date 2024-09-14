import React from 'react'

const page = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{fontFamily: "Manrope, Noto Sans, sans-serif"}}>
    <div className="layout-container flex h-full grow flex-col">
      <div className="gap-1 px-6 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-80">
          <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="text-[#1C160C] text-base font-medium leading-normal">Stress Monitor</h1>
                <p className="text-[#A18249] text-sm font-normal leading-normal">Hi, let's start a full day of tracking</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-[#F4EFE6]"><p className="text-[#1C160C] text-sm font-medium leading-normal">Dashboard</p></div>
                <div className="flex items-center gap-3 px-3 py-2"><p className="text-[#1C160C] text-sm font-medium leading-normal">Daily log</p></div>
                <div className="flex items-center gap-3 px-3 py-2"><p className="text-[#1C160C] text-sm font-medium leading-normal">Insights</p></div>
                <div className="flex items-center gap-3 px-3 py-2"><p className="text-[#1C160C] text-sm font-medium leading-normal">Reminders</p></div>
                <div className="flex items-center gap-3 px-3 py-2"><p className="text-[#1C160C] text-sm font-medium leading-normal">Profile</p></div>
              </div>
            </div>
          </div>
          <div className="flex px-4 py-3">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Start a 24-hour track</span>
            </button>
          </div>
          <h3 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Quick actions</h3>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-10" data-icon="Pencil" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#1C160C] text-base font-normal leading-normal flex-1 truncate">Add a note</p>
            </div>
            <div className="shrink-0">
              <div className="text-[#1C160C] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-10" data-icon="TagSimple" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88l45.63-68.44A8,8,0,0,0,246.66,123.56ZM187.72,192H40V64H187.72l42.66,64Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#1C160C] text-base font-normal leading-normal flex-1 truncate">Add a tag</p>
            </div>
            <div className="shrink-0">
              <div className="text-[#1C160C] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-14 justify-between">
            <div className="flex items-center gap-4">
              <div className="text-[#1C160C] flex items-center justify-center rounded-lg bg-[#F4EFE6] shrink-0 size-10" data-icon="Image" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#1C160C] text-base font-normal leading-normal flex-1 truncate">Add a photo</p>
            </div>
            <div className="shrink-0">
              <div className="text-[#1C160C] flex size-7 items-center justify-center" data-icon="CaretRight" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight min-w-72">Stress Monitor</p></div>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
              <p className="text-[#1C160C] text-base font-medium leading-normal">Today's stress events</p>
              <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">0</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#E9DFCE]">
              <p className="text-[#1C160C] text-base font-medium leading-normal">Total stress events</p>
              <p className="text-[#1C160C] tracking-light text-2xl font-bold leading-tight">0</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#E9DFCE] p-6">
              <p className="text-[#1C160C] text-base font-medium leading-normal">Stress level over time</p>
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
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">12:00 AM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">3:00 AM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">6:00 AM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">9:00 AM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">12:00 PM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">3:00 PM</p>
                  <p className="text-[#A18249] text-[13px] font-bold leading-normal tracking-[0.015em]">6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#1C160C] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Stress event logs</h2>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
              <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">June 10, 2023</p>
              <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">No stress events today</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
              <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">June 9, 2023</p>
              <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">No stress events today</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
              <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">June 8, 2023</p>
              <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">No stress events today</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
              <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">June 7, 2023</p>
              <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">No stress events today</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
            <div className="flex flex-col justify-center">
              <p className="text-[#1C160C] text-base font-medium leading-normal line-clamp-1">June 6, 2023</p>
              <p className="text-[#A18249] text-sm font-normal leading-normal line-clamp-2">No stress events today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page