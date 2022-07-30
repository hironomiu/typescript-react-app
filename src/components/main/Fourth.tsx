import React from 'react'
const Fourth = () => {
  return (
    <div id="fourth" className="bg-white text-black w-full  py-[10rem]">
      <div className="grid lg:grid-cols-3 mx-auto gap-8 py-16 px-8 w-full">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 bg-gray-100">
          <h2 className="text-center text-2xl font-bold py-8">CardA</h2>
          <p className="text-center text-4xl font-bold">TextText</p>
          <div>
            <p className="text-center text-xl py-2 mx-8 mt-8">hoge</p>
            <p className="text-center text-xl py-2 mx-8">fuga</p>
            <p className="text-center text-xl py-2 mx-8">piyo</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 bg-gray-100">
          <h2 className="text-center text-2xl font-bold py-8">CardB</h2>
          <p className="text-center text-4xl font-bold">TextText</p>
          <div>
            <p className="text-center text-xl py-2 mx-8 mt-8">hoge</p>
            <p className="text-center text-xl py-2 mx-8">fuga</p>
            <p className="text-center text-xl py-2 mx-8">piyo</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300 bg-gray-100">
          <h2 className="text-center text-2xl font-bold py-8">CardC</h2>
          <p className="text-center text-4xl font-bold">TextText</p>
          <div>
            <p className="text-center text-xl py-2 mx-8 mt-8">hoge</p>
            <p className="text-center text-xl py-2 mx-8">fuga</p>
            <p className="text-center text-xl py-2 mx-8">piyo</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default Fourth
