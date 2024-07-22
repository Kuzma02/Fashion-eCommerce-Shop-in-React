import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const SocialMediaFooter = () => {
  return (
    <div className="bg-secondaryBrown max-w-screen-2xl flex justify-center items-center flex-col mx-auto py-9 gap-3 mt-24 px-5 max-[400px]:px-3">
      <p className="text-base text-white font-light">Follow us on:</p>
      <div className="flex gap-2 text-white">
        <FaFacebookF className="w-3" />
        <FaInstagram className="w-4" />
        <FaTiktok className="w-4" />
        <FaLinkedinIn className="w-4" />
        <FaPinterestP className="w-4" />
        <FaYoutube className="w-4" />
      </div>
    </div>
  )
}
export default SocialMediaFooter