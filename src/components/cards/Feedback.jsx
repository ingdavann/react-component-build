import React from 'react'

export default function Feedback() {
  return (
    <>
        <section class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-5 mt-10">
            <div class=" hover:shadow-indigo-300 hover:shadow-lg rounded-lg border">
                <div class="flex justify-center items-start flex-col p-5 ">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
                        </path>
                    </svg>

                    <div class="flex justify-center items-start flex-col text-left gap-5">
                        <p class="italic text-sm md:text-base">
                            Here goes the review submitted by user,
                            Here goes the review submitted by user
                        </p>
                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold">Jon Doe</h3>
                            <p class="text-xs md:text-sm">Founder of XYZ</p>
                        </div>
                    </div>

                </div>
                <div class="bg-sky-500 p-0.5 rounded-b-lg"></div>
            </div>
            <div class=" hover:shadow-indigo-300 hover:shadow-lg rounded-lg border">
                <div class="flex justify-center items-start flex-col p-5 ">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
                        </path>
                    </svg>

                    <div class="flex justify-center items-start flex-col text-left gap-5">
                        <p class="italic text-sm md:text-base">
                            Here goes the review submitted by user,
                            Here goes the review submitted by user
                        </p>
                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold">Sarandy</h3>
                            <p class="text-xs md:text-sm">Founder of Taxi Fast</p>
                        </div>
                    </div>

                </div>
                <div class="bg-sky-500 p-0.5 rounded-b-lg"></div>
            </div>
            <div class=" hover:shadow-indigo-300 hover:shadow-lg rounded-lg border">
                <div class="flex justify-center items-start flex-col p-5 ">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path
                            d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
                        </path>
                    </svg>

                    <div class="flex justify-center items-start flex-col text-left gap-5">
                        <p class="italic text-sm md:text-base">
                            Here goes the review submitted by user,
                            Here goes the review submitted by user
                        </p>
                        <div>
                            <h3 class="text-xl md:text-2xl font-semibold">PhalPhea Pheakdey</h3>
                            <p class="text-xs md:text-sm">Founder of Facepen</p>
                        </div>
                    </div>

                </div>
                <div class="bg-sky-500 p-0.5 rounded-b-lg"></div>
            </div>
        </section>
    </>
  )
}
