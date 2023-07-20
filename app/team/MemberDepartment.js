import HorizontalRuling from "@/components/HorizontalRuling.js";
import MemberCard from "./MemberCard.js";

export default function MemberDepartment({ name, members }) {
  return (
    <div className="pb-[80px] bg-[#E5D6FF]">
      <HorizontalRuling>
        <div className="relative w-[544px] h-[45px]">
          <img
            src="/about_us_background.svg"
            className="absolute drop-shadow-lg w-[544px] h-[45px]"
          />

          <p className="absolute left-[20px] font-link font-bold text-[25px] text-[#45379D] underline top-[22.5px] -translate-y-1/2">
            {name}
          </p>
        </div>
      </HorizontalRuling>

      <hr className="my-[10px]" />

      <div className="flex flex-wrap justify-center pt-[50px]">
        {members.map((member, i) => (
          <div className="mx-[40px]">
            <MemberCard {...member} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
