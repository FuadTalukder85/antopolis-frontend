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
    <section>
      <footer className="bg-[#880808] text-white">
        <div className="max-w-[1300px] mx-auto py-8 px-4 md:py-16 md:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Restaurant Info */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-2xl md:text-[32px] font-bold">RESTAURANT</h3>
              <p className="text-base md:text-lg">
                Subscribe our newsletter and get discount 25% off
              </p>
              <div className="space-y-4">
                {/* Email Input */}
                <div className="flex h-10 rounded-lg overflow-hidden bg-white max-w-[300px]">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="px-4 py-2 text-black placeholder:text-gray-500 focus:outline-none w-full"
                  />
                  <button className="bg-[#A52A2A] hover:bg-[#880808] px-4 flex items-center justify-center transition-colors rounded-r-md">
                    <FaPaperPlane className="text-white text-lg" />
                  </button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-xl md:text-2xl">
                  <FaPinterestP className="text-[#E60023]" />
                  <FaTwitter className="text-[#1DA1F2]" />
                  <FaFacebookF className="text-[#316FF6]" />
                  <FaInstagram className="text-[#E1306C]" />
                  <FaYoutube className="text-[#FF0000]" />
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-bold">Contact us</h3>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 md:size-6 mt-1 flex-shrink-0" />
                  <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="size-5 md:size-6 flex-shrink-0" />
                  <p>(480) 555-0103</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="size-5 md:size-6 flex-shrink-0" />
                  <p>M.Alyaqout@4house.Co</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 md:size-6 flex-shrink-0" />
                  <p>Sun - Sat / 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-bold">Links</h3>
              <ul className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-y-2.5 text-sm md:text-base">
                <li>
                  <span>About us</span>
                </li>
                <li>
                  <span>Contact Us</span>
                </li>
                <li>
                  <span>Our Menu</span>
                </li>
                <li>
                  <span>Team</span>
                </li>
                <li>
                  <span>FAQ</span>
                </li>
              </ul>
            </div>

            {/* Instagram Gallery */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-xl font-bold">Instagram Gallery</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-1">
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
    </section>
  );
};

export default Footer;
