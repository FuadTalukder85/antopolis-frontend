import Image from "next/image";

const TeamCard = (member: any) => {
  return (
    <div className="bg-white shadow">
      <Image
        src={member?.image}
        width={312}
        height={310}
        alt="team member"
        className="w-full"
      />

      <div className="text-center py-3.5">
        <h1 className="text-xl font-black text-[#4F4F4F]">{member?.name}</h1>
        <p className="text-[#828282] pt-1">{member?.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
