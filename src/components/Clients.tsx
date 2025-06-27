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
    <>
      <section className="mt-[420px] bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          {/* section title  */}
          <div className="text-center mb-16">
            <p className="text-[#A52A2A] font-normal text-lg mb-4">
              Partners & Clients
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#333333]">
              We work with the best people
            </h2>
          </div>

          {/* company logo  */}
          <div className="w-full">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              <div className="flex gap-12 items-center">
                {partnerLogos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image
                      src={logo?.src || "/placeholder.svg"}
                      alt={`Partner ${index + 1}`}
                      width={148}
                      height={128}
                      className="w-36 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
