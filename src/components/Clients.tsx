import Image from "next/image";
import Marquee from "react-fast-marquee";
import img01 from "../assets/image/img01.png";
import img02 from "../assets/image/img02.png";
import img03 from "../assets/image/img03.png";
import img04 from "../assets/image/img04.png";
import img05 from "../assets/image/img05.png";
import img06 from "../assets/image/img06.png";

const Clients = () => {
  const partnerLogos = [img01, img02, img03, img04, img05, img06, img04];

  return (
    <section className="mt-[550px] md:mt-[400px] bg-gray-50 py-20">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-[#A52A2A] font-normal text-lg mb-4">
            Partners & Clients
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333]">
            We work with the best people
          </h2>
        </div>

        {/* Responsive Marquee */}
        <div className="w-full overflow-hidden">
          <Marquee gradient={false} speed={50} pauseOnHover direction="right">
            <div className="flex gap-6 sm:gap-10 md:gap-12 items-center">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    width={148}
                    height={128}
                    className="w-24 h-20 sm:w-28 sm:h-24 md:w-36 md:h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Clients;
