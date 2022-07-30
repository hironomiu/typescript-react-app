import React from 'react'

const Fourth = () => {
  return (
    <div
      id="fourth"
      className="bg-white text-black w-full h-[100vh] py-[10rem]"
    >
      <div className="grid lg:grid-cols-3 mx-auto gap-8 py-16 px-4 w-full">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 h-[40vh] bg-gray-100">
          <p className="text-center">Text</p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 h-[40vh] bg-gray-100">
          <p className="text-center">Text</p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 h-[40vh] bg-gray-100">
          <p className="text-center">Text</p>
        </div>
      </div>
    </div>
  )
}

export default Fourth
