import members from "@/data/members.json";
import MemberDepartment from "./MemberDepartment.js";

export default function Members() {
  return (
    <div className="relative">
      <p className="font-link absolute text-[40px] font-bold top-[90px] -translate-y-1/2 left-[50vw] -translate-x-1/2 text-[#45379D] underline">
        Our Team
      </p>
      
      <div className="pt-[200px]">
        {members.map(({ department, members }, i) => (
          <MemberDepartment name={department} members={members} key={i} />
        ))}
      </div>
    </div>
  );
}
