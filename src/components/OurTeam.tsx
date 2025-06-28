import team1 from "../assets/image/team1.png";
import Image from "next/image";

const members = [
  { name: "Mark Henry", role: "Owner", image: team1 },
  { name: "Lucky Helen", role: "Chef", image: team1 },
  { name: "Moon Henry", role: "Founder", image: team1 },
  { name: "Tom Monrow", role: "Specialist", image: team1 },
];

const OurTeam = () => {
  return (
    <section
      className="relative -mt-[2px]"
      style={{
        backgroundImage: `url(https://i.postimg.cc/TPMsJkCz/unsplash-Oz-BLe-Eg1mg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#AD1519D9] z-0" />
      <div className="max-w-[1300px] z-auto mx-auto  lg:pt-12 lg:pb-44 relative">
        {/* section content */}
        <div className="text-center mt-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Team Member
          </h2>
          <p className="text-white font-normal text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-white font-normal text-base">
            Varius sed pharetra dictum neque massa congue
          </p>
        </div>

        {/* team members */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 absolute justify-center mt-14">
          {members.map((member, index) => (
            <div key={index} className="bg-white shadow">
              <Image
                src={member?.image}
                width={312}
                height={310}
                alt="team member"
                className="w-full"
              />

              <div className="text-center py-3.5">
                <h1 className="text-xl font-black text-[#4F4F4F]">
                  {member?.name}
                </h1>
                <p className="text-[#828282] pt-1">{member?.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
