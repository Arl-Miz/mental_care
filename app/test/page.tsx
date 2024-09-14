import React from 'react'

const StressTest = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: "Plus Jakarta Sans, Noto Sans, sans-serif" }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between"><p className="text-[#1C160C] text-base font-medium leading-normal">Question 1 of 10</p></div>
              <div className="rounded bg-[#E9DFCE]"><div className="h-2 rounded bg-[#019863]" style={{width: "10%;"}}></div></div>
            </div>
            <h1 className="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Stress test</h1>
            <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">Answer the following questions to get a better understanding of your stress levels</p>
            <h2 className="text-[#1C160C] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Question 1</h2>
            <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">In the last month, how often have you felt overwhelmed by stress?</p>
            <div className="flex px-4 py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span className="truncate">Not at all</span>
                  <input type="radio" name="0a41e53e-a792-4afb-92fb-84693915b778" className="invisible w-0" value="Not at all" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span className="truncate">Once or twice</span>
                  <input type="radio" name="0a41e53e-a792-4afb-92fb-84693915b778" className="invisible w-0" value="Once or twice" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span className="truncate">Sometimes</span>
                  <input type="radio" name="0a41e53e-a792-4afb-92fb-84693915b778" className="invisible w-0" value="Sometimes" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span className="truncate">Frequently</span>
                  <input type="radio" name="0a41e53e-a792-4afb-92fb-84693915b778" className="invisible w-0" value="Frequently" />
                </label>
                <label
                  className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
                >
                  <span className="truncate">Almost always</span>
                  <input type="radio" name="0a41e53e-a792-4afb-92fb-84693915b778" className="invisible w-0" value="Almost always" />
                </label>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="flex flex-col gap-3 rounded-xl bg-[#F4EFE6] px-4 py-3">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
                    style={{ backgroundImage:`url(${"https://cdn.usegalileo.ai/sdxl10/7e0c851e-9a04-43bd-91d6-3e02d965f2cc.png"})` }}

></div>
                  <div className="flex-1">
                    <p className="text-[#1C160C] text-base font-bold leading-tight truncate">Piano and rain</p>
                    <p className="text-[#A18249] text-sm font-normal leading-normal truncate">Calm sounds</p>
                  </div>
                  <button className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#019863] text-[#FFFFFF]">
                    <div className="text-inherit" data-icon="Play" data-size="20px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <div className="pt-1.5">
                  <div className="flex h-4 items-center justify-center">
                    <div className="h-1 flex-1 rounded-full bg-[#019863]"></div>
                    <div className="relative"><div className="absolute -left-2 -top-2 size-4 rounded-full bg-[#019863]"></div></div>
                    <div className="h-1 flex-1 rounded-full bg-[#019863] opacity-40"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#A18249] text-xs font-medium leading-normal tracking-[0.015em]">1:17</p>
                    <p className="text-[#A18249] text-xs font-medium leading-normal tracking-[0.015em]">2:23</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Next question</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StressTest

// import React from 'react'

// const StressTest = () => {
//   return (
    
//     <div classNameName="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{fontFamily: "Plus Jakarta Sans, Noto Sans"}}>
//       <div classNameName="layout-container flex h-full grow flex-col">
//         <header classNameName="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3"></header>
//         <div classNameName="px-40 flex flex-1 justify-center py-5">
//           <div classNameName="layout-content-container flex flex-col max-w-[960px] flex-1">
//             <h1 classNameName="text-[#1C160C] tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">Stress Test</h1>
//             <p classNameName="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">Answer the following questions to assess your current stress level</p>
//             <p classNameName="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1 px-4">
//               This test is for you to understand your current stress level. Please answer the following questions based on your feelings in the past month. Please choose the option
//               that best describes your feelings. The more honest you are, the more accurate the result will be.
//             </p>
//             <div classNameName="flex px-4 py-3">
//               <div classNameName="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Not at all</span>
//                   <input type="radio" name="065d9a6f-fdfd-4547-bc24-ff37506afb7b" classNameName="invisible w-0" value="Not at all" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">A little</span>
//                   <input type="radio" name="065d9a6f-fdfd-4547-bc24-ff37506afb7b" classNameName="invisible w-0" value="A little" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Moderately</span>
//                   <input type="radio" name="065d9a6f-fdfd-4547-bc24-ff37506afb7b" classNameName="invisible w-0" value="Moderately" />
//                 </label>
//                 <label
//                   classNameName="transition ease-in-out duration-500 flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#b15f5f] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#298686] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Very</span>
//                   <input type="radio" name="065d9a6f-fdfd-4547-bc24-ff37506afb7b" classNameName="invisible w-0" value="Very" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Extremely</span>
//                   <input type="radio" name="065d9a6f-fdfd-4547-bc24-ff37506afb7b" classNameName="invisible w-0" value="Extremely" />
//                 </label>
//               </div>
//             </div>
//             <div classNameName="flex px-4 py-3">
//               <div classNameName="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Not at all</span>
//                   <input type="radio" name="1e137f3b-0511-415b-b774-d86bd21b8740" classNameName="invisible w-0" value="Not at all" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">A little</span>
//                   <input type="radio" name="1e137f3b-0511-415b-b774-d86bd21b8740" classNameName="invisible w-0" value="A little" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Moderately</span>
//                   <input type="radio" name="1e137f3b-0511-415b-b774-d86bd21b8740" classNameName="invisible w-0" value="Moderately" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Very</span>
//                   <input type="radio" name="1e137f3b-0511-415b-b774-d86bd21b8740" classNameName="invisible w-0" value="Very" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Extremely</span>
//                   <input type="radio" name="1e137f3b-0511-415b-b774-d86bd21b8740" classNameName="invisible w-0" value="Extremely" />
//                 </label>
//               </div>
//             </div>
//             <div classNameName="flex px-4 py-3">
//               <div classNameName="flex h-10 flex-1 items-center justify-center rounded-full bg-[#F4EFE6] p-1">
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Not at all</span>
//                   <input type="radio" name="79117dca-4b7b-4fa2-b36a-d65258e6cad2" classNameName="invisible w-0" value="Not at all" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">A little</span>
//                   <input type="radio" name="79117dca-4b7b-4fa2-b36a-d65258e6cad2" classNameName="invisible w-0" value="A little" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Moderately</span>
//                   <input type="radio" name="79117dca-4b7b-4fa2-b36a-d65258e6cad2" classNameName="invisible w-0" value="Moderately" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Very</span>
//                   <input type="radio" name="79117dca-4b7b-4fa2-b36a-d65258e6cad2" classNameName="invisible w-0" value="Very" />
//                 </label>
//                 <label
//                   classNameName="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-[#FFFFFF] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#1C160C] text-[#A18249] text-sm font-medium leading-normal"
//                 >
//                   <span classNameName="truncate">Extremely</span>
//                   <input type="radio" name="79117dca-4b7b-4fa2-b36a-d65258e6cad2" classNameName="invisible w-0" value="Extremely" />
//                 </label>
//               </div>
//             </div>
//             <div classNameName="flex px-4 py-3">
//               <button
//                 classNameName="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#019863] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]"
//               >
//                 <span classNameName="truncate">Submit</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default StressTest
