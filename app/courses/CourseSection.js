import HorizontalRuling from "@/components/HorizontalRuling.js";
import CourseCard from "./CourseCard.js";

export default function MemberDepartment({ section, classes }) {
  return (
    <div className="pb-[60px] bg-quaternary">
      <div className="mb-[20px]">
        <HorizontalRuling>
          <div className="relative w-[544px] h-[45px]">
            <div className="absolute drop-shadow-lg w-[544px] h-[45px] background" />

            <p className="absolute left-[20px] font-link font-bold text-[25px] text-text underline top-[22.5px] -translate-y-1/2">
              {section}
            </p>
          </div>
        </HorizontalRuling>
      </div>

      <div className="flex flex-wrap justify-center pt-[10px]">
        {classes.map((member, i) => (
          <div className="mx-[40px] mt-[20px]" key={i}>
            <CourseCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
}
