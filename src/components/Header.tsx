import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const [isSideNav, setIsSideNav] = useState(false)
  const handleClickIsNav = () => {
    setIsSideNav(!isSideNav)
  }
  return (
    <div className="top-0 fixed w-full">
      <header className="flex justify-between items-center h-24 mx-auto px-4 bg-gray-900/50">
        <h1 className="w-full text-3xl text-[#00df9a]">Web Site</h1>
        <nav className="hidden md:flex">
          <ul className="flex ">
            <li className="px-2 text-xl">
              <a href="#top">Top</a>
            </li>
            <li className="px-2 text-xl">
              <a href="#second">Second</a>
            </li>
            <li className="px-2 text-xl">
              <a href="#third">Third</a>
            </li>
            <li className="px-2 text-xl">
              <a href="#fourth">Fourth</a>
            </li>
          </ul>
        </nav>
        <div className="block md:hidden" onClick={handleClickIsNav}>
          {!isSideNav ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>
        <div
          className={
            isSideNav
              ? 'md:hidden fixed top-0 left-0 h-full w-[60%] bg-gray-900 ease-in-out duration-500 pl-4'
              : 'fixed left-[-100%] top-0 h-full ease-in-out duration-1000'
          }
        >
          <h1 className="w-full text-3xl mt-8">Side Menu　　　　　</h1>
          <ul className="flex flex-col pt-10">
            <li
              onClick={handleClickIsNav}
              className="px-2 text-xl border-b border-gray-300 pt-4 pb-2 mr-4"
            >
              <a href="#top">Top</a>
            </li>
            <li
              onClick={handleClickIsNav}
              className="px-2 text-xl border-b border-gray-300 pt-4 pb-2 mr-4"
            >
              <a href="#second">Second</a>
            </li>
            <li
              onClick={handleClickIsNav}
              className="px-2 text-xl border-b border-gray-300 pt-4 pb-2 mr-4"
            >
              <a href="#third">Third</a>
            </li>
            <li
              onClick={handleClickIsNav}
              className="px-2 text-xl border-b border-gray-300 pt-4 pb-2 mr-4"
            >
              <a href="#fourth">Fourth</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
