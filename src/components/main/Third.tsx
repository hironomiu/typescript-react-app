import DualScreen from '../../assets/dual-screen.png'

const Third = () => {
  return (
    <div id="third" className="w-full py-36 text-white px-4  ">
      <img
        className="w-[600px] mx-auto rounded-md py-4"
        src={DualScreen}
        alt=""
      />
      <div className="max-w-[1240px] py-10 mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-1 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold">
            News Letter?
          </h1>
          <p>Sign up input email</p>
        </div>
        <div className="my-4 lg:col-span-2">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between w-full">
            <input
              className="p-3 py-4 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="sm:ml-6 py-4 my-4 bg-[#00df9a] text-black font-medium text-2xl w-[200px] rounded-md ">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third
