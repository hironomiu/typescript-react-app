import DualScreen from '../../assets/dual-screen.png'
const Second = () => {
  return (
    <div
      id="second"
      className="bg-white w-full mt-24 px-4 text-black h-[80vh] flex justify-center items-center lg:h-[100vh]"
    >
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
            abiewebmek dkdbiyenen ddeibaqiobm sssdkbieob sseebbdekd weifi3kakak
            bbhwneibiwidkd aaiwbmeafjaimei
          </p>
          <button className="my-4 py-4 bg-black text-[#00df9a] font-medium text-2xl  w-[200px] rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Second
