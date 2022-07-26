import React from 'react'
import DualScreen from '../assets/dual-screen.png'

const Main = () => {
  return (
    <main className="">
      <div className="max-w-[1240px] flex flex-col mt-[-96px] h-screen w-full  mx-auto text-center items-center justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          hello world hoge fuga piyo gaga
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold mt-4">
          Hi! Hello World!!
        </h1>
        <h2 className="md:text-5xl sm:text-4xl text-2xl font-bold mt-4">
          Hello!!!Hello!!Hello!!
        </h2>
        <p className="md:text-3xl sm:text-2xl text-xl my-2">
          This is a pen. That is a pen. What is a pen.
        </p>
        <p className="md:text-3xl sm:text-2xl text-xl my-2">Apple Orange,</p>
        <p className="text-gray-500 md:text-3xl sm:text-2xl text-xl my-2">
          hellohello hello!!hello!!hello!! bye!bye!bye!bye!bye!
        </p>
        <button className="py-4 my-4 bg-[#00df9a] text-black font-medium text-2xl w-[200px] rounded-md ">
          Get Started
        </button>
      </div>
      <div className="bg-white w-full py-16 px-4 text-black">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto rounded-md py-4"
            src={DualScreen}
            alt=""
          />
          <div className="py-4 mx-auto flex flex-col px-4">
            <p className="text-[#00df9a] font-bold">hello! world!</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Programing Cool!
            </h1>
            <p>
              abiewebmek dkdbiyenen ddeibaqiobm sssdkbieob sseebbdekd
              weifi3kakak bbhwneibiwidkd aaiwbmeafjaimei
            </p>
            <button className="my-4 py-4 bg-black text-[#00df9a] font-medium text-2xl  w-[200px] rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
