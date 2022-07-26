import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="max-w-[1240px] py-16 px-4 mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full text-3xl text-[#00df9a]">Web Site</h1>
        <p className="py-4">OK! hey! are are are OK!OK! bye!thank you!</p>
        <div className="flex justify-between md:w-[75%] mt-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex">
        <div className="mx-auto">hoge</div>
        <div className="mx-auto">fuga</div>
        <div className="mx-auto">piyo</div>
      </div>
    </footer>
  )
}

export default Footer
