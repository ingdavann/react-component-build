import React from 'react'

export default function Navbar() {
  return (
    <>
        <nav class=" text-gray-800 flex items-center justify-between w-[90%] mx-auto">
            <a class="" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Ben_10_Omnitrix.png" className='w-14 h-14' alt="logo"/>  
            </a>
            <div class="flex items-center gap-5 text-lg font-bold hover:text-gray-600">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </nav>
    </>
  )
}
