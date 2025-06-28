import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaPinterestP,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const instagramPhotos = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200",
  ];

  return (
    <>
      <footer className="bg-[#880808] text-white">
        <div className="max-w-[1300px] mx-auto py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-12">
            {/* Restaurant Info */}
            <div className="col-span-3 space-y-4">
              <h3 className="text-[32px] font-bold">RESTAURANT</h3>
              <p className="text-lg font-normal">
                Subscribe our newsletter and get discount 25%off
              </p>
              <div className="flex flex-col items-start space-y-4 text-white">
                {/* Input and Button */}
                <div className="flex overflow-hidde h-10 rounded-lg bg-white">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="px-4 py-2 text-black placeholder:text-gray-500 focus:outline-none w-64"
                  />
                  <button className="bg-[#A52A2A] hover:bg-[#880808] px-4 flex items-center justify-center transition-transform rounded-r-md">
                    <FaPaperPlane className="text-white text-lg" />
                  </button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 text-2xl">
                  <FaPinterestP className="text-[#E60023]" />
                  <FaTwitter className="text-[#1DA1F2]" />
                  <FaFacebookF className="text-[#316FF6]" />
                  <FaInstagram className="text-gradient-to-br from-yellow-400 via-pink-500 to-purple-600" />
                  <FaYoutube className="text-[#FF0000]" />
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-span-4 space-y-6">
              <h3 className="text-xl font-bold">Contact us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="size-6 mt-1 flex-shrink-0" />
                  <p className="text-lg">
                    3517 W. Gray St. Utica, Pennsylvania 57867
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="size-6 flex-shrink-0" />
                  <p className="text-lg">(480) 555-0103</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="size-6 flex-shrink-0" />
                  <p className="text-lg">M.Alyaqout@4house.Co</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="size-6 flex-shrink-0" />
                  <p className="text-lg">Sun - Sat / 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="col-span-2 space-y-6">
              <h3 className="text-xl font-bold">Links</h3>
              <div className="space-y-2.5 text-base">
                <a href="#" className="block text-white">
                  About us
                </a>
                <a href="#" className="block text-white">
                  Contact Us
                </a>
                <a href="#" className="block text-white">
                  Our Menu
                </a>
                <a href="#" className="block text-white">
                  Team
                </a>
                <a href="#" className="block text-white">
                  FAQ
                </a>
              </div>
            </div>

            {/* Instagram Gallery */}
            <div className="col-span-3 space-y-6">
              <h3 className="text-xl font-bold">Instagram Gallery</h3>
              <div className="grid grid-cols-3 gap-1">
                {instagramPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={photo}
                      width={109}
                      height={108}
                      alt={`Instagram photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer Bottom */}
      <FooterBottom />
    </>
  );
};

export default Footer;
